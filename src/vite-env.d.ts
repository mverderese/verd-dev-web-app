/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV?: string;
  readonly VITE_BASE_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_HOTJAR_SITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
