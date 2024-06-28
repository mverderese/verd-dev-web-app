import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import H1 from "@/app/(marketing)/_components/H1";
import ProjectHeroPanel from "@/app/(marketing)/portfolio/projects/_components/ProjectHeroPanel";

export type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
  const project = portfolioProjects.find((p) => p.slug === slug);

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

  return (
    <>
      <ProjectHeroPanel project={project} />
      {project.content}
    </>
  );
}
