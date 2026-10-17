import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router";
import { isSitePath } from "~/lib/href";

type SmartLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

/**
 * Renders a client-side `Link` for site paths and a plain anchor otherwise.
 * External web links open in a new tab.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (isSitePath(href)) {
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
