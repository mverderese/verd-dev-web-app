import { describe, expect, it } from "vitest";
import { formatYears } from "./format";

describe("formatYears", () => {
  it("shows an open range for current work", () => {
    expect(formatYears({ start: 2024 })).toBe("2024 –");
  });

  it("collapses a single year", () => {
    expect(formatYears({ start: 2016, end: 2016 })).toBe("2016");
  });

  it("shows a closed range", () => {
    expect(formatYears({ start: 2020, end: 2024 })).toBe("2020 – 2024");
  });
});
