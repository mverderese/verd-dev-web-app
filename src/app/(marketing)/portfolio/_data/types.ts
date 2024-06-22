import { ReactElement } from "react";

export type PortfolioProject = {
  title: string;
  year: number;
  subtitle: string;
  image: string;
  slug?: string;
  externalLink?: string;
  highlighted?: boolean;
  content?: ReactElement;
};
