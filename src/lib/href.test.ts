import { describe, expect, it } from "vitest";
import { isSitePath } from "./href";

describe("isSitePath", () => {
  it("accepts site paths", () => {
    expect(isSitePath("/")).toBe(true);
    expect(isSitePath("/work/odin")).toBe(true);
  });

  it("rejects external and protocol-relative URLs", () => {
    expect(isSitePath("https://example.com")).toBe(false);
    expect(isSitePath("//example.com")).toBe(false);
    expect(isSitePath("mailto:someone@example.com")).toBe(false);
  });
});
