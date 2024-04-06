variable "project" {
  type = string
}
variable "environment" {
  type = string
}
variable "region" {
  type = string
}
variable "db_instance" {
  type = object({
    name            = string
    connection_name = string
  })
}