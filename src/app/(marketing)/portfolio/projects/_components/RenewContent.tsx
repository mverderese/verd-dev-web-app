import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/(marketing)/_components/BodyText";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";
import H2 from "@/app/(marketing)/_components/H2";
import LI from "@/app/(marketing)/_components/LI";
import UL from "@/app/(marketing)/_components/UL";

export default function RenewContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/renew-medicare-plan-finder.png"}>
        <BodyText>
          <BodyParagraph>
            Renew&apos;s mission was to simplify the transition into retirement, focusing on health, wealth, and time.
            As the lead backend and DevOps engineer, I designed and built the API, as well as the automated
            infrastructure provisioning and deployment pipeline for the Medicare Plan Finder platform. This involved
            managing numerous services and integrations, including:
          </BodyParagraph>
          <UL>
            <LI title={"Platform API"}>
              Developed a RESTful Flask API in Python, documented with OpenAPI/Swagger, and connected to a Postgres
              database. The API consolidated data from multiple sources, including monthly data from the Center of
              Medicare and Medicaid Services, creating a unified interface for the front-end team to develop the web
              app.
            </LI>
            <LI title={"Automated Infrastructure Provisioning"}>
              Utilized Ansible to define a HIPAA-compliant AWS infrastructure and system architecture for all
              environments, including EC2, S3, ELB, and Route53, using easy-to-read YAML files.
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
            multiple plans. Along with powerful self-serve features, we also built the flexibility to speak to customer
            success before making a final decision. I led a team to build a Customer Success platform that integrated
            InContact Softphone and Salesforce. This integration allowed agents and Medicare brokers to focus on
            assisting users and closing sales, rather than juggling multiple platforms.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
