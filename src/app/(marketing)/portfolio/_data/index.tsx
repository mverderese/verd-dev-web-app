import { PortfolioProject } from "@/app/(marketing)/portfolio/_data/types";
import OdinContent from "@/app/(marketing)/portfolio/project/_components/OdinContent";
import StarbucksContent from "@/app/(marketing)/portfolio/project/_components/StarbucksContent";
import GreatManyContent from "@/app/(marketing)/portfolio/project/_components/GreatManyContent";
import RenewContent from "@/app/(marketing)/portfolio/project/_components/RenewContent";
import SeventeenLandsContent from "@/app/(marketing)/portfolio/project/_components/SeventeenLandsContent";

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Odin",
    subtitle: "Construction Workforce Management",
    image: "/icons/odin-app-icon.png",
    slug: "odin",
    externalLink: "https://www.useodin.com/",
    highlighted: true,
    content: <OdinContent />,
  },
  {
    title: "Starbucks",
    subtitle: "Ecommerce Website",
    image: "/icons/starbucks-logo-icon.webp",
    slug: "starbucks",
    highlighted: true,
    content: <StarbucksContent />,
  },
  {
    title: "Great Many",
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
    subtitle: "Retirement With a Smile",
    image: "/icons/renew-logo.png",
    slug: "renew",
    content: <RenewContent />,
  },
  {
    title: "17Lands",
    subtitle: "Unlock Your MTG Arena Data",
    image: "/icons/mtg-logo.png",
    slug: "17-lands",
    externalLink: "https://www.17lands.com/",
    content: <SeventeenLandsContent />,
  },
];
