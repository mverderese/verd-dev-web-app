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
  type = list(string)
  #   default = ["dev", "stg", "prod"]
  default = ["prod"]
}

variable "oauth_client_ids" {
  type = map(string)
  default = {
    "dev" : "356138309962-u1144ig8v4jflob7fsv7ssmd6o6dsqme.apps.googleusercontent.com"
    "stg" : "356138309962-at7b70bv29gb9k8i28pu3kcr11md4088.apps.googleusercontent.com"
    "prod" : ""
  }
}