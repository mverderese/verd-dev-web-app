import Subtitle from "@/app/_components/marketing/Subtitle";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import PortfolioGrid from "@/app/_components/marketing/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <Section darkBg>
      <div className="container max-w-screen-xl mx-auto px-4">
        <H1>Portfolio</H1>
        <Subtitle>These are some of my best projects.</Subtitle>
        <PortfolioGrid />
      </div>
    </Section>
  );
}
