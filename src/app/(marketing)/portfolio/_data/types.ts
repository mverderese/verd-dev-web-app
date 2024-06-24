import { ReactElement } from "react";

export type PortfolioProject = {
  title: string;
  year: number;
  jobTitle: string;
  subtitle: string;
  image: string;
  slug?: string;
  externalLink?: string;
  highlighted?: boolean;
  content?: ReactElement;
};
