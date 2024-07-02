import React from "react";
import Image from "next/image";

export type PortfolioProjectLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PortfolioProjectLayout({ children }: PortfolioProjectLayoutProps) {
  return (
    <>
      <div className="container flex max-w-screen-xl mx-auto px-4 pt-6 mb-4 bg hover:opacity-50">
        <a href="/portfolio">
          <Image
            src="/icons/feather/chevron-left.svg"
            className="inline align-top"
            height={20}
            width={28}
            alt="chevron-left"
          />
          <span className="inline text-white text-xl">All Projects</span>
        </a>
      </div>
      {children}
    </>
  );
}
