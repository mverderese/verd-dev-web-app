import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";
import LI from "@/app/_components/marketing/LI";
import UL from "@/app/_components/marketing/UL";

export default function RenewContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/renew-medicare-plan-finder.png"}>
        <BodyText>
          <BodyParagraph>
            I was invited by the Co-Founder & CTO to join the founding team of Renew, a Venrock-backed healthcare
            startup led by the former Co-Founder & CEO of Oscar Health. I relocated from New York to Santa Monica to
            seize this incredible opportunity. Renew&apos;s mission was to simplify the transition into retirement,
            focusing on health, wealth, and time. Given the complexity and confusion surrounding Medicare enrollment and
            plan selection, we aimed to make this process clearer and more accessible.
          </BodyParagraph>
          <BodyParagraph>
            As the lead backend and DevOps engineer, I was responsible for designing and building the API, as well as
            the automated infrastructure provisioning and deployment pipeline for the Medicare Plan Finder platform.
            This involved managing numerous services and integrations, including:
          </BodyParagraph>
          <UL>
            <LI title={"Platform API"}>
              Developed a RESTful Flask API in Python, documented with OpenAPI/Swagger, and connected to a Postgres
              database. The API consolidated data from multiple sources, including monthly data from the Center of
              Medicare and Medicaid Services (delivered by mail on a DVD) and various external vendors, creating a
              unified interface for the front-end team to develop the web app.
            </LI>
            <LI title={"Automated Infrastructure Provisioning"}>
              Utilized Ansible to define AWS infrastructure for all environments, including EC2, S3, ELB, and Route53,
              using easy-to-read YAML files.
            </LI>
            <LI title={"Service Deployments"}>
              Employed Ansible to deploy the API and web app to any environment with a single CLI command, ensuring
              seamless updates and scalability.
            </LI>
          </UL>
        </BodyText>
      </ScreenshotPanel>
      <ScreenshotPanel image={"/screenshots/renew-plan-comparison.png"} reverse darkBg>
        <H2>Growing With Our Customers</H2>
        <BodyText>
          <BodyParagraph>
            As our team and customer base grew, so did our need for new customer features and internal platforms.
            Prospective customers could enter their list of prescription drugs and indicate the benefits that mattered
            most to them. The site would then provide plan recommendations and offer cost and benefit comparisons across
            multiple plans. Despite these powerful online features, many people still preferred speaking to a person
            before making a final decision. To streamline this process, I led a team to build a Customer Success
            platform that integrated InContact Softphone and Salesforce.
          </BodyParagraph>
          <BodyParagraph>
            When users called in, they would provide a six-digit code, allowing agents to instantly access all the
            information the customers were viewing, including their drugs, preferred benefits, and the plans they were
            considering. Agents could make changes to these selections, and users would see the updates in real-time on
            their screens. This integration allowed agents and Medicare brokers to focus on assisting users and closing
            sales, rather than juggling multiple platforms.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
