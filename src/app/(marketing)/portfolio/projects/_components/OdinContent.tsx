import Section from "@/app/_components/marketing/Section";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import H2 from "@/app/_components/marketing/H2";
import TextLink from "@/app/_components/marketing/TextLink";
import LI from "@/app/_components/marketing/LI";
import UL from "@/app/_components/marketing/UL";

export default function OdinContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/odin-worker-profile.png"}>
        <BodyText>
          <BodyParagraph>
            Construction is one of the most dangerous professions globally, with over 1,000 workers killed on the job
            annually in the US alone. A strong safety culture, proper training, and adherence to government
            certifications are key to reducing incidents and injuries on construction sites. When we founded{" "}
            <TextLink link="https://useodin.com/">Odin</TextLink> in March of 2020, our goal was to develop software
            that replaces manual, paper-based processes for tracking training and certifications. This ensures that
            every worker on site is properly trained and certified, enhancing overall safety.
          </BodyParagraph>
          <BodyParagraph>
            Despite the challenges of a global pandemic, economic downturn, and a construction slowdown, we successfully
            bootstrapped the company, generating over $1 million in revenue in our first year. To achieve this, I led a
            team of three engineers to build the first version of the product in just six months. With this platform, we
            onboarded our first customer, The Related Companies, managing over a million square feet of construction
            sites and thousands of workers.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <Section darkBg>
        <H2>A Founder&apos;s Many Hats</H2>
        <BodyText>
          <BodyParagraph>
            Over the course of four years, my role as Co-Founder & CTO was constantly evolving. In the early days,
            building the MVP of our platform was the top priority. Our Head of Product and I would talk to prospective
            customers and learn as much as we could about an industry we knew little about. I then worked with our
            engineers, leading the architectural design of the platform and tirelessly writing code and iterating until
            we were ready to launch on our first site.
          </BodyParagraph>
          <BodyParagraph>
            Once we launched, I took on the role of a one-person customer success team. Traveling from Philadelphia to
            New York multiple times a week, I worked closely with the site safety team in their trailer, teaching them
            how to use the product, understanding their daily tasks, and gathering feedback. I reported this feedback to
            our team, collaborated with them through the evening (as most were based on the West Coast), pushed out new
            versions, and returned to New York the next day to demonstrate the updates to the onsite team. This
            iterative process ensured continuous improvement and alignment with our users&apos; needs.
          </BodyParagraph>
          <BodyParagraph>
            As the team grew, we secured seed investment from First Round Capital and other VCs, with the goal of
            boosting revenue by any means necessary. Within nine months, the team doubled in size, and I assumed roles
            as a people manager, tech leader, and operations manager. We continuously added features, improved internal
            engineering efficiencies, and onboarded new construction sites, requiring coordination with stakeholders,
            hardware installation vendors, and our customer success team. During this period, I facilitated the
            advancement of several engineers from mid-level to senior roles. Additionally, I spearheaded our effort to
            achieve SOC 2 Type 1 compliance, enabling us to attract larger customers with stringent cybersecurity
            requirements.
          </BodyParagraph>
          <BodyParagraph>
            When the tech downturn of 2023 hit, Odin was not immune. The strategy shifted from growth to cutting burn
            rapidly. We faced the tough decision to lay off several employees while maintaining the same customer base.
            My responsibilities expanded as I took on building hardware units myself when possible, performing on-site
            installations and support, leading sales calls with prospective customers, and continuing to lead our
            engineering team. This forced us to return to our early, scrappy approach to business. Despite the
            challenges, in the last 12 months of my tenure, Odin achieved a 12% quarter-over-quarter growth in revenue.
          </BodyParagraph>
        </BodyText>
      </Section>
      {/*<ScreenshotPanel image={"/mac-2t-turnstile.png"} reverse twoThirdsText>*/}
      <ScreenshotPanel image={"/turnstile-and-wall-reader.png"} reverse twoThirdsText>
        <H2>Automated Access Control and Compliance</H2>
        <BodyText>
          <BodyParagraph>
            While I take pride in my ability to juggle various responsibilities, my true passion at Odin and throughout
            my career has always been building products. The Odin platform required integration with external vendors
            and physical hardware, such as turnstiles and cameras, while delivering a user-friendly experience on both
            web and mobile apps. This ensured that only qualified workers were allowed on site, significantly enhancing
            overall project safety. Our tech stack consisted of multiple seamlessly integrated services, providing a
            robust platform that was easy to develop, test, and deploy:
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
      <Section darkBg>
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
    </>
  );
}
