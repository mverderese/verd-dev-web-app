import { env } from "~/lib/env";

/**
 * Vercel Web Analytics. The script is served by Vercel deployments only, so it is skipped locally.
 * Enable Web Analytics in the Vercel project settings for data to show up.
 */
export function Analytics() {
  if (env.appEnv === "local") return null;
  return <script defer src="/_vercel/insights/script.js" />;
}
