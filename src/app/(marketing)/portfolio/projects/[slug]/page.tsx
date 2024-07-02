import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import H1 from "@/app/(marketing)/_components/H1";
import ProjectHeroPanel from "@/app/(marketing)/portfolio/projects/_components/ProjectHeroPanel";
import { Metadata } from "next";
import { titleForEnv } from "@/app/_util";
import { MY_NAME } from "@/app/constants";
import { PrimarySecondaryCta } from "@/app/(marketing)/_components/PrimarySecondaryCta";
import React from "react";
import CtaButton from "@/app/(marketing)/_components/CtaButton";

export type ProjectPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params: { slug } }: ProjectPageProps): Metadata {
  const project = portfolioProjects.find((p) => p.slug === slug);

  return {
    title: titleForEnv(`${project?.title ?? "Unknown Project"} | ${MY_NAME}`),
  };
}

export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
  const project = portfolioProjects.find((p) => p.slug === slug);
  const projectIndex = portfolioProjects.findIndex((p) => p.slug === slug);

  if (project == null) {
    return (
      <div className="text-center">
        <div className="flex justify-center my-12">
          <H1>
            It does&apos;t look like <br />
            that project exists!
          </H1>
        </div>
      </div>
    );
  }

  const previousProject = portfolioProjects[projectIndex - 1];
  const nextProject = portfolioProjects[projectIndex + 1];

  const BottomButtons = () => {
    if (previousProject && nextProject) {
      return (
        <PrimarySecondaryCta
          primaryText={previousProject.title}
          primaryLink={
            previousProject.slug ? `/portfolio/projects/${previousProject.slug}` : previousProject.externalLink ?? ""
          }
          primaryLinkNewTab={!previousProject.slug}
          secondaryText={nextProject.title}
          secondaryLink={nextProject.slug ? `/portfolio/projects/${nextProject.slug}` : nextProject.externalLink ?? ""}
          secondaryLinkNewTab={!nextProject.slug}
          secondaryFirst
        />
      );
    } else if (nextProject) {
      return (
        <CtaButton
          link={nextProject.slug ? `/portfolio/projects/${nextProject.slug}` : nextProject.externalLink ?? ""}
          newTab={!nextProject.slug}
        >
          {nextProject.title}
        </CtaButton>
      );
    } else if (previousProject) {
      return (
        <CtaButton
          link={
            previousProject.slug ? `/portfolio/projects/${previousProject.slug}` : previousProject.externalLink ?? ""
          }
          newTab={!previousProject.slug}
        >
          {previousProject.title}
        </CtaButton>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <ProjectHeroPanel project={project} />
      {project.content}
      <div className="text-center">
        <div className="flex justify-center my-12">
          <BottomButtons />
        </div>
      </div>
    </>
  );
}
