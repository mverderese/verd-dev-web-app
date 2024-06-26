import React from "react";
import Image from "next/image";
import { PrimarySecondaryCta } from "@/app/(marketing)/_components/PrimarySecondaryCta";

export type PortfolioProjectLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PortfolioProjectLayout({ children }: PortfolioProjectLayoutProps) {
  return (
    <>
      <div className="container flex max-w-screen-xl mx-auto px-4 pt-6 mb-4">
        <a href="/portfolio">
          <Image
            src="/icons/feather/chevron-left.svg"
            className="inline align-top fill-pampas hover:fill-gray-50"
            height={20}
            width={28}
            alt="chevron-left"
          />
          <span className="inline text-xl hover:text-gray-600">All Projects</span>
        </a>
      </div>
      {children}
      <div className="text-center">
        <div className="flex justify-center my-12">
          <PrimarySecondaryCta
            primaryText="All projects"
            primaryLink="/portfolio"
            secondaryText="About me"
            secondaryLink="/about"
          />
        </div>
      </div>
    </>
  );
}
