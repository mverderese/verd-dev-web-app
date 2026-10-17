# Personal Site

Personal site for Mike Verderese. This project serves two purposes:

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
2. Install dependencies (this also installs the Git pre-commit hooks that run lint):
   ```bash
   npm install
   ```
3. Start the dev server at http://localhost:5173:
   ```bash
   npm run dev
   ```

### Scripts

| Script             | What it does                                             |
| ------------------ | -------------------------------------------------------- |
| `npm run dev`      | Dev server with hot reload                               |
| `npm run build`    | Prerendered production build in `build/client`           |
| `npm run preview`  | Serves the production build the way Vercel does          |
| `npm run lint`     | Prettier check, ESLint and type checking                 |
| `npm test`         | Unit and component tests (Vitest)                        |
| `npm run test:e2e` | Builds, serves, and runs Playwright smoke and axe checks |
| `npm run prettify` | Formats and auto-fixes lint issues                       |

Run `npx playwright install chromium` once before the first `test:e2e`.

### Environments

There are no env vars to configure. `vite.config.ts` derives the environment and base URL from Vercel's build variables:

| Environment | When                          | Base URL                    |
| ----------- | ----------------------------- | --------------------------- |
| `prod`      | Vercel production             | `https://mikeverderese.com` |
| `dev`       | Vercel preview of `develop`   | The deployment's Vercel URL |
| `preview`   | Other Vercel preview branches | The deployment's Vercel URL |
| `local`     | Anywhere else                 | `http://localhost:5173`     |

Analytics is Vercel Web Analytics, loaded on every Vercel deployment. Turn it on in the project's Analytics settings.

## Design

The design lives in a Claude artifact: https://claude.ai/artifact/4mooXYmYVbeJubUPtk66j9. Refer to it for future design
changes.
