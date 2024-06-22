import CtaButton from "@/app/_components/marketing/CtaButton";
import Section from "@/app/_components/marketing/Section";

export type ExternalWebsitePanelProps = {
  siteUrl: string;
};
export default function ExternalWebsitePanel({ siteUrl }: ExternalWebsitePanelProps) {
  return (
    <Section>
      <CtaButton link={siteUrl}>Visit Website</CtaButton>
    </Section>
  );
}
