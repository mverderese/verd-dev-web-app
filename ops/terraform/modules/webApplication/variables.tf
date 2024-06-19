variable "project" {
  type = string
}
variable "environment" {
  type = string
}
variable "region" {
  type = string
}
variable "dns_managed_zone" {
  type = object({
    name     = string
    id       = string
    dns_name = string
  })
}
variable "db_instance" {
  type = object({
    name            = string
    connection_name = string
  })
}
variable "oauth_client_ids" {
  type = map(string)
}