variable "project" {
  type = string
}

variable "region" {
  type    = string
  default = "us-central1"
}

variable "zone" {
  type    = string
  default = "us-central1-a"
}

variable "environments" {
  type    = list(string)
  default = ["dev", "stg", "prod"]
}

