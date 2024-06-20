import { PortfolioProject } from "@/app/(marketing)/portfolio/_data/types";
import OdinPage from "@/app/(marketing)/portfolio/_components/OdinPage";

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Odin",
    description: "Construction workforce management platform",
    image: "/icons/odin-app-icon.png",
    slug: "odin",
    externalLink: "https://www.useodin.com/",
    highlighted: true,
    customPage: <OdinPage />,
  },
  {
    title: "Starbucks",
    description: "eCommerce website for world-renowned coffee brand",
    image: "/icons/starbucks-logo-icon.webp",
    slug: "starbucks",
    highlighted: true,
  },
  {
    title: "Great Many",
    description: "Hair loss treatment company for men and women",
    image: "/icons/great-many-icon.png",
    slug: "great-many",
    externalLink: "https://www.greatmany.com/",
    highlighted: true,
  },
  {
    title: "The Gleamery",
    description: "Innovative, gentle teeth cleaning and whitening treatments",
    image: "/icons/gleamery-logo-icon.svg",
    slug: "the-gleamery",
    externalLink: "https://www.thegleamery.com/",
  },
];
