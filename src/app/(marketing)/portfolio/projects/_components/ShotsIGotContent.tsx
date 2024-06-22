import Section from "@/app/_components/marketing/Section";
import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";

export default function ShotsIGotContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/shots-igot-sample-usage.png"}>
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
        <H2>The Start of My Entrepreneurial Spirit</H2>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
        </BodyText>
      </Section>
      <ScreenshotPanel image={"/screenshots/shots-igot-news.jpg"} reverse>
        <H2>A Viral Sensation Across Campuses</H2>
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