import { site } from "~/lib/site";
import { earlierWorkSchema } from "./schema";

export const earlierWork = earlierWorkSchema.parse([
  {
    name: "Tag",
    description: "Co-founder & CTO of a location-based social app. Acquired by Mark Cuban Companies.",
    years: { start: 2013, end: 2015 },
  },
  {
    name: "Shots iGot",
    description: "Responsible-drinking app built at the Princeton Hackathon. Nearly 10,000 users in three months.",
    years: { start: 2012, end: 2013 },
  },
  {
    name: "17Lands",
    description: "Volunteer engineer, working on architecture and dev process for Magic: The Gathering analytics.",
    years: { start: 2023 },
    href: "https://www.17lands.com/",
    linkLabel: "17lands.com",
  },
  {
    name: "This site",
    description: "React Router, strict TypeScript and a hand-built design system.",
    years: { start: 2026 },
    href: site.links.github,
    linkLabel: "Open source on GitHub",
  },
]);
