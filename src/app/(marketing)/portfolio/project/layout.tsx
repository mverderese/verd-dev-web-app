import React from "react";
import CtaButton from "@/app/_components/marketing/CtaButton";
import Image from "next/image";

export type PortfolioProjectLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PortfolioProjectLayout({ children }: PortfolioProjectLayoutProps) {
  return (
    <>
      <div className="container flex max-w-screen-xl mx-auto px-4 pt-6">
        <a href="/portfolio">
          <Image
            src="/icons/feather/chevron-left.svg"
            className="inline align-text-top fill-gray-200"
            height={20}
            width={20}
            alt="chevron-left"
          />
          <span className="inline pt">All Projects</span>
        </a>
      </div>
      {children}
      <div className="text-center">
        <div className="flex justify-center mb-16">
          <CtaButton link={"/portfolio"}>All projects</CtaButton>
        </div>
      </div>
    </>
  );
}
