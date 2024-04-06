terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.23.0"
    }
  }
  backend "gcs" {
    bucket = "verderese-development-bucket-tfstate"
    prefix = "terraform/state"
  }
}

provider "google" {
  project = var.project
  region  = var.region
  zone    = var.zone
  default_labels = {
    management  = "terraform"
    environment = var.environment
  }
}

resource "google_project_service" "project_services" {
  for_each = toset([
    "cloudresourcemanager.googleapis.com",
    "compute.googleapis.com",
    "container.googleapis.com",
    "artifactregistry.googleapis.com",
    "dns.googleapis.com",
    "iam.googleapis.com",
    "billingbudgets.googleapis.com",
    "iamcredentials.googleapis.com",
    "secretmanager.googleapis.com",
    "servicenetworking.googleapis.com",
    "sql-component.googleapis.com",
    "sqladmin.googleapis.com",
    "storage-api.googleapis.com",
    "storage-component.googleapis.com",
  ])
  service = each.key
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

resource "google_service_account" "github_actions_sa" {
  account_id   = "github-actions-${var.environment}"
  display_name = "GitHub Actions ${title(var.environment)} service account"
}

resource "google_project_iam_member" "github_actions_sa_iam_member" {
  for_each = toset(["roles/artifactregistry.writer", "roles/run.admin", "roles/secretmanager.viewer", "roles/secretmanager.secretAccessor"])
  project  = var.project
  role     = each.key
  member   = "serviceAccount:${google_service_account.github_actions_sa.email}"
}

resource "google_compute_network" "vpc_network" {
  name = "verd-dev-web-services-vpc"
}

resource "google_dns_managed_zone" "dns_managed_zone" {
  dns_name    = "verderesedevelopment.com."
  name        = "verderesedevelopment-com"
  description = "DNS zone for domain: verderesedevelopment.com"
  visibility  = "public"
  dnssec_config {
    state         = "on"
    kind          = "dns#managedZoneDnsSecConfig"
    non_existence = "nsec3"
    default_key_specs {
      algorithm  = "rsasha256"
      key_length = 2048
      key_type   = "keySigning"
      kind       = "dns#dnsKeySpec"
    }
    default_key_specs {
      algorithm  = "rsasha256"
      key_length = 1024
      key_type   = "zoneSigning"
      kind       = "dns#dnsKeySpec"
    }
  }
}

resource "google_artifact_registry_repository" "verd_dev_web_app_repo" {
  repository_id = "verd-dev-web-app"
  location      = var.region
  format        = "DOCKER"
}

resource "google_secret_manager_secret" "db_root_password_secret" {
  secret_id = "verderese-development-db-root-password"
  replication {
    auto {}
  }
  labels = {
    management = "terraform"
  }
}

resource "random_password" "db_root_password_value" {
  length = 32
}

resource "google_secret_manager_secret_version" "db_root_password_secret_version" {
  secret      = google_secret_manager_secret.db_root_password_secret.id
  secret_data = random_password.db_root_password_value.result
}

resource "google_sql_database_instance" "postgres_db_instance" {
  database_version    = "POSTGRES_15"
  deletion_protection = true
  instance_type       = "CLOUD_SQL_INSTANCE"
  name                = "verderese-development-db"
  project             = "verderese-development"
  region              = var.region
  root_password       = google_secret_manager_secret_version.db_root_password_secret_version.secret_data

  settings {
    activation_policy           = "ALWAYS"
    availability_type           = "ZONAL"
    connector_enforcement       = "NOT_REQUIRED"
    deletion_protection_enabled = true
    disk_autoresize             = true
    disk_autoresize_limit       = 0
    disk_size                   = 10
    disk_type                   = "PD_SSD"
    edition                     = "ENTERPRISE"
    pricing_plan                = "PER_USE"
    tier                        = "db-f1-micro"
    user_labels = {
      management = "terraform"
    }

    backup_configuration {
      binary_log_enabled             = false
      enabled                        = true
      location                       = "us"
      point_in_time_recovery_enabled = true
      start_time                     = "02:00"
      transaction_log_retention_days = 7

      backup_retention_settings {
        retained_backups = 7
        retention_unit   = "COUNT"
      }
    }

    insights_config {
      query_insights_enabled  = false
      record_application_tags = false
      record_client_address   = false
    }

    ip_configuration {
      enable_private_path_for_google_cloud_services = false
      ipv4_enabled                                  = true
      require_ssl                                   = false
    }

    location_preference {
      zone = var.zone
    }

    maintenance_window {
      day          = 7
      hour         = 8
      update_track = "stable"
    }
  }
}

resource "google_sql_database" "postgres_database" {
  instance = google_sql_database_instance.postgres_db_instance.name
  name     = "verd_dev_${var.environment}"
}

resource "google_secret_manager_secret" "web_app_db_user_password_secret" {
  secret_id = "verd-dev-web-app-db-user-password"
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
  instance = google_sql_database_instance.postgres_db_instance.name
  name     = "verd_dev_web_app_${var.environment}"
  password = google_secret_manager_secret_version.web_app_db_user_password_secret_version.secret_data
}