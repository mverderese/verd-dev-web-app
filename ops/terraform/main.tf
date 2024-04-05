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
    management = "terraform"
  }
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
