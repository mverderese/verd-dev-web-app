import type { YearRange } from "~/content/schema";

/** "2024 –", "2016", or "2020 – 2024". */
export function formatYears({ start, end }: YearRange): string {
  if (end === undefined) return `${start} –`;
  if (end === start) return `${start}`;
  return `${start} – ${end}`;
}
