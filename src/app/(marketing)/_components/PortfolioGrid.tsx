import { portfolioProjects } from "@/app/(marketing)/portfolio/_data";
import Card from "@/app/(marketing)/_components/Card";
import CtaButton from "@/app/(marketing)/_components/CtaButton";
export type PortfolioGridProps = {
  onlyHighlighted?: boolean;
};
export default function PortfolioGrid({ onlyHighlighted }: PortfolioGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {portfolioProjects
          .filter((p) => (onlyHighlighted ? p.highlighted : true))
          // .sort((p1, p2) => (onlyHighlighted ? 0 : p2.startYear - p1.startYear))
          .map((project) => {
            return (
              <Card
                image={project.image}
                title={onlyHighlighted ? project.title : `${project.title}`}
                key={project.title}
                link={project.slug ? `/portfolio/projects/${project.slug}` : project.externalLink}
                newTab={!project.slug}
              >
                {project.subtitle}
                <br />
                <span className="italic text-base">
                  {project.jobTitle} ({project.startYear} - {project.endYear ?? "Present"})
                </span>
              </Card>
            );
          })}
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
