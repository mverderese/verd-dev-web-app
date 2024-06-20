import Section from "@/app/_components/marketing/Section";
import Image from "next/image";
import H2 from "@/app/_components/marketing/H2";

export default function OdinPage() {
  return (
    <>
      <Section>
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image src="/icons/odin-blue-black-logo.svg" height={90} width={258} alt="Odin logo" />
          </div>
          <H2>Construction Workforce Management and Visibility</H2>

          <div className="flex justify-center mb-16">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/hTFARRzFJ9o?si=2IGubaqSdbr2k0Np"
              title="YouTube video player - Workforce Visibility with Odin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
