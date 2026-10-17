export type AppEnv = "local" | "preview" | "dev" | "prod";

export const env = {
  appEnv: __APP_ENV__,
  baseUrl: __BASE_URL__,
} as const;

export const isIndexable = env.appEnv === "prod";
