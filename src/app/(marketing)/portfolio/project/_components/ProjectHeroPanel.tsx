import Image from "next/image";
import H2 from "@/app/_components/marketing/H2";
import Section from "@/app/_components/marketing/Section";
import { PortfolioProject } from "@/app/(marketing)/portfolio/_data/types";

export type ProjectPageContainerProps = {
  children?: React.ReactNode;
  project: PortfolioProject;
};

export default function ProjectHeroPanel({ children, project }: ProjectPageContainerProps) {
  return (
    <Section>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Image src={project.image} height={90} width={258} alt={`${project.title} logo`} />
        </div>
        <H2>{project.subtitle}</H2>

        {children}
      </div>
    </Section>
  );
}
