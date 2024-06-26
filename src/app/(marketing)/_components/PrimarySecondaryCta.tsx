import CtaButton from "@/app/(marketing)/_components/CtaButton";
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
    <div className="flex flex-col items-center content-between max-h-24 lg:flex-row justify-center">
      <CtaButton additionalClassNames={buttonClassNames} link={primaryLink}>
        {primaryText}
      </CtaButton>
      <CtaButton additionalClassNames={buttonClassNames} inverted link={secondaryLink} newTab={secondaryLinkNewTab}>
        {secondaryText}
      </CtaButton>
    </div>
  );
}
