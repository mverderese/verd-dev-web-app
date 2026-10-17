/** True for paths on this site, e.g. "/work". Protocol-relative URLs ("//host") are external. */
export const isSitePath = (href: string) => href.startsWith("/") && !href.startsWith("//");
