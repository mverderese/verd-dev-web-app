# Verderese Web App

Personal site for Mike Verderese and Verderese Development LLC. This project serves two purposes:

1. The source code for [mikeverderese.com](https://mikeverderese.com/).
2. A small, readable example of how I like to build web applications: typed end to end, componentized, tested, and
   free of heavyweight UI kits.

Merges into `main` deploy automatically to Vercel.

## Architecture

| Concern       | Choice                                                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| Framework     | [React Router 7](https://reactrouter.com/) in framework mode, with every route prerendered to static HTML |
| Language      | TypeScript in `strict` mode, with `noUncheckedIndexedAccess` and `verbatimModuleSyntax`                   |
| Content       | Typed data modules validated with [Zod](https://zod.dev/) at build time (`src/content`)                   |
| Styling       | Hand-built components with CSS Modules, driven by design tokens (`src/styles/tokens.css`), light and dark |
| Fonts         | Schibsted Grotesk and IBM Plex Mono, self-hosted via Fontsource                                           |
| Quality gates | ESLint (`strictTypeChecked`, jsx-a11y), Prettier, Vitest + Testing Library, Playwright + axe              |
| Hosting       | Vercel, serving `build/client` with redirects and a SPA fallback (`vercel.json`)                          |

```
src/
  root.tsx            HTML shell, header, footer, error boundary
  routes.ts           Route table
  routes/             One module per page, each with a co-located CSS Module
  components/         Reusable UI (Container, ButtonLink, SiteHeader, CaseStudy/*, ...)
  content/            Case studies, earlier work and page copy, with Zod schemas
  lib/                Site constants, environment, meta tags, formatting
  styles/             Design tokens and global base styles
e2e/                  Playwright smoke and accessibility tests
scripts/              Local static server that mirrors Vercel's routing
```

### Adding a case study

Add an entry to `src/content/caseStudies.ts`. The schema in `src/content/schema.ts` types every field and validates it
when the module loads, so a missing alt text, malformed slug or impossible year range fails the build. Prerendering
picks up the new `/work/:slug` page automatically. Images go in `public/images/work/`.

### Growing into server routes

The site is fully static today (`ssr: false` in `react-router.config.ts`). To add server-rendered pages or API routes
(AI demos, a client area), set `ssr: true`, add the
[Vercel React Router preset](https://vercel.com/docs/frameworks/react-router), and keep prerendering the static pages.

## Local Development

1. Install [nodenv](https://github.com/nodenv/nodenv), then the pinned Node version:
   ```bash
   nodenv install -s
   ```
2. Copy `.env.local.example` to `.env.local` and fill in any values you need. Everything is optional locally.
3. Install dependencies (this also installs the Git hooks):
   ```bash
   npm install
   ```
4. Start the dev server at http://localhost:5173:
   ```bash
   npm run dev
   ```

### Scripts

| Script                    | What it does                                             |
| ------------------------- | -------------------------------------------------------- |
| `npm run dev`             | Dev server with hot reload                               |
| `npm run build`           | Prerendered production build in `build/client`           |
| `npm run preview`         | Serves the production build the way Vercel does          |
| `npm run lint`            | Prettier check, ESLint and type checking                 |
| `npm test`                | Unit and component tests (Vitest)                        |
| `npm run test:e2e`        | Builds, serves, and runs Playwright smoke and axe checks |
| `npm run prettify`        | Formats and auto-fixes lint issues                       |
| `npm run terraform:<cmd>` | Manages the GCP infrastructure in `ops/terraform`        |

Run `npx playwright install chromium` once before the first `test:e2e`.

### Environment variables

| Variable                 | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| `VITE_APP_ENV`           | `local`, `dev`, `stg` or `prod`. Only `prod` is indexable. |
| `VITE_BASE_URL`          | Origin used for canonical and Open Graph URLs              |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics, loaded only in production builds         |
| `VITE_HOTJAR_SITE_ID`    | Hotjar, loaded only in production builds                   |

Per-environment values live in `ops/env/`.

## Git Development Workflow

1. Install pre-commit hooks. This will ensure all linting passes before committing to git.
   ```bash
   npm run git:install-hooks
   ```
1. Create a branch off of latest `develop`

   ```bash
   git checkout develop &&
   git fetch origin &&
   git reset --hard origin/develop &&
   git checkout -b <branch_name>
   ```

1. Commit and push early and often
1. Ensure your branch is up-to-date with `develop`

   ```bash
   git fetch origin &&
   git merge origin/develop &&
   # Resolve merge conflicts if they come up
   git push
   ```

   (You may need to `git push --set-upstream origin <branchname>`)

1. Create a pull request in GitHub with the issue number at the end of the title.
1. Ensure all CI checks pass and request reviewers.
1. Once someone approves the PR, ensure you are still up-to-date with `develop`.
1. Merge the PR

### Commit Message

It's important that we maintain a clean and readable commit history on the `develop` branch in each of our Git repos. Each commit on a branch that is ready to be merged into `develop` should adhere to the following guidelines:

- Commits should be able to stand alone as a single unit of change and not (intentionally) introduce any breakages or undesired changes to production code paths - they should generally encapsulate a single logical change or several small, closely-related changes.
- Messages must have a summary line that is prefixed with the GitHub issue ID. If a given change does not have an associated ticket, create one or (for extremely trivial changes) use 000 as a placeholder.
- Messages must be wrapped at 72 characters. The summary line must not exceed 50 characters and must be followed by a blank line if including a message body.
- Messages should be concise and meaningful, including as much detail as needed to convey the purpose of the change (bug fix, code cleanup, feature, etc), how the specific issue was addressed, and any limitations/caveats or other notable points - they should not, however, be overly verbose or include too much technical detail.

#### Example of a well-structured commit message

```
Summary plus GitHub issue number

More detailed explanatory text. Wrap it to 72 characters. You may omit
the body entirely; otherwise, the blank line separating the summary
from the body is critical.

Write your commit message in the imperative: "Fix bug" and not "Fixed
bug" or "Fixes bug." This convention matches up with commit messages
generated by commands like git merge and git revert.

Each paragraph should be separated from the others by a blank line.
- Bullet points are okay, too.
- Typically a hyphen or asterisk is used for the bullet, followed by a
 single space. Use a hanging indent.
```

**Note**: It is helpful to setup your text editor or IDE that you use to write commit messages to have a visual guide at 50 and 72 characters.

### Pull Request

A pull request ("PR") should almost always introduce a non-breaking change, with each commit very clear as to what it does.

The title of a pull request should be no more than 72 characters and should follow this format. Note that this format is not done automatically in most cases.

```
Short description of the change introduced
```

The body should have a description of the changes, and should include the message "Fixes <issue_number>" inside it, so that it links the PR to the GitHub issue.

Wherever possible, try to keep your pull requests small, and keep distinct changes isolated from each other. This will be a big help in speeding up development and code review and reducing the surface area for problems. There are a couple of reasons for this, and the main ones are outlined below.

### External Resources

[Git 50/72: the rule of well-formed Git commit messages](https://www.midori-global.com/blog/2018/04/02/git-50-72-rule)

[The Art of the Commit](http://alistapart.com/article/the-art-of-the-commit)

[Stages and Application Lifecycle](https://www.notion.so/4f2305a3e7cf44d282c6abaf0add3207)
