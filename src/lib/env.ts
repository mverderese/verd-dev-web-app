const appEnvs = ["local", "dev", "stg", "prod"] as const;
export type AppEnv = (typeof appEnvs)[number];

const parseAppEnv = (value: string | undefined): AppEnv => appEnvs.find((appEnv) => appEnv === value) ?? "local";

const optional = (value: string | undefined) => (value === undefined || value === "" ? undefined : value);

export const env = {
  appEnv: parseAppEnv(import.meta.env.VITE_APP_ENV),
  baseUrl: (optional(import.meta.env.VITE_BASE_URL) ?? "https://mikeverderese.com").replace(/\/$/, ""),
  gaMeasurementId: optional(import.meta.env.VITE_GA_MEASUREMENT_ID),
  hotjarSiteId: optional(import.meta.env.VITE_HOTJAR_SITE_ID),
  isProdBuild: import.meta.env.PROD,
} as const;

export const isIndexable = env.appEnv === "prod";
