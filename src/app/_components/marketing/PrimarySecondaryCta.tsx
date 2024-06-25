import CtaButton from "@/app/_components/marketing/CtaButton";
import React from "react";

export type PrimarySecondaryCta = {
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
  secondaryLinkNewTab?: boolean;
};

export function PrimarySecondaryCta({
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  secondaryLinkNewTab,
}: PrimarySecondaryCta) {
  const buttonClassNames = "my-2";
  return (
    <div className="flex text-center items-center content-between max-h-24 flex-row justify-center mt-6">
      <CtaButton additionalClassNames={buttonClassNames} link={primaryLink}>
        {primaryText}
      </CtaButton>
      <CtaButton additionalClassNames={buttonClassNames} inverted link={secondaryLink} newTab={secondaryLinkNewTab}>
        {secondaryText}
      </CtaButton>
    </div>
  );
}
