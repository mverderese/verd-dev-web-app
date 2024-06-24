import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";
import UL from "@/app/_components/marketing/UL";
import LI from "@/app/_components/marketing/LI";
import TextLink from "@/app/_components/marketing/TextLink";

export default function GreatManyContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/great-many-appointment-selection.png"}>
        <BodyText>
          <BodyParagraph narrowBottom>
            <TextLink link="https://www.greatmany.com/" newTab>
              Great Many
            </TextLink>{" "}
            is a hair growth startup that provides everything you need to grow your hair, all in one place. Red Krypton,
            our agency, was hired to build their entire technical offering from the ground up. My responsibilities
            included:
          </BodyParagraph>
          <UL>
            <LI title={"Designing a Custom Booking Flow"}>
              Developed a full-stack booking system for their flagship Plasma Hair Restoration service, written in
              TypeScript using Next.js with Apollo Server and Prisma, and integrated with Boulevard, a client experience
              platform.
            </LI>
            <LI title={"Integrating Telehealth Workflow"}>
              Orchestrated the integration of six vendors to create a seamless prescription drug telehealth process,
              allowing customers to complete purchases entirely online.
            </LI>
            <LI title={"Building an Analytics Platform"}>
              Created a robust analytics system to ensure high conversion rates, reduce customer acquisition costs
              (CAC), and enable targeted email/SMS marketing campaigns.
            </LI>
            <LI title={"Client Collaboration and Team Leadership"}>
              Worked directly with the client and led the technical team to implement their requests efficiently.
            </LI>
          </UL>
        </BodyText>
      </ScreenshotPanel>
      <ScreenshotPanel image={"/screenshots/great-many-rx-pdp.png"} reverse darkBg>
        <H2>A Seamless Telehealth Experience</H2>
        <BodyText>
          <BodyParagraph>
            While attracting clients to their New York brick-and-mortar location was crucial in the early days, Great
            Many aimed to serve customers nationwide. In addition to in-studio services, they wanted to offer consumer
            packaged goods (CPG) like shampoos and serums, along with prescriptions tailored to each individual&apos;s
            specific type of hair loss. To streamline this process for customers, I integrated six different vendors and
            platforms, ensuring a seamless and opaque user experience:
          </BodyParagraph>
          <UL additionalClassNames="mb-6">
            <LI title={"Shopify"}>Customers subscribed via Shopify to purchase Rx products.</LI>
            <LI title={"Authorize.net"}>Used for checkout since Shopify Pay has limitations on medical products.</LI>
            <LI title={"Embeddables"}>Implemented a mandatory medical intake form for every Rx purchase.</LI>
            <LI title={"Beluga Health"}>
              Sent prescription details, patient info, and medical intake forms to Beluga for asynchronous approval from
              a medical provider.
            </LI>
            <LI title={"Curexa"}>
              An online compounding pharmacy that fulfilled and shipped prescriptions directly to customers.
            </LI>
            <LI title={"ActiveCampaign"}>
              Kept customers informed about the status of their telehealth visit and prescription order, and notified
              them of upcoming prescription refills.
            </LI>
          </UL>
          <BodyParagraph narrowBottom>
            These vendor integrations resulted in a completely streamlined purchasing and telehealth experience for the
            customer and allowed Great Many to begin marketing themselves across the entire country.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
