const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

export const titleForEnv = (title: string) =>
  `${appEnv !== "prod" ? `[${(appEnv ?? "unknown").toUpperCase()}] ` : ""}${title}`;
