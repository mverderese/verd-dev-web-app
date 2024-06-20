import { ReactElement } from "react";

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  slug: string;
  externalLink?: string;
  highlighted?: boolean;
  customPage?: ReactElement;
};
