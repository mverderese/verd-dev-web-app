import Image from "next/image";
import Section from "@/app/(marketing)/_components/Section";
import H1 from "@/app/(marketing)/_components/H1";
import BodyText from "@/app/(marketing)/_components/BodyText";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";
import H2 from "@/app/(marketing)/_components/H2";
import H4 from "@/app/(marketing)/_components/H4";
import PortfolioGrid from "@/app/(marketing)/_components/PortfolioGrid";
import TextLink from "@/app/(marketing)/_components/TextLink";
import type { Metadata } from "next";
import { MY_NAME } from "@/app/constants";
import { titleForEnv } from "@/app/_util";
import React from "react";

export const metadata: Metadata = {
  title: titleForEnv(`About | ${MY_NAME}`),
};

export default function AboutPage() {
  return (
    <>
      <Section bgOverride="bg-astral">
        <div className="flex flex-wrap">
          <H1 additionalClassNames="text-white sm:mt-0.5 lg:mt-[18px] mb-3 lg:mb-8">Hey, I&apos;m Mike</H1>
          <BodyText>
            <BodyParagraph additionalClassNames="text-white">
              With over a decade of experience in system architecture design, technical strategy, backend and DevOps
              engineering, and people management, I have successfully navigated the unique challenges of both startups
              and large enterprises. My expertise spans various industries including healthcare, construction,
              e-commerce, and social sectors. I excel in tailoring my skillset to meet the specific needs and
              requirements of each company, ensuring scalable and efficient solutions. From the agility needed in
              startup environments to the structured processes of large organizations, I bring a versatile approach to
              driving product development and team success.
            </BodyParagraph>
          </BodyText>
        </div>
        {/*</div>*/}
      </Section>
      <Section>
        <div className="">
          <H2>Navigating the Challenges of Startups and Enterprises</H2>
          <BodyText>
            <BodyParagraph>
              During my senior year, a friend and I created a responsible drinking app called{" "}
              <TextLink link="/portfolio/projects/shots-igot">Shots&nbsp;iGot</TextLink> at the
              Princeton&nbsp;Hackathon, which gained nearly 10,000 users in less than three months and national media
              attention, igniting my passion for entrepreneurship. After graduating, I teamed up with three co-founders
              to create <TextLink link="/portfolio/projects/tag">Tag</TextLink>, a location-based social app for
              meetups, which was run from our New York apartment. We developed an MVP and secured funding from notable
              investors including Tim Draper, Eduardo Saverin, and Mark Cuban. We expanded our team, launched a campus
              ambassador program, grew to tens of thousands of users within six months of launch. Eventually, we were
              acquired by Mark Cuban Companies.
            </BodyParagraph>
            <BodyParagraph>
              After gaining valuable experience in early-stage startups, I successfully transitioned to leading
              initiatives in multi-billion-dollar corporations. Notably, I rebuilt the entire{" "}
              <TextLink link="/portfolio/projects/starbucks">Starbucks&nbsp;Ecommerce&nbsp;Store</TextLink> in three
              months, while collaborating with a team of four engineers, generating over $100 million in holiday
              revenue. From that success, I was recruited to join the founding team of{" "}
              <TextLink link="/portfolio/projects/renew">Renew</TextLink>, where I built the API and DevOps process for
              the Medicare Plan Finder and Customer Success platforms, while mentoring and leading other engineers.
            </BodyParagraph>
            <BodyParagraph>
              In 2020, I co-founded <TextLink link="/portfolio/projects/odin">Odin</TextLink>, a workforce management
              and visibility platform for construction, bootstrapping the company to $1 million in revenue in the first
              year. I led the development of a software platform that integrates with external vendors and physical
              hardware, such as turnstiles and cameras, while delivering a user-friendly experience on both web and
              mobile apps. Today, Odin manages over 20,000 workers across 700 contractors nationwide.
            </BodyParagraph>
            <BodyParagraph>
              Following Odin, I became the Head of Engineering at Red Krypton, a design, development, and marketing
              agency. We helped companies build and scale their technology, grow their audience, and boost
              profitability. One such project involved working with{" "}
              <TextLink link="/portfolio/projects/great-many">Great Many</TextLink>, a hair restoration company, from
              their founding, developing a custom booking flow for their PRP service and a seamless telehealth
              experience for prescription products.
            </BodyParagraph>
            <BodyParagraph>
              Currently, I am the Technical Lead for the backend team of{" "}
              <TextLink link="https://www.hubspot.com/products/artificial-intelligence/breeze-copilot" newTab>
                Breeze Copilot
              </TextLink>
              , HubSpot&apos;s AI companion. We help customers of HubSpot increase their productivity by providing
              tailored insights and assistance right where they need it.
            </BodyParagraph>
          </BodyText>
        </div>
      </Section>
      <Section darkBg>
        <div className="flex flex-wrap-reverse lg:flex-wrap">
          <div className="basis-full lg:basis-2/3 ">
            <H2>Rutgers University</H2>
            <H4 additionalClassNames="font-dm-sans-semibold">Bachelor of Science, Computer Science</H4>
            <BodyText additionalClassNames="">
              <BodyParagraph>
                After discovering my passion for programming in high school, I pursued a Computer&nbsp;Science degree at
                Rutgers&nbsp;University. I focused on courses that enhanced my product development skills, such as
                Software&nbsp;Methodology, Internet&nbsp;Technology, and Databases, along with the core CS curriculum.
              </BodyParagraph>
            </BodyText>
          </div>
          <div className="basis-full lg:basis-1/3 pb-6 lg:pb-0 lg:pt-3 lg:pr-6 max-w-56 mx-auto">
            <Image
              src="/icons/rutgers-seal.svg"
              alt="Image"
              height={500}
              width={500}
              className="sm:max-h-80 object-contain"
            />
          </div>
        </div>
      </Section>
      <Section>
        <H2>Life is an Ongoing Adventure</H2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-9 mb-12">
          <Image src="/hiking.jpeg" alt="Hiking" height={500} width={500} />
          <Image src="/zoey2.png" alt="Zoey" height={500} width={500} />
          <Image src="/drumming.jpeg" alt="Drumming" height={500} width={500} />
        </div>
        <BodyText>
          <BodyParagraph>
            While I am proud of my professional accomplishments, my greatest joy comes from my incredible wife,
            Michelle, and our precious Goldendoodle, Zoey. When we&apos;re not exploring coffee shops and vegan
            restaurants in Philadelphia, I enjoy traveling, hiking, skiing, drumming, spending time with family, and
            playing Magic:&nbsp;The&nbsp;Gathering. My love for Magic led me to volunteer for a passion project called{" "}
            <TextLink link="/portfolio/projects/17-lands">17Lands</TextLink>. Life is an adventure full of unknowns, but
            based on my experiences so far, I&apos;m confident that the next chapter in both my personal and
            professional life will be exciting!
          </BodyParagraph>
        </BodyText>
      </Section>
      <Section narrowTop narrowBottom></Section>
      <Section bgOverride="bg-astral">
        <H2 marginOverride="mb-8" additionalClassNames="text-white">
          Some of My Work
        </H2>
        <PortfolioGrid onlyHighlighted />
      </Section>
    </>
  );
}
