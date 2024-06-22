import Image from "next/image";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";
import H4 from "@/app/_components/marketing/H4";
import PortfolioGrid from "@/app/_components/marketing/PortfolioGrid";
import TextLink from "@/app/_components/marketing/TextLink";

export default function AboutPage() {
  return (
    <>
      <Section narrowBottom>
        <div className="flex flex-wrap">
          <div className="basis-full lg:basis-1/3 pb-9 lg:pb-0 lg:pt-3 lg:pr-6 ">
            <Image src="/mike-headshot-2.jpg" alt="Image" height={500} width={500} />
          </div>
          <div className="basis-full lg:basis-2/3 ">
            <H1>Hey, I&apos;m Mike</H1>
            <BodyText>
              <BodyParagraph>
                Born in Jersey and now based in Philadelphia, I am a Software Engineering Leader passionate about
                developing products that enhance global well-being. My experience spans healthcare, construction,
                ecommerce, and social industries. I excel in leading every phase of product development, from ideation
                to deployment and growth, and my strong communication skills help bridge gaps between engineers,
                designers, product managers, stakeholders, and customers.
              </BodyParagraph>
              <H2 marginOverride="mt-2 mb-4">Technical Skills</H2>
              <ul>
                <li>
                  <span className="font-bold">Languages:</span> TypeScript/Javascript, Python, PostgreSQL, GraphQL,
                  Bash, HTML/CSS
                </li>
                <li>
                  <span className="font-bold">Frameworks:</span> Node.js, React, Next.js, Express.js, OpenAPI/Swagger,
                  Flask, React Native
                </li>
                <li>
                  <span className="font-bold">Platforms:</span> GitHub Actions, Terraform, GCP, AWS, Docker, Datadog,
                  Looker, Segment, GA4
                </li>
                <li>
                  <span className="font-bold">Team Management & Collaboration:</span> GitHub, Shortcut, Jira, Asana,
                  Figma
                </li>
              </ul>
            </BodyText>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap-reverse lg:flex-wrap">
          <div className="basis-full lg:basis-2/3 ">
            <H2>Rutgers University</H2>
            <H4>Bachelor of Science, Computer Science</H4>
            <BodyText>
              <BodyParagraph>
                After discovering my passion for programming in high school, I pursued a Computer&nbsp;Science degree at
                Rutgers&nbsp;University. I focused on courses that enhanced my product development skills, such as
                Software&nbsp;Methodology, Internet&nbsp;Technology, and Databases, along with the core CS curriculum.
                During my senior year, a friend and I created a responsible drinking app called{" "}
                <TextLink link="/portfolio/projects/shots-igot">Shots&nbsp;iGot</TextLink> at the
                Princeton&nbsp;Hackathon, which gained nearly 10,000 users and national media attention, igniting my
                passion for entrepreneurship.
              </BodyParagraph>
            </BodyText>
          </div>
          <div className="basis-full lg:basis-1/3 pb-6 lg:pb-0 lg:pt-3 lg:pr-6 max-w-80 mx-auto">
            <Image src="/icons/rutgers-seal.svg" alt="Image" height={500} width={500} />
          </div>
        </div>
      </Section>
      <Section narrowTop>
        <div className="">
          <H2>Diving Into the Startup World</H2>
          <BodyText>
            <BodyParagraph>
              Right after graduating, I teamed up with three co-founders to create{" "}
              <TextLink link="/portfolio/projects/tag">Tag</TextLink>, a location-based social app for meetups. We
              rented an apartment in New York, developed an MVP, and secured funding from investors like Tim Draper,
              Eduardo Saverin, and Mark Cuban. We expanded our team, launched a campus ambassador program, and quickly
              grew to tens of thousands of users. Eventually, we were acquired by Mark Cuban Companies.
            </BodyParagraph>
            <BodyParagraph>
              Since my early days of building companies out of dorm rooms and apartments, I’ve brought my passion for
              product development, resourcefulness, and strong work ethic to every role. Over the past decade, I’ve
              worked with companies of all sizes, from pre-seed startups to multi-billion-dollar corporations. Notably,
              I led a team of four engineers to rebuild the entire{" "}
              <TextLink link="/portfolio/projects/starbucks">Starbucks&nbsp;Ecommerce&nbsp;Store</TextLink> in three
              months, generating over $100 million in holiday revenue. Following that, I joined{" "}
              <TextLink link="/portfolio/projects/renew">Renew</TextLink> as their first software engineer, where I
              built the API and DevOps process for the Medicare Plan Finder and Customer Success platforms, while
              mentoring and leading other engineers.
            </BodyParagraph>
            <BodyParagraph>
              In 2020, I returned to the founder seat, teaming up with two close colleagues to create{" "}
              <TextLink link="/portfolio/projects/odin">Odin</TextLink>, a premier workforce management and visibility
              platform for construction. Despite the global pandemic, economic downturn, and construction slowdown, we
              secured funding from top VCs like First Round and Fifth Wall, expanded our team, and landed numerous
              construction projects. Today, Odin manages over 20,000 workers across 700 contractors nationwide.
            </BodyParagraph>
            <BodyParagraph>
              Currently, I am the Head of Engineering at Red Krypton, a design, development, and marketing agency. We
              help companies build and scale their technology, grow their audience, and boost profitability. One such
              project involved working with <TextLink link="/portfolio/projects/great-many">Great Many</TextLink>, a
              hair restoration company, from their founding, developing a custom booking flow for their PRP service and
              a seamless telehealth experience for prescription products.
            </BodyParagraph>
          </BodyText>
        </div>
      </Section>
      <Section narrowTop narrowBottom>
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
            restaurants in Philadelphia, I enjoy traveling, hiking, skiing, drumming, and playing
            Magic:&nbsp;The&nbsp;Gathering. My love for Magic led me to volunteer for a passion project called{" "}
            <TextLink link="/portfolio/projects/17-lands">17Lands</TextLink>. Life is an adventure full of unknowns, but
            based on my experiences so far, I&apos;m confident that the next chapter in both my personal and
            professional life will be exciting!
          </BodyParagraph>
        </BodyText>
      </Section>
      <Section narrowTop narrowBottom></Section>
      <Section>
        <H2 marginOverride="mb-8">Some of My Work</H2>
        <PortfolioGrid onlyHighlighted />
      </Section>
    </>
  );
}
