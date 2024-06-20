import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import Card from "@/app/_components/marketing/Card";
import CtaButton from "@/app/_components/marketing/CtaButton";
export type PortfolioGridProps = {
  onlyHighlighted?: boolean;
};
export default function PortfolioGrid({ onlyHighlighted }: PortfolioGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioProjects
          .filter((p) => (onlyHighlighted ? p.highlighted : true))
          .map((project) => (
            <Card
              image={project.image}
              title={project.title}
              key={project.title}
              link={`/portfolio/project/${project.slug}`}
            >
              {project.subtitle}
            </Card>
          ))}
      </div>
      {onlyHighlighted ? (
        <div className="text-center">
          <div className="flex justify-center pt-16">
            <CtaButton link={"/portfolio"}>See all</CtaButton>
          </div>
        </div>
      ) : null}
    </>
  );
}
