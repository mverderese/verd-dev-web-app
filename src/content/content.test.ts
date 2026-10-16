import { describe, expect, it } from "vitest";
import { caseStudies, findCaseStudy, highlightedCaseStudies, nextCaseStudy } from "./caseStudies";
import { earlierWork } from "./earlierWork";
import { caseStudySchema } from "./schema";

describe("case studies", () => {
  it("has unique slugs", () => {
    const slugs = caseStudies.map(({ slug }) => slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("highlights four studies for the home page", () => {
    expect(highlightedCaseStudies).toHaveLength(4);
  });

  it("finds studies by slug", () => {
    expect(findCaseStudy("odin")?.name).toBe("Odin");
    expect(findCaseStudy("missing")).toBeUndefined();
    expect(findCaseStudy(undefined)).toBeUndefined();
  });

  it("wraps around for the next study", () => {
    const last = caseStudies.at(-1);
    expect(last).toBeDefined();
    if (last) expect(nextCaseStudy(last.slug).slug).toBe(caseStudies[0]?.slug);
  });

  it("does not reuse a legacy slug from the earlier-work list", () => {
    const legacy = earlierWork.flatMap(({ legacySlug }) => (legacySlug ? [legacySlug] : []));
    expect(legacy.some((slug) => findCaseStudy(slug))).toBe(false);
  });
});

describe("caseStudySchema", () => {
  const valid = caseStudies[0];

  it("rejects an end year before the start year", () => {
    expect(caseStudySchema.safeParse({ ...valid, years: { start: 2020, end: 2019 } }).success).toBe(false);
  });

  it("rejects slugs that are not kebab-case", () => {
    expect(caseStudySchema.safeParse({ ...valid, slug: "Not A Slug" }).success).toBe(false);
  });

  it("rejects figures without alt text", () => {
    const sections = [{ type: "figure", src: "/x.jpg", alt: "", width: 1, height: 1 }];
    expect(caseStudySchema.safeParse({ ...valid, sections }).success).toBe(false);
  });
});
