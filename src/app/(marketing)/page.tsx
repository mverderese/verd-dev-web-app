import { JOB_TITLE, MY_NAME, RESUME_URL } from "@/app/constants";
import Image from "next/image";
import Section from "@/app/(marketing)/_components/Section";
import PortfolioGrid from "@/app/(marketing)/_components/PortfolioGrid";
import React from "react";
import { PrimarySecondaryCta } from "@/app/(marketing)/_components/PrimarySecondaryCta";
import UL from "@/app/(marketing)/_components/UL";
import LI from "@/app/(marketing)/_components/LI";
import BodyText from "@/app/(marketing)/_components/BodyText";
import H1 from "@/app/(marketing)/_components/H1";
import CtaButton from "@/app/(marketing)/_components/CtaButton";

export default function Home() {
  return (
    <>
      <Section additionalClassNames="pt-2" bgOverride="bg-astral" narrowTop>
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image src="/mike-headshot.jpg" alt="Image" className="rounded-full" height={200} width={200} />
          </div>

          <H1 additionalClassNames="mt-9 sm:mt-12 leading-none">{MY_NAME}</H1>
          <h2 className="text-2xl sm:text-[32px] font text-white mt-2 mb-7 sm:mb-11">{JOB_TITLE}</h2>

          <PrimarySecondaryCta
            primaryText="See my resume"
            primaryLink={RESUME_URL}
            primaryLinkNewTab
            secondaryText="Get in touch"
            secondaryLink="https://app.reclaim.ai/m/mike-verderese/flexible-quick-meeting"
            secondaryLinkNewTab
          />
        </div>
      </Section>
      <Section bgOverride="bg-calypso">
        <div className="flex flex-col items-start lg:flex-row lg:flex-wrap">
          <div className="lg:basis-1/2 lg:px-4">
            <h2 className="text-white font-archivo mt-2 mb-4 text-3xl">Technical Skills</h2>
            <BodyText>
              <UL additionalClassNames="text-white">
                <LI title={"Languages"}>TypeScript/Javascript, Python, PostgreSQL, GraphQL, HTML/CSS, Bash</LI>
                <LI title={"Frameworks"}>
                  Node.js, React, Next.js, Express, Prisma, OpenAPI/Swagger, Flask, React Native
                </LI>
                <LI title={"Platforms"}>GitHub Actions, Terraform, GCP, AWS, Docker, Datadog, Looker, Segment, GA4</LI>
                <LI title={"Collaboration & Project Management"}>GitHub, Shortcut, Jira, Asana, Figma</LI>
              </UL>
            </BodyText>
          </div>
          <div className="lg:basis-1/2 lg:px-4 mt-12 lg:mt-0">
            <h2 className="text-white font-archivo mt-2 mb-4 text-3xl">Leadership Skills</h2>
            <BodyText>
              <UL additionalClassNames="text-white">
                <LI title={"Technical Strategy"}>
                  Align company objectives and key results with the technical capabilities of the product and team to
                  drive success.
                </LI>
                <LI title={"Team Management"}>
                  Mentor and motivate team members, incorporating input from internal and external parties to make
                  informed decisions. Provide constructive feedback and support professional growth within their roles
                  and careers.
                </LI>
                <LI title={"Translating Technical Requirements"}>
                  Facilitate ongoing communication between customers, leadership stakeholders, and product and
                  engineering teams. Lead technical architecture and design efforts within the engineering team.
                </LI>
              </UL>
            </BodyText>
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center pt-12">
            <CtaButton link={"/about"} inverted darkBg>
              About me
            </CtaButton>
          </div>
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
      <Section bgOverride="bg-astral">
        <div className="container max-w-screen-xl mx-auto px-4 ">
          <h2 className="font-archivo mb-7 lg:mb-12 text-3xl text-white">Portfolio</h2>
          <PortfolioGrid onlyHighlighted />
        </div>
      </Section>
    </>
  );
}
