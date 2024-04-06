# Verd Dev Web App

Portfolio website for Verderese Development

## Local Development

### Running the Application on the Host Machine

1. Ensure [Docker](https://www.docker.com/) is installed on your machine.
2. Ensure [nodenv](https://github.com/nodenv/nodenv) is installed on your machine.
3. Ensure [Terraform](https://developer.hashicorp.com/terraform/install) is installed on your machine.
4. Install the correct version of Node and upgrade NPM
   ```bash
   nodenv install -s
   npm install -g npm
   ```
5. Run the dependency containers.
   ```bash
   npm run docker:local
   ```
6. Run the web application. As an alternative, you can run the "Next Dev" WebStorm run configuration.
   ```bash
   npm run dev
   ```

### Committing Changes

1. Install pre-commit hooks. This will ensure all linting passes before committing to git.

```bash
npm run git:install-hooks
```

## Infrastructure

The infrastructure for this project is managed via [Terraform](https://www.terraform.io/).

### First Time Setup

If you have cloned this project and are setting up a new GCP project to host the web application, you will need to make a few manual changes.

1. Ensure the Google Cloud CLI is installed on your machine. [Homebrew](https://formulae.brew.sh/cask/google-cloud-sdk) is the easiest way to install on a Mac. Otherwise, follow the instructions in the [Install the gcloud CLI guide](https://cloud.google.com/sdk/docs/install)
2. Create a [GCP Billing Account](https://console.cloud.google.com/billing/). If this is your first time doing this, you should be eligible for the $300 in free credit.
3. Ensure Terraform is installed on your machine. [Homebrew](https://formulae.brew.sh/formula/terraform) is the easiest way to install on a Mac. Otherwise, follow the instructions in the [Install Terraform guide](https://learn.hashicorp.com/tutorials/terraform/install-cli)
4. Log in to the Google Cloud CLI and set the application default credentials.
   ```bash
   gcloud auth login
   gcloud auth application-default login
   ```
5. Copy `ops/terraform/production.auto.tfvars.example` to `ops/terraform/production.auto.tfvars` and fill in the required values.
6. Copy `ops/terraform/bootstrap/terraform.tfvars.example` to `ops/terraform/bootstrap/terraform.tfvars` and fill in the required values.
7. Update the bucket name at `ops/terraform/main.tf:9` to be `{project}-bucket-tfstate`. The provider block of terraform does not support variables.
8. Run the bootstrap terraform script to create the GCP project and enable the required APIs. **The state file for this script should be force checked into the repository.** _TODO_: See if there is a better way to handle this.
   ```bash
   npm run terraform:bootstrap
   ```
9. Run the main terraform script to create the infrastructure.
   ```bash
   npm run terraform:apply
   ```

### Updating Infrastructure

If you have already set up the infrastructure and need to make changes, always run a plan first to see what changes will be made.

```bash
npm run terraform:plan
```

Once you are happy with the changes, apply them.

```bash
npm run terraform:apply
```

_TODO_: Leverage [Atlantis](https://www.runatlantis.io/) to manage Terraform changes via Pull Requests.
