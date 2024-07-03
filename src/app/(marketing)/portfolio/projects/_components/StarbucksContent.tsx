import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/(marketing)/_components/BodyText";
import BodyParagraph from "@/app/(marketing)/_components/BodyParagrah";
import LI from "@/app/(marketing)/_components/LI";
import UL from "@/app/(marketing)/_components/UL";

export default function StarbucksContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/starbucks-coffee-grid-desktop.jpg"}>
        <BodyText>
          <BodyParagraph>
            For years, Starbucks operated an Ecommerce store on an early version of Salesforce Commerce Cloud (formerly
            Demandware) that proved sluggish, prone to errors, and lacked mobile compatibility. The company was
            preparing to launch a new product, Verismo, by displaying these products in-store to drive online sales,
            eliminating the need for customers to purchase in-store and carry out. We rebuilt the entire site from
            scratch in React in three months, while leveraging the existing hosting capabilities of Demandware. In that
            time, I was responsible for:
          </BodyParagraph>
          <UL additionalClassNames="mb-6">
            <LI title={"React Frontend Architecture"}>
              Designed the overall structure of the React web application and Redux store with server-side rendering,
              user account token management, and asynchronous cart interactions.
            </LI>
            <LI title={"Hosting in Demandware"}>
              Created an automated service that would pre-render every page of the React application to static HTML and
              upload it to custom pages in Demandware via the Admin API. This allowed us to leverage the existing
              hosting capabilities that had already been through a security audit, allowing us to hit the deadline of
              the holiday season.
            </LI>
            <LI title={"Team Coordination"}>
              Coordinated between our team and various stakeholders across the Starbucks organization to ensure a
              seamless launch of hundreds of coffee, tea, drinkware, and gift products.
            </LI>
          </UL>
          <BodyParagraph>
            We successfully launched the new version of the e-commerce store in early November, just in time for the
            holiday season. The updated site ensured that the Verismo, along with all of Starbucks&apos; other products,
            was available for online shoppers. During this period, the online store was automatically displayed to any
            Starbucks customer connecting to in-store Wi-Fi, generating over $100 million in revenue.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}
