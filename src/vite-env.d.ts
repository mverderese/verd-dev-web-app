/// <reference types="vite/client" />

/** Year of the build, injected by Vite. */
declare const __BUILD_YEAR__: number;

interface ImportMetaEnv {
  readonly VITE_APP_ENV?: string;
  readonly VITE_BASE_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_HOTJAR_SITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
