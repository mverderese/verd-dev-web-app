import { ReactElement } from "react";

export type PortfolioProject = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  externalLink?: string;
  highlighted?: boolean;
  content: ReactElement;
};
