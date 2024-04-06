terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.23.0"
    }
  }
}

provider "google" {
  project = var.project
  default_labels = {
    management = "terraform"
  }
}

resource "google_project" "verderese_development_project" {
  name            = "Verderese Development"
  project_id      = "verderese-development"
  billing_account = var.billing_account_id
}

resource "google_project_service" "project_services" {
  for_each = toset([
    "storage-api.googleapis.com",
    "storage-component.googleapis.com",
  ])
  service = each.key
}

resource "google_storage_bucket" "default" {
  name          = "${var.project}-bucket-tfstate"
  force_destroy = false
  location      = "US"
  storage_class = "STANDARD"
  versioning {
    enabled = true
  }
}