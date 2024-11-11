import { JOB_TITLE, MY_NAME } from "@/app/constants";
import Image from "next/image";
import Section from "@/app/(marketing)/_components/Section";
import PortfolioGrid from "@/app/(marketing)/_components/PortfolioGrid";
import React from "react";
import UL from "@/app/(marketing)/_components/UL";
import LI from "@/app/(marketing)/_components/LI";
import BodyText from "@/app/(marketing)/_components/BodyText";
import H1 from "@/app/(marketing)/_components/H1";
import CtaButton from "@/app/(marketing)/_components/CtaButton";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";

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

          <div className="text-center">
            <div className="flex justify-center pt-12">
              <CtaButton link={"https://app.reclaim.ai/m/mike-verderese/flexible-quick-meeting"} newTab>
                Get in touch
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>

      <Section bgOverride="bg-calypso">
        <BodyText additionalClassNames="sm:mb-7">
          <BodyParagraph additionalClassNames="text-white">
            Born in Jersey and now based in Philadelphia, I am a Software Engineering Leader and Individual Contributor
            passionate about developing products that enhance global well-being. My experience spans healthcare,
            construction, ecommerce, and social industries.
          </BodyParagraph>
          <BodyParagraph additionalClassNames="text-white">
            I excel in leading every phase of product development, from ideation to deployment and growth, and my strong
            communication skills help bridge gaps between engineers, designers, product managers, stakeholders, and
            customers. I consistently lead teams to deliver high-quality products on time, even with minimal resources
            and evolving requirements.
          </BodyParagraph>
        </BodyText>
        <div className="flex flex-col items-start lg:flex-row lg:flex-wrap">
          <div className="lg:basis-1/2 lg:px-4 mt-5 lg:mt-0">
            <h2 className="text-white font-archivo mt-2 mb-4 text-3xl">Leadership Skills</h2>
            <BodyText>
              <UL additionalClassNames="text-white">
                <LI title={"Technical Strategy"}>
                  Align company Objectives and Key Results (OKRs) with the product&apos;s technical capabilities and the
                  team&apos;s strengths to drive success.
                </LI>
                <LI title={"Team Management"}>
                  Mentor and motivate team members, incorporating input from internal and external parties to make
                  informed decisions. Provide constructive feedback and support professional growth within their roles
                  and careers.
                </LI>
                <LI title={"Translating Technical Requirements"}>
                  Facilitate continuous communication between customers, leadership, stakeholders, and product and
                  engineering teams to maximise alignment and engagement with the product delivery process. Lead
                  technical architecture and design efforts within the engineering team to achieve successful product
                  deliverables.
                </LI>
              </UL>
            </BodyText>
          </div>
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
        </div>
        <div className="text-center">
          <div className="flex justify-center pt-12">
            <CtaButton link={"/about"} inverted darkBg>
              About me
            </CtaButton>
          </div>
        </div>
      </Section>
      <Section bgOverride="bg-astral">
        <div className="container max-w-screen-xl mx-auto px-4 ">
          <h2 className="font-archivo mb-7 lg:mb-12 text-3xl text-white">Portfolio</h2>
          <PortfolioGrid onlyHighlighted />
        </div>
      </Section>
    </>
  );
}
