import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";

export default function TagContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/tag-marketing.jpeg"}>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <ScreenshotPanel image={"/screenshots/tag-feed.jpg"} reverse mobileScreenshot darkBg>
        <H2>Disrupting the Social App Landscape</H2>
        <BodyText>
          <BodyParagraph>
            <a href="https://thenextweb.com/news/tag-iphone-lets-selectively-share-location-photos-video-friends">
              News coverage
            </a>{" "}
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
