import Image from "next/image";
import H2 from "@/app/(marketing)/_components/H2";
import { PortfolioProject } from "@/app/(marketing)/portfolio/_data/types";
import classNames from "classnames";
import H1 from "@/app/(marketing)/_components/H1";
import H4 from "@/app/(marketing)/_components/H4";

export type ProjectPageContainerProps = {
  children?: React.ReactNode;
  project: PortfolioProject;
};

export default function ProjectHeroPanel({ children, project }: ProjectPageContainerProps) {
  return (
    <>
      <section className="bg-astral">
        <div className={classNames("container max-w-screen-xl mx-auto px-4  pb-8")}>
          <div className="text-center">
            {/*<div className="flex justify-center mb-9 ">*/}
            <div className="flex justify-center mb-6 sm:mb-9 max-h-24 sm:max-h-40">
              {/*<Image*/}
              <Image
                className="object-contain bg-white rounded-full"
                src={project.image}
                height={90}
                width={258}
                alt={`${project.title} logo`}
              />
            </div>
            <H1>{project.title}</H1>
            <H2 additionalClassNames="italic" marginOverride="mb-3 sm:mb-5">
              <span className="text-wheatfield">{project.jobTitle}</span>
              <br className="sm:hidden" /> ({project.startYear} - {project.endYear ?? "Present"})
            </H2>
            <H4 narrowBottom>{project.summary}</H4>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
