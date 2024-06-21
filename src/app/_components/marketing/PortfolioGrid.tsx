import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import Card from "@/app/_components/marketing/Card";
import CtaButton from "@/app/_components/marketing/CtaButton";
export type PortfolioGridProps = {
  onlyHighlighted?: boolean;
};
export default function PortfolioGrid({ onlyHighlighted }: PortfolioGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {portfolioProjects
          .filter((p) => (onlyHighlighted ? p.highlighted : true))
          .sort((p1, p2) => (onlyHighlighted ? 0 : p2.year - p1.year))
          .map((project) => (
            <Card
              image={project.image}
              title={onlyHighlighted ? project.title : `${project.title} (${project.year})`}
              key={project.title}
              link={`/portfolio/project/${project.slug}`}
            >
              {project.subtitle}
            </Card>
          ))}
      </div>
      {onlyHighlighted ? (
        <div className="text-center">
          <div className="flex justify-center pt-12">
            <CtaButton link={"/portfolio"}>See all</CtaButton>
          </div>
        </div>
      ) : null}
    </>
  );
}
