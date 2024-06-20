"use client";

import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import { useParams } from "next/navigation";
import H1 from "@/app/_components/marketing/H1";
import Section from "@/app/_components/marketing/Section";

export default function PortfolioProjectPage() {
  const params = useParams();
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (project == null) {
    return <H1>It doesn&apos;t look like that project exists...</H1>;
  }

  return (
    <>
      <Section>
        <H1>{project?.title}</H1>
      </Section>
    </>
  );
}
