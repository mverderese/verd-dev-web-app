terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.23.0"
    }
  }
}

provider "google" {
  project     = var.project
  credentials = file(var.credentials_file)
  region      = var.region
  zone        = var.zone
  default_labels = {
    management  = "terraform"
    environment = var.environment
  }
}

resource "google_project" "verderese_development_project" {
  name            = "Verderese Development"
  project_id      = "verderese-development"
  billing_account = "01F4FF-081A6A-AE3441"
}

resource "google_service_account" "verd_dev_web_app_sa" {
  account_id   = "verd-dev-web-app-${var.environment}"
  display_name = "Verd Dev Web App ${title(var.environment)} service account"
}

resource "google_project_iam_binding" "verd_dev_web_app_sa_iam_binding" {
  for_each = toset(["roles/cloudsql.client", "roles/secretmanager.secretAccessor"])
  project  = var.project
  role     = each.key
  members  = ["serviceAccount:${google_service_account.verd_dev_web_app_sa.email}"]
}

resource "google_service_account" "github_actions_sa" {
  account_id   = "github-actions-${var.environment}"
  display_name = "GitHub Actions ${title(var.environment)} service account"
}

resource "google_project_iam_binding" "github_actions_sa_iam_binding" {
  for_each = toset(["roles/artifactregistry.writer", "roles/run.admin", "roles/secretmanager.viewer", "roles/secretmanager.secretAccessor"])
  project  = var.project
  role     = each.key
  members  = ["serviceAccount:${google_service_account.github_actions_sa.email}"]
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

