import { z } from "zod";

const nonEmpty = z.string().trim().min(1);
const year = z.number().int().min(2000).max(2100);
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slugs are lowercase kebab-case");
const sitePath = z.string().startsWith("/");
const href = z.union([z.url(), sitePath]);

export const yearRangeSchema = z
  .object({ start: year, end: year.optional() })
  .refine(({ start, end }) => end === undefined || end >= start, "End year must not precede start year");

const proseSection = z.object({
  type: z.literal("prose"),
  heading: nonEmpty,
  paragraphs: z.array(nonEmpty).min(1),
});

const listSection = z.object({
  type: z.literal("list"),
  heading: nonEmpty,
  /** Numbered rows render with an index; definition rows render title + body. */
  style: z.enum(["numbered", "definitions"]),
  items: z.array(z.object({ title: nonEmpty.optional(), body: nonEmpty })).min(1),
});

const metricsSection = z.object({
  type: z.literal("metrics"),
  heading: nonEmpty,
  items: z.array(z.object({ value: nonEmpty, label: nonEmpty })).min(2),
});

const figureSection = z.object({
  type: z.literal("figure"),
  src: sitePath,
  alt: nonEmpty,
  caption: nonEmpty.optional(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

const videoSection = z.object({
  type: z.literal("video"),
  youtubeId: z.string().regex(/^[\w-]{11}$/),
  title: nonEmpty,
});

export const sectionSchema = z.discriminatedUnion("type", [
  proseSection,
  listSection,
  metricsSection,
  figureSection,
  videoSection,
]);

export const caseStudySchema = z.object({
  slug,
  /** Company or project name, e.g. "HubSpot". */
  name: nonEmpty,
  role: nonEmpty,
  engagement: z.enum(["Role", "Founder", "Agency", "Consulting"]),
  /** Short category shown on cards, e.g. "AI platform". */
  category: nonEmpty,
  years: yearRangeSchema,
  /** One line for cards and lists. */
  summary: nonEmpty,
  /** The case study page's h1. */
  headline: nonEmpty,
  intro: nonEmpty,
  highlighted: z.boolean(),
  facts: z
    .array(z.object({ label: nonEmpty, value: nonEmpty }))
    .min(2)
    .max(4),
  path: z
    .array(z.object({ dates: nonEmpty, title: nonEmpty, body: nonEmpty, current: z.boolean().optional() }))
    .optional(),
  sections: z.array(sectionSchema).min(1),
  themes: z.array(nonEmpty).min(1),
  links: z.array(z.object({ label: nonEmpty, href })).default([]),
});

export const caseStudiesSchema = z
  .array(caseStudySchema)
  .min(1)
  .refine((studies) => new Set(studies.map(({ slug }) => slug)).size === studies.length, "Slugs must be unique");

export const earlierWorkSchema = z.array(
  z.object({
    name: nonEmpty,
    description: nonEmpty,
    years: yearRangeSchema,
    /** Old case-study slug, kept so legacy URLs can redirect. */
    legacySlug: slug.optional(),
    href: href.optional(),
    linkLabel: nonEmpty.optional(),
  }),
);

export type YearRange = z.infer<typeof yearRangeSchema>;
export type CaseStudySection = z.infer<typeof sectionSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type EarlierWork = z.infer<typeof earlierWorkSchema>[number];
