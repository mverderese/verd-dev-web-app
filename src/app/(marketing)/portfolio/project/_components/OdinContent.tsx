import Section from "@/app/_components/marketing/Section";

export default function OdinContent() {
  return (
    <Section>
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
    </Section>
  );
}
