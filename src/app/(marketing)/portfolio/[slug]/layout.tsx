import React from "react";
import { ChevronLeft } from "react-feather";

export type PortfolioProjectLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PortfolioProjectLayout({ children }: PortfolioProjectLayoutProps) {
  return (
    <>
      <div className="container flex max-w-screen-xl mx-auto px-4 pt-6">
        <a href="/portfolio">
          <ChevronLeft color="rgb(107, 114, 128)" className="inline align-text-top" height={20} width={20} />
          <span className="inline pt">All Projects</span>
        </a>
      </div>
      {children}
    </>
  );
}
