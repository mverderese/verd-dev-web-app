import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";
import Section from "@/app/_components/marketing/Section";

export default function StarbucksContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/starbucks-coffee-grid-desktop.jpg"}>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <Section narrowTop narrowBottom>
        <H2>Navigating a Legacy Tech Stack</H2>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
        </BodyText>
      </Section>
      <ScreenshotPanel image={"/screenshots/starbucks-coffee-grid-mobile.jpg"} mobile reverse>
        <H2>A Mobile-first Experience</H2>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
    </>
  );
}