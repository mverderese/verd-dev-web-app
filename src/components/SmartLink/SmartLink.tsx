import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router";

type SmartLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

export const isInternalHref = (href: string) => href.startsWith("/");

/**
 * Renders a client-side `Link` for site paths and a plain anchor otherwise.
 * External web links open in a new tab.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }
  const opensNewTab = href.startsWith("http");
  return (
    <a href={href} {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
