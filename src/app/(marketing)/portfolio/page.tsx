import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import PortfolioGrid from "@/app/_components/marketing/PortfolioGrid";
import BodyText from "@/app/_components/marketing/BodyText";

export default function PortfolioPage() {
  return (
    <>
      <Section additionalClassNames="bg-astral">
        <div className="container max-w-screen-xl mx-auto px-4">
          <H1>Portfolio</H1>
          <BodyText additionalClassNames="text-wheatfield">
            I&apos;ve been passionately building products for over a decade, and each one has its own unique story. From
            initial concepts and early prototypes to fully developed solutions, I&apos;ve dedicated myself to crafting
            products that make a meaningful impact.
          </BodyText>
        </div>
      </Section>
      <Section>
        <PortfolioGrid />
      </Section>
    </>
  );
}
