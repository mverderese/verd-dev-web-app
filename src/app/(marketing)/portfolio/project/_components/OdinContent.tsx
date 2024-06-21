import Section from "@/app/_components/marketing/Section";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";
import ScreenshotPanel from "@/app/(marketing)/portfolio/project/_components/ScreenshotPanel";
import H2 from "@/app/_components/marketing/H2";

export default function OdinContent() {
  return (
    <>
      <ScreenshotPanel image={"/screenshots/odin-worker-profile.png"}>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
          <BodyParagraph>
            Dignissim cras tincidunt lobortis feugiat vivamus at augue. Nibh venenatis cras sed felis eget. Nunc
            scelerisque viverra mauris in aliquam sem fringilla. Et sollicitudin ac orci phasellus egestas tellus. Non
            pulvinar neque laoreet suspendisse interdum. Morbi tincidunt ornare massa eget egestas. Mi sit amet mauris
            commodo quis imperdiet massa tincidunt nunc. Et magnis dis parturient montes nascetur ridiculus. Eros donec
            ac odio tempor.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <Section narrow>
        <H2>Bringing Tech to and Old-School Industry</H2>
        <BodyText>
          <BodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
            pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue. Ac
            auctor augue mauris augue neque gravida.
          </BodyParagraph>
          <BodyParagraph>
            Dignissim cras tincidunt lobortis feugiat vivamus at augue. Nibh venenatis cras sed felis eget. Nunc
            scelerisque viverra mauris in aliquam sem fringilla. Et sollicitudin ac orci phasellus egestas tellus. Non
            pulvinar neque laoreet suspendisse interdum. Morbi tincidunt ornare massa eget egestas. Mi sit amet mauris
            commodo quis imperdiet massa tincidunt nunc. Et magnis dis parturient montes nascetur ridiculus. Eros donec
            ac odio tempor.
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
          <BodyParagraph>
            Dignissim cras tincidunt lobortis feugiat vivamus at augue. Nibh venenatis cras sed felis eget. Nunc
            scelerisque viverra mauris in aliquam sem fringilla. Et sollicitudin ac orci phasellus egestas tellus. Non
            pulvinar neque laoreet suspendisse interdum. Morbi tincidunt ornare massa eget egestas. Mi sit amet mauris
            commodo quis imperdiet massa tincidunt nunc. Et magnis dis parturient montes nascetur ridiculus. Eros donec
            ac odio tempor.
          </BodyParagraph>
        </BodyText>
      </ScreenshotPanel>
      <Section>
        <div className="flex justify-center mb-16">
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
