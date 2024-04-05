# Verd Dev Web App

Portfolio website for Verderese Development

## Local Development

### Running the Application on the Host Machine

1. Ensure [Docker](https://www.docker.com/) is installed on your machine.
2. Ensure [nodenv](https://github.com/nodenv/nodenv) is installed on your machine.
3. Install the correct version of Node and upgrade NPM

```bash
nodenv install -s
npm install -g npm
```

4. Run the dependency containers.

```bash
npm run docker:local
```

5. Run the web application. As an alternative, you can run the "Next Dev" WebStorm run configuration.

```bash
npm run dev
```

### Committing Changes

1. Install pre-commit hooks. This will ensure all linting passes before committing to git.

```bash
npm run git:install-hooks
```
