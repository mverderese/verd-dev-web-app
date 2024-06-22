import { ReactElement } from "react";
import { ProjectContentProps } from "@/app/(marketing)/portfolio/projects/types";

export type PortfolioProject = {
  title: string;
  year: number;
  jobTitle: string;
  subtitle: string;
  image: string;
  slug?: string;
  externalLink?: string;
  highlighted?: boolean;
  contentFactory: (props: ProjectContentProps) => ReactElement;
};
