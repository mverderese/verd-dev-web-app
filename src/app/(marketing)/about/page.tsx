import Image from "next/image";
import Section from "@/app/_components/marketing/Section";
import H1 from "@/app/_components/marketing/H1";
import BodyText from "@/app/_components/marketing/BodyText";
import BodyParagraph from "@/app/_components/marketing/BodyParagrah";

export default function AboutPage() {
  return (
    <Section>
      <div className="flex flex-wrap">
        <div className="basis-full md:basis-1/3 pb-6 md:pb-0 md:pt-3 md:pr-6">
          <Image src="/mike-headshot-2.jpg" alt="Image" height={500} width={500} />
        </div>
        <div className="basis-full md:basis-2/3">
          <H1>Hey, I&apos;m Mike</H1>
          <BodyText>
            <BodyParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ornare lectus sit amet est placerat in. Cursus risus at ultrices mi tempus. Faucibus
              pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt lobortis feugiat vivamus at augue.
              Ac auctor augue mauris augue neque gravida.
            </BodyParagraph>
            <BodyParagraph>
              Diam vulputate ut pharetra sit. Id eu nisl nunc mi ipsum. Cursus risus at ultrices mi tempus imperdiet.
              Gravida arcu ac tortor dignissim convallis aenean et. Eros donec ac odio tempor orci dapibus. Vestibulum
              lorem sed risus ultricies tristique nulla aliquet enim tortor. Dis parturient montes nascetur ridiculus
              mus mauris vitae ultricies. Purus gravida quis blandit turpis cursus in.
            </BodyParagraph>
            <BodyParagraph>
              Dignissim cras tincidunt lobortis feugiat vivamus at augue. Nibh venenatis cras sed felis eget. Nunc
              scelerisque viverra mauris in aliquam sem fringilla. Et sollicitudin ac orci phasellus egestas tellus. Non
              pulvinar neque laoreet suspendisse interdum. Morbi tincidunt ornare massa eget egestas. Mi sit amet mauris
              commodo quis imperdiet massa tincidunt nunc. Et magnis dis parturient montes nascetur ridiculus. Eros
              donec ac odio tempor.
            </BodyParagraph>
          </BodyText>
        </div>
      </div>
    </Section>
  );
}
