import { ReactElement } from "react";

export type PortfolioProject = {
  title: string;
  startYear: number;
  endYear?: number;
  jobTitle: string;
  subtitle: string;
  summary?: string;
  image: string;
  slug?: string;
  externalLink?: string;
  highlighted?: boolean;
  content?: ReactElement;
};
