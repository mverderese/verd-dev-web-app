import { GITHUB_REPO_URL, JOB_TITLE, MY_NAME, RESUME_URL, TAGLINE } from "@/app/constants";
import Image from "next/image";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import H2 from "@/app/_components/marketing/H2";
import Subtitle from "@/app/_components/marketing/Subtitle";
import CtaButton from "@/app/_components/marketing/CtaButton";
import PortfolioGrid from "@/app/_components/marketing/PortfolioGrid";
import Card from "@/app/_components/marketing/Card";
import { GitHub, List } from "react-feather";

export default function Home() {
  return (
    <>
      <Section>
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image src="/mike-headshot.jpg" alt="Image" className="rounded-full" height={200} width={200} />
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">{MY_NAME}</h6>
          <H1>{JOB_TITLE}</H1>
          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">{TAGLINE}</p>
          <CtaButton link={"/about"}>About me</CtaButton>
        </div>
      </Section>
      <Section darkBg>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-40 gap-6">
          <Card icon={<List height={60} width={60} className="mb-3" />} title="Resume" link={RESUME_URL} newTab>
            Learn more about my work experience.
          </Card>
          <Card icon={<GitHub height={60} width={60} className="mb-3" />} title="Github" link={GITHUB_REPO_URL} newTab>
            See the source code of this project.
          </Card>
        </div>
      </Section>
      <Section>
        <div className="container max-w-screen-xl mx-auto px-4">
          <H2>Portfolio</H2>
          <Subtitle>These are some of my best projects.</Subtitle>
          <PortfolioGrid onlyHighlighted />
        </div>
      </Section>
      <Section>
        <div className="container max-w-screen-xl mx-auto px-4"></div>
      </Section>
    </>
  );
}
