import Section from "@/app/(marketing)/_components/Section";
import BodyText from "@/app/(marketing)/_components/BodyText";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";
import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import H2 from "@/app/(marketing)/_components/H2";
import TextLink from "@/app/(marketing)/_components/TextLink";
import LI from "@/app/(marketing)/_components/LI";
import UL from "@/app/(marketing)/_components/UL";
import H4 from "@/app/(marketing)/_components/H4";

export default function OdinContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/odin-worker-profile.png"}>
        <BodyText>
          <BodyParagraph>
            When we founded{" "}
            <TextLink link="https://useodin.com/" newTab>
              Odin
            </TextLink>{" "}
            in March of 2020, our goal was to develop software that replaced manual, paper-based processes for tracking
            training and certifications, enhancing overall safety and reducing insurance costs of construction projects.
            Despite the challenges of a global pandemic, economic downturn, and a construction slowdown, we successfully
            bootstrapped the company, generating over $1 million in revenue in our first year. This growth was led by
            the usage of Odin at Hudson Yards, the largest privately-funded construction project in the world. We
            successfully raised a $3 million seed round led by First Round Capital, enabling us to expand our team and
            customer base.
          </BodyParagraph>
          <H4 additionalClassNames="font-dm-sans-semibold mb-2" narrowBottom>
            Odin&apos;s Metrics After 4 Years:
          </H4>
          <UL additionalClassNames="mb-6 text-pretty">
            <LI>12% Q/Q revenue growth</LI>
            <LI>20,000+ Workers onboarded</LI>
            <LI>700+ Contractors managed</LI>
            <LI>6,000,000+ Labor hours tracked</LI>
          </UL>
        </BodyText>
      </ScreenshotPanel>
      <Section darkBg>
        <div className="flex justify-center">
          <H2 additionalClassNames="mb-9">See Odin in Action</H2>
        </div>
        <div className="flex justify-center">
          <iframe
            className="aspect-video w-full lg:max-w-screen-lg"
            src="https://www.youtube.com/embed/hTFARRzFJ9o?si=2IGubaqSdbr2k0Np"
            title="YouTube video player - Workforce Visibility with Odin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Section>
      <Section>
        <H2>CTO at a High-Growth Startup</H2>
        <BodyText>
          <BodyParagraph>
            Over the course of four years, my role as Co-Founder & CTO was constantly evolving. In the early days, I led
            a team of four engineers to build a software platform in six months. This platform could onboard workers,
            track certifications, integrate with turnstile and badge printing systems, and provide custom workforce
            reports. We launched the product at Hudson Yards, managing over 2,000 workers per day. Gathering user
            feedback and iterating on the product quickly for customers who were not accustomed to using technology was
            critical for adoption.
          </BodyParagraph>
          <BodyParagraph>
            As the team and our customer base grew, we secured seed investment from First Round Capital and doubled the
            team size within nine months. I was responsible for providing the technical strategy for the entire company,
            managing a team of engineers, and leading the design of the platform. During this period, I advanced several
            engineers from mid-level to senior and leadership roles. Additionally, I spearheaded our effort to achieve
            SOC&nbsp;2 compliance, attracting larger customers with stringent cybersecurity requirements. In the last 12
            months of my tenure, Odin achieved a 12% quarter-over-quarter growth in revenue.
          </BodyParagraph>
        </BodyText>
      </Section>
      <ScreenshotPanel image={"/turnstile-and-wall-reader.png"} reverse twoThirdsText darkBg>
        <H2>A Highly-Sophisticated Easy-to-Use Platform</H2>
        <BodyText>
          <BodyParagraph>
            The Odin platform required integration with external vendors and physical hardware, such as turnstiles and
            cameras, while delivering a user-friendly experience on both web and mobile apps. This ensured that only
            qualified workers were allowed on site, significantly enhancing overall project safety. Our tech stack
            consisted of multiple seamlessly integrated services, providing a robust platform that was easy to develop,
            test, and deploy with GitHub Actions to our Kubernetes clusters in Google Cloud:
          </BodyParagraph>
          <UL additionalClassNames="mb-6">
            <LI title={"Web App"}>
              A React application written in TypeScript, leveraging Tailwind and Apollo Client, served by Express.js. It
              was primarily used by site safety teams and supervisors.
            </LI>
            <LI title={"Platform API"}>
              An Apollo/Express.js GraphQL Server written in TypeScript, connecting to a Postgres database with
              Sequelize.
            </LI>
            <LI title={"Physical Access Control"}>
              Microservices, cloud-hosted VMs, and on-site managed VPNs integrated with access control vendors, designed
              for on-prem installations, and connected to physical hardware like turnstiles and cameras.
            </LI>
            <LI title={"Mobile App"}>
              A React Native app written in TypeScript for iPhone and Android, allowing workers to onboard themselves
              and clock in and out each day without the need for expensive equipment.
            </LI>
            <LI title={"Authentication"}>
              A self-hosted instance of FusionAuth on top of Postgres, providing full control over account and
              authentication customizations while ensuring high security.
            </LI>
            <LI title={"Reporting"}>
              A web app and API integrated directly with Looker Enterprise, enabling customers to use standard
              compliance reports or custom-built insights.
            </LI>
          </UL>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
