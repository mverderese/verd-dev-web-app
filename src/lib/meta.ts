import type { MetaDescriptor } from "react-router";
import { env, isIndexable } from "~/lib/env";
import { site } from "~/lib/site";

type PageMetaInput = {
  /** Page-specific title. Omit for the home page. */
  title?: string;
  description?: string;
  /** Path of the page, used for the canonical URL. */
  path: string;
};

/** Prefixes non-production titles with the environment, e.g. "[STG] About". */
export const titleForEnv = (title: string) =>
  env.appEnv === "prod" ? title : `[${env.appEnv.toUpperCase()}] ${title}`;

export const notFoundMeta = (): MetaDescriptor[] => [
  { title: titleForEnv(`Not found | ${site.name}`) },
  { name: "robots", content: "noindex" },
];

export function pageMeta({ title, description = site.description, path }: PageMetaInput): MetaDescriptor[] {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.title}`;
  const url = `${env.baseUrl}${path}`;
  const image = `${env.baseUrl}${site.ogImage}`;

  return [
    { title: titleForEnv(fullTitle) },
    { name: "description", content: description },
    { name: "robots", content: isIndexable ? "index, follow" : "noindex, nofollow" },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
