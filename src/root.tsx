import "@fontsource-variable/schibsted-grotesk";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "~/styles/global.css";

import type { ReactNode } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import { Analytics } from "~/components/Analytics/Analytics";
import { SiteFooter } from "~/components/SiteFooter/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader/SiteHeader";
import { NotFound } from "~/components/NotFound/NotFound";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e6b45" />
        <Meta />
        <Links />
        <Analytics />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }
  const message = error instanceof Error ? error.message : "Unknown error";
  return <NotFound title="Something went wrong." detail={import.meta.env.DEV ? message : undefined} />;
}
