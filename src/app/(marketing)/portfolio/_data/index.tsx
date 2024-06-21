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
    title: "Odin",
    year: 2020,
    subtitle: "Construction Workforce Management",
    image: "/icons/odin-app-icon.png",
    slug: "odin",
    externalLink: "https://www.useodin.com/",
    highlighted: true,
    content: <OdinContent />,
  },
  {
    title: "Starbucks",
    year: 2016,
    subtitle: "Ecommerce Store",
    image: "/icons/starbucks-logo-icon.webp",
    slug: "starbucks",
    highlighted: true,
    content: <StarbucksContent />,
  },
  {
    title: "Great Many",
    year: 2024,
    subtitle: "Your Home for Hair Growth",
    image: "/icons/great-many-icon.png",
    slug: "great-many",
    externalLink: "https://www.greatmany.com/",
    highlighted: true,
    content: <GreatManyContent />,
  },
  // {
  //   title: "The Gleamery",
  //   subtitle: "Professional Teeth Whitening and Cleaning",
  //   image: "/icons/gleamery-logo-icon.svg",
  //   slug: "the-gleamery",
  //   externalLink: "https://www.thegleamery.com/",
  //   content: <GleameryContent />,
  // },
  {
    title: "Renew",
    year: 2017,
    subtitle: "Retirement With a Smile",
    image: "/icons/renew-logo.png",
    slug: "renew",
    content: <RenewContent />,
  },
  {
    title: "17Lands",
    year: 2023,
    subtitle: "Unlock Your Magic: The Gathering Data",
    image: "/icons/mtg-logo.png",
    slug: "17-lands",
    externalLink: "https://www.17lands.com/",
    content: <SeventeenLandsContent />,
  },
  {
    title: "Shots iGot",
    year: 2012,
    subtitle: "Responsible Drinking App",
    image: "/icons/shots-igot-logo.jpeg",
    slug: "shots-igot",
    content: <ShotsIGotContent />,
  },
  {
    title: "Tag",
    year: 2013,
    subtitle: "Meet up With Friends",
    image: "/icons/tag-logo.png",
    slug: "tag",
    content: <TagContent />,
  },
];
