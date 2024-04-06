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