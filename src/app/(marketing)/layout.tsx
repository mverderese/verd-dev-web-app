import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import PrelineScript from "@/app/_components/shared/PrelineScript";
import MarketingNavbar from "@/app/_components/marketing/MarketingNavbar";
import { JOB_TITLE, MY_NAME, TAGLINE } from "@/app/_components/shared/constants";

export const metadata: Metadata = {
  title: `${MY_NAME} | ${JOB_TITLE}`,
  description: TAGLINE,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <MarketingNavbar />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
