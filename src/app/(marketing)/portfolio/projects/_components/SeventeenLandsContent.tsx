import Section from "@/app/_components/marketing/Section";
import ScreenshotPanel from "@/app/(marketing)/portfolio/projects/_components/ScreenshotPanel";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import H2 from "@/app/_components/marketing/H2";
import { ProjectContentProps } from "@/app/(marketing)/portfolio/projects/types";

export default function SeventeenLandsContent({ project }: ProjectContentProps) {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/17lands-draft-log.png"}>
        <BodyText>
          <BodyParagraph>
            Dignissim cras tincidunt lobortis feugiat vivamus at augue. Nibh venenatis cras sed felis eget. Nunc
            scelerisque viverra mauris in aliquam sem fringilla. Et sollicitudin ac orci phasellus egestas tellus. Non
            pulvinar neque laoreet suspendisse interdum. Morbi tincidunt ornare massa eget egestas. Mi sit amet mauris
            commodo quis imperdiet massa tincidunt nunc. Et magnis dis parturient montes nascetur ridiculus. Eros donec
            ac odio tempor.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <Section darkBg>
        <H2>Empowering a Growing Development Team</H2>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
        </BodyText>
      </Section>
    </>
  );
}
