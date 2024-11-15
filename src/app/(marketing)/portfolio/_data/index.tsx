import { PortfolioProject } from "@/app/(marketing)/portfolio/_data/types";
import OdinContent from "@/app/(marketing)/portfolio/projects/_components/OdinContent";
import StarbucksContent from "@/app/(marketing)/portfolio/projects/_components/StarbucksContent";
import GreatManyContent from "@/app/(marketing)/portfolio/projects/_components/GreatManyContent";
import RenewContent from "@/app/(marketing)/portfolio/projects/_components/RenewContent";
import SeventeenLandsContent from "@/app/(marketing)/portfolio/projects/_components/SeventeenLandsContent";
import ShotsIGotContent from "@/app/(marketing)/portfolio/projects/_components/ShotsIGotContent";
import TagContent from "@/app/(marketing)/portfolio/projects/_components/TagContent";

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "HubSpot",
    startYear: 2024,
    subtitle: "Breeze Copilot",
    jobTitle: "Technical Lead II",
    summary:
      "Leading backend development of an AI companion to assist with your tasks everywhere you work across HubSpot",
    image: "/icons/hubspot-logo.jpeg",
    // slug: "hubspot",
    externalLink: "https://www.hubspot.com/products/artificial-intelligence/breeze-copilot",
    highlighted: true,
  },
  {
    title: "Odin",
    startYear: 2020,
    endYear: 2024,
    subtitle: "Construction Workforce Management",
    jobTitle: "Co-Founder & CTO",
    summary:
      "Founded construction startup and bootstrapped it to $1M revenue, generated by the largest projects in NYC.",
    image: "/icons/odin-app-icon.png",
    slug: "odin",
    externalLink: "https://www.useodin.com/",
    highlighted: true,
    content: <OdinContent />,
  },
  {
    title: "Great Many",
    startYear: 2023,
    endYear: 2024,
    subtitle: "Your Home for Hair Growth",
    jobTitle: "Head of Engineering",
    summary:
      "Recruited and led a team to design and implement a custom booking flow and telehealth experience for a hair restoration startup.",
    image: "/icons/great-many-icon.png",
    slug: "great-many",
    externalLink: "https://www.greatmany.com/",
    highlighted: true,
    content: <GreatManyContent />,
  },
  {
    title: "Renew",
    startYear: 2017,
    endYear: 2020,
    subtitle: "Retirement With a Smile",
    jobTitle: "Senior Software Engineer",
    summary: "Led the design and implementation of the API and DevOps platforms for a healthcare startup.",
    image: "/icons/renew-logo.png",
    slug: "renew",
    content: <RenewContent />,
  },
  {
    title: "Starbucks",
    startYear: 2016,
    endYear: 2016,
    subtitle: "Ecommerce Store",
    jobTitle: "Senior Software Engineer",
    summary:
      "Redesigned and rebuilt the entire ecommerce store in three months, generating $100M in revenue during the holiday season.",
    image: "/icons/starbucks-logo-icon.webp",
    slug: "starbucks",
    content: <StarbucksContent />,
  },
  {
    title: "Tag",
    startYear: 2013,
    endYear: 2015,
    subtitle: "Meet Up With Friends",
    jobTitle: "Co-Founder & CTO",
    summary: "Founded a social media app that grew to tens of thousands of users leading to a successful exit.",
    image: "/icons/tag-logo.png",
    slug: "tag",
    content: <TagContent />,
  },
  {
    title: "Shots iGot",
    startYear: 2012,
    endYear: 2013,
    subtitle: "Responsible Drinking App",
    jobTitle: "Co-Founder & CTO",
    summary:
      "Founded a responsible drinking app while attending college full-time, which garnered national viral media attention.",
    image: "/icons/shots-igot-logo.jpeg",
    slug: "shots-igot",
    content: <ShotsIGotContent />,
  },
  {
    title: "17Lands",
    startYear: 2023,
    subtitle: "Unlock Your Magic: The Gathering Data",
    jobTitle: "Software Engineer",
    summary: "Led the creation of a scalable architecture and development process for a team of new developers.",
    image: "/icons/mtg-logo.png",
    slug: "17-lands",
    externalLink: "https://www.17lands.com/",
    content: <SeventeenLandsContent />,
  },
  {
    title: "Personal Site",
    startYear: 2023,
    subtitle: "Showcase of Modern Web Development",
    jobTitle: "Lead Software Engineer",
    image: "/icons/feather/github.svg",
    externalLink: "https://github.com/mverderese/verd-dev-web-app",
  },
];
