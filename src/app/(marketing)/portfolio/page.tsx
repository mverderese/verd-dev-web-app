import Subtitle from "@/app/_components/marketing/Subtitle";
import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import Card from "@/app/_components/marketing/Card";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";

export default function PortfolioPage() {
  return (
    <Section darkBg>
      <div className="container max-w-screen-xl mx-auto px-4">
        <H1>Portfolio</H1>
        <Subtitle>These are some of my best projects.</Subtitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => (
            <Card
              image={project.image}
              title={project.title}
              key={project.title}
              link={`/portfolio/project/${project.slug}`}
            >
              {project.description}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
