terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
}

provider "google" {
  project     = "verderese-development"
  credentials = "/Users/mike/.config/gcloud/legacy_credentials/verderese@gmail.com/adc.json"
}

resource "google_compute_network" "vpc_network" {
  name = "verd-dev-web-services-vpc"
}
