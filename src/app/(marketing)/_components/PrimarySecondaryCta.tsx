import CtaButton from "@/app/(marketing)/_components/CtaButton";
import React from "react";

export type PrimarySecondaryCta = {
  primaryText: string;
  primaryLink: string;
  primaryLinkNewTab?: boolean;
  secondaryText: string;
  secondaryLink: string;
  secondaryLinkNewTab?: boolean;
  secondaryFirst?: boolean;
};

export function PrimarySecondaryCta({
  primaryText,
  primaryLink,
  primaryLinkNewTab,
  secondaryText,
  secondaryLink,
  secondaryLinkNewTab,
  secondaryFirst,
}: PrimarySecondaryCta) {
  const buttonClassNames = "my-2";
  return (
    <div className="flex text-center items-center content-between max-h-24 flex-row justify-center mt-6">
      <CtaButton
        additionalClassNames={buttonClassNames}
        inverted={secondaryFirst}
        link={primaryLink}
        newTab={primaryLinkNewTab}
      >
        {primaryText}
      </CtaButton>
      <CtaButton
        additionalClassNames={buttonClassNames}
        inverted={!secondaryFirst}
        link={secondaryLink}
        newTab={secondaryLinkNewTab}
      >
        {secondaryText}
      </CtaButton>
    </div>
  );
}
