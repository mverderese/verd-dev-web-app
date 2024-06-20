import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import H1 from "@/app/_components/marketing/H1";
import Section from "@/app/_components/marketing/Section";

export type PortfolioProjectPageProps = {
  params: { slug: string };
};

export default function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (project == null) {
    return <H1>It doesn&apos;t look like that project exists...</H1>;
  }

  if (project.customPage) {
    return project.customPage;
  }

  return (
    <>
      <Section>
        <H1>{project?.title}</H1>
      </Section>
    </>
  );
}
