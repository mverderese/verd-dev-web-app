import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import PortfolioGrid from "@/app/_components/marketing/PortfolioGrid";
import BodyText from "@/app/_components/marketing/BodyText";

export default function PortfolioPage() {
  return (
    <>
      <Section narrowBottom>
        <div className="container max-w-screen-xl mx-auto px-4">
          <H1>Portfolio</H1>
          <BodyText>
            I&apos;ve been passionately building products for over ten years now. Each of these products comes with
            their own unique story.
          </BodyText>
        </div>
      </Section>
      <Section>
        <PortfolioGrid />
      </Section>
    </>
  );
}
