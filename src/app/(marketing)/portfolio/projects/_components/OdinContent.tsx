import Section from "@/app/_components/marketing/Section";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import H2 from "@/app/_components/marketing/H2";
import { ProjectContentProps } from "@/app/(marketing)/portfolio/projects/types";

export default function OdinContent({ project }: ProjectContentProps) {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/odin-worker-profile.png"}>
        <BodyText>
          <BodyParagraph>
            Construction is one of the most dangerous professions globally, with over 1,000 workers killed on the job
            annually in the US alone. A strong safety culture, proper training, and adherence to government
            certifications are key to reducing incidents and injuries on construction sites. When we founded Odin, our
            goal was to develop software that replaces manual, paper-based processes for tracking training and
            certifications. This ensures that every worker on site is properly trained and certified, enhancing overall
            safety.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      {/*<ExternalWebsitePanel siteUrl={proj}*/}
      <Section darkBg>
        <H2>Bringing Tech to an Old-School Industry</H2>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
        </BodyText>
      </Section>
      <ScreenshotPanel image={"/mac-2t-turnstile.png"} reverse>
        <H2>Automated Access Control and Compliance</H2>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
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
