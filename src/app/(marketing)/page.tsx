import { GITHUB_REPO_URL, JOB_TITLE, MY_NAME, RESUME_URL, TAGLINE } from "@/app/constants";
import Image from "next/image";
import Section from "@/app/(marketing)/_components/Section";
import H1 from "@/app/(marketing)/_components/H1";
import H2 from "@/app/(marketing)/_components/H2";
import PortfolioGrid from "@/app/(marketing)/_components/PortfolioGrid";
import Card from "@/app/(marketing)/_components/Card";
import React from "react";
import { PrimarySecondaryCta } from "@/app/(marketing)/_components/PrimarySecondaryCta";

export default function Home() {
  return (
    <>
      <Section>
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image src="/mike-headshot.jpg" alt="Image" className="rounded-full" height={200} width={200} />
          </div>

          <h6 className="font-medium text-river-bed text-lg md:text-2xl  mb-4">{MY_NAME}</h6>
          <H1>{JOB_TITLE}</H1>
          <p className="font-normal text-river-bed text-md md:text-xl mb-8">{TAGLINE}</p>
          <PrimarySecondaryCta
            primaryText="About me"
            primaryLink="/about"
            secondaryText="Get in touch"
            secondaryLink="https://app.reclaim.ai/m/mike-verderese/flexible-quick-meeting"
            secondaryLinkNewTab
          />
        </div>
      </Section>
      <Section darkBg>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-40 gap-6">
          <Card image="/icons/feather/clipboard.svg" title="Resume" link={RESUME_URL} newTab>
            Learn more about my work experience.
          </Card>
          <Card image="/icons/feather/github.svg" title="Github" link={GITHUB_REPO_URL} newTab>
            See the source code of this website.
          </Card>
        </div>
      </Section>
      <Section>
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <H2 marginOverride="mb-7 lg:mb-12">Portfolio</H2>
          <PortfolioGrid onlyHighlighted />
        </div>
      </Section>
    </>
  );
}
