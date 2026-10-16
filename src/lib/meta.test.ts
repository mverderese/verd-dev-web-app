import { describe, expect, it } from "vitest";
import { pageMeta, titleForEnv } from "./meta";

describe("pageMeta", () => {
  it("prefixes non-production titles with the environment", () => {
    expect(titleForEnv("About")).toBe("[LOCAL] About");
  });

  it("builds a page title, canonical URL and noindex outside production", () => {
    const meta = pageMeta({ title: "About", path: "/about" });
    expect(meta).toContainEqual({ title: "[LOCAL] About | Mike Verderese" });
    expect(meta).toContainEqual({ tagName: "link", rel: "canonical", href: "https://mikeverderese.com/about" });
    expect(meta).toContainEqual({ name: "robots", content: "noindex, nofollow" });
  });

  it("uses the site title on the home page", () => {
    expect(pageMeta({ path: "/" })).toContainEqual({ title: "[LOCAL] Mike Verderese | AI Engineering Leader" });
  });
});
