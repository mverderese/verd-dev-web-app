import Section from "@/app/(marketing)/_components/Section";
import H1 from "@/app/(marketing)/_components/H1";
import PortfolioGrid from "@/app/(marketing)/_components/PortfolioGrid";
import BodyText from "@/app/(marketing)/_components/BodyText";
import type { Metadata } from "next";
import { titleForEnv } from "@/app/_util";
import { MY_NAME } from "@/app/constants";

export const metadata: Metadata = {
  title: titleForEnv(`Portfolio | ${MY_NAME}`),
};

export default function PortfolioPage() {
  return (
    <>
      <Section bgOverride="bg-astral">
        <div className="container max-w-screen-xl mx-auto px-4">
          <H1 additionalClassNames="text-white">Portfolio</H1>
          <BodyText additionalClassNames="text-wheatfield">
            I&apos;ve been passionately building products for over a decade, and each one has its own unique story. From
            initial concepts and early prototypes to fully developed solutions, I&apos;ve dedicated myself to crafting
            products that make a meaningful impact.
          </BodyText>
        </div>
      </Section>
      <Section bgOverride="bg-astral" narrowTop>
        <PortfolioGrid />
      </Section>
    </>
  );
}
