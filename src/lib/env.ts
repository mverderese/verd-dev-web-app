export type AppEnv = "local" | "preview" | "dev" | "prod";

const optional = (value: string | undefined) => (value === undefined || value === "" ? undefined : value);

export const env = {
  appEnv: __APP_ENV__,
  baseUrl: (optional(import.meta.env.VITE_BASE_URL) ?? "https://mikeverderese.com").replace(/\/$/, ""),
  gaMeasurementId: optional(import.meta.env.VITE_GA_MEASUREMENT_ID),
  hotjarSiteId: optional(import.meta.env.VITE_HOTJAR_SITE_ID),
  isProdBuild: import.meta.env.PROD,
} as const;

export const isIndexable = env.appEnv === "prod";
