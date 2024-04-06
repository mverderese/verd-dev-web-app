locals {
  domain                     = var.environment == "prod" ? var.dns_managed_zone.dns_name : "${var.environment}.${var.dns_managed_zone.dns_name}"
  needs_root_domain_redirect = var.environment == "prod"
}

resource "google_service_account" "verd_dev_web_app_sa" {
  account_id   = "verd-dev-web-app-${var.environment}"
  display_name = "Verd Dev Web App ${title(var.environment)} service account"
}

resource "google_project_iam_member" "verd_dev_web_app_sa_iam_member" {
  for_each = toset(["roles/cloudsql.client", "roles/secretmanager.secretAccessor"])
  project  = var.project
  role     = each.key
  member   = "serviceAccount:${google_service_account.verd_dev_web_app_sa.email}"
}

resource "google_sql_database" "postgres_database" {
  instance = var.db_instance.name
  name     = "verd_dev_${var.environment}"
}

resource "google_secret_manager_secret" "web_app_db_user_password_secret" {
  secret_id = "verd-dev-web-app-db-user-password-${var.environment}"
  labels = {
    environment = var.environment
    management  = "terraform"
  }
  replication {
    auto {}
  }
}

resource "random_password" "web_app_db_user_password_value" {
  length = 32
}

resource "google_secret_manager_secret_version" "web_app_db_user_password_secret_version" {
  secret      = google_secret_manager_secret.web_app_db_user_password_secret.id
  secret_data = random_password.web_app_db_user_password_value.result
}

resource "google_sql_user" "web_app_db_user" {
  instance = var.db_instance.name
  name     = "verd_dev_web_app_${var.environment}"
  password = google_secret_manager_secret_version.web_app_db_user_password_secret_version.secret_data
}

resource "google_secret_manager_secret" "web_app_db_url_secret" {
  secret_id = "verd-dev-web-app-db-url-${var.environment}"
  labels = {
    environment = var.environment
    management  = "terraform"
  }
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_version" "web_app_db_url_secret_version" {
  secret      = google_secret_manager_secret.web_app_db_url_secret.id
  secret_data = "postgresql://${google_sql_user.web_app_db_user.name}:${google_secret_manager_secret_version.web_app_db_user_password_secret_version.secret_data}@localhost/${google_sql_database.postgres_database.name}?schema=public&host=/cloudsql/${var.db_instance.connection_name}"
}


resource "google_cloud_run_service" "verd_dev_web_app" {
  name = "verd-dev-web-app-${var.environment}"

  # Don't overwrite service deployments from GitHub Actions on subsequent Terraform runs.
  lifecycle {
    ignore_changes = [
      template
    ]
  }

  metadata {
    labels = {
      environment = var.environment
      management  = "terraform"
      deployment  = "github-actions"
    }
  }
  location = var.region
  project  = var.project

  template {
    spec {
      service_account_name = google_service_account.verd_dev_web_app_sa.email
      containers {
        # Sample container used for initialization of the Cloud Run service. Deployments will be managed by GitHub Actions.
        image = "us-docker.pkg.dev/cloudrun/container/hello"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}


resource "google_dns_record_set" "verd_dev_web_app_lb_dns" {
  name         = local.domain
  type         = "A"
  ttl          = 300
  managed_zone = var.dns_managed_zone.name
  rrdatas      = [module.lb-http.external_ip]
}

resource "google_compute_region_network_endpoint_group" "serverless_neg" {
  name                  = "verd-dev-web-app-lb-neg-${var.environment}"
  network_endpoint_type = "SERVERLESS"
  region                = var.region
  cloud_run {
    service = google_cloud_run_service.verd_dev_web_app.name
  }
}

# https://github.com/terraform-google-modules/terraform-google-lb-http/blob/v10.2.0/examples/cloudrun/main.tf
module "lb-http" {
  source  = "terraform-google-modules/lb-http/google//modules/serverless_negs"
  version = "~> 10.0"

  project                         = var.project
  name                            = "verd-dev-web-app-lb-${var.environment}"
  ssl                             = true
  managed_ssl_certificate_domains = [local.domain]
  https_redirect                  = true

  backends = {
    default = {
      description = null
      groups = [
        {
          group = google_compute_region_network_endpoint_group.serverless_neg.id
        }
      ]
      enable_cdn = false

      iap_config = {
        enable = false
      }
      log_config = {
        enable = false
      }
    }
  }
}