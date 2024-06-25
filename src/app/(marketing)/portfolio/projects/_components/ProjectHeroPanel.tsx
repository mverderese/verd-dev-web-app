import Image from "next/image";
import H2 from "@/app/_components/marketing/H2";
import { PortfolioProject } from "@/app/(marketing)/portfolio/_data/types";
import classNames from "classnames";
import H1 from "@/app/_components/marketing/H1";
import H4 from "@/app/_components/marketing/H4";

export type ProjectPageContainerProps = {
  children?: React.ReactNode;
  project: PortfolioProject;
};

export default function ProjectHeroPanel({ children, project }: ProjectPageContainerProps) {
  return (
    <>
      <section>
        <div className={classNames("container", "max-w-screen-xl", "mx-auto", "px-4")}>
          <div className="text-center">
            <div className="flex justify-center mb-9 ">
              <Image src={project.image} height={90} width={258} alt={`${project.title} logo`} />
            </div>
            <H1>{project.title}</H1>
            <H2 additionalClassNames="italic">
              {project.jobTitle} ({project.startYear} - {project.endYear ?? "Present"})
            </H2>
            <H4 narrowBottom>{project.summary}</H4>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
