import { JOB_TITLE, MY_NAME, TAGLINE } from "@/app/constants";
import Image from "next/image";
import Section from "@/app/(marketing)/_components/Section";
import H2 from "@/app/(marketing)/_components/H2";
import PortfolioGrid from "@/app/(marketing)/_components/PortfolioGrid";
import React from "react";
import { PrimarySecondaryCta } from "@/app/(marketing)/_components/PrimarySecondaryCta";

export default function Home() {
  return (
    <>
      <Section additionalClassNames="pt-2" bgOverride="bg-astral" narrowTop>
        <div className="text-left sm:text-center">
          <div className="flex justify-center mb-8">
            <Image src="/mike-headshot.jpg" alt="Image" className="rounded-full" height={200} width={200} />
          </div>

          <h1 className="text-white text-4xl md:text-5xl font-extrabold font-akira leading-10 ">{MY_NAME}</h1>
          <div className="pt-2 pb-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-akira  text-astral text-stroke-[1px] text-stroke-white">
              {JOB_TITLE}
            </h2>
          </div>
          <div className="pt-3">
            <div className="text-slate-300 text-md font-normal">{TAGLINE}</div>
          </div>

          <PrimarySecondaryCta
            primaryText="Learn more"
            primaryLink="/about"
            secondaryText="Get in touch"
            secondaryLink="https://app.reclaim.ai/m/mike-verderese/flexible-quick-meeting"
            secondaryLinkNewTab
          />
        </div>
      </Section>
      {/*<Section darkBg>*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-2 lg:px-40 gap-6">*/}
      {/*    <Card image="/icons/feather/clipboard.svg" title="Resume" link={RESUME_URL} newTab>*/}
      {/*      Learn more about my work experience.*/}
      {/*    </Card>*/}
      {/*    <Card image="/icons/feather/github.svg" title="Github" link={GITHUB_REPO_URL} newTab>*/}
      {/*      See the source code of this website.*/}
      {/*    </Card>*/}
      {/*  </div>*/}
      {/*</Section>*/}
      <Section bgOverride="bg-calypso">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <H2 marginOverride="mb-7 lg:mb-12" additionalClassNames="text-white">
            Portfolio
          </H2>
          <PortfolioGrid onlyHighlighted />
        </div>
      </Section>
    </>
  );
}
