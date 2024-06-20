import { ReactElement } from "react";

export type PortfolioProject = {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  externalLink?: string;
  highlighted?: boolean;
  content: ReactElement;
};
