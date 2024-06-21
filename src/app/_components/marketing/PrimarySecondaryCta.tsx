import CtaButton from "@/app/_components/marketing/CtaButton";
import React from "react";

export type PrimarySecondaryCta = {
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
};

export function PrimarySecondaryCta({ primaryText, primaryLink, secondaryText, secondaryLink }: PrimarySecondaryCta) {
  const buttonClassNames = "my-2";
  return (
    <div className="flex flex-col items-center content-between max-h-24 lg:flex-row justify-center">
      <CtaButton additionalClassNames={buttonClassNames} link={primaryLink}>
        {primaryText}
      </CtaButton>
      <CtaButton additionalClassNames={buttonClassNames} inverted link={secondaryLink}>
        {secondaryText}
      </CtaButton>
    </div>
  );
}
