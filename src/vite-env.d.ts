/// <reference types="vite/client" />

/** Year of the build, injected by Vite. */
declare const __BUILD_YEAR__: number;

/** Deployment environment, derived from Vercel's build variables in vite.config.ts. */
declare const __APP_ENV__: "local" | "preview" | "dev" | "prod";

/** Origin for canonical and Open Graph URLs, derived from the Vercel environment in vite.config.ts. */
declare const __BASE_URL__: string;
