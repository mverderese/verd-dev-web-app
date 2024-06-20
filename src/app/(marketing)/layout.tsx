import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import PrelineScript from "@/app/_components/shared/PrelineScript";
import MarketingNavbar from "@/app/_components/marketing/MarketingNavbar";
import { IS_INDEXABLE, JOB_TITLE, MY_NAME, TAGLINE } from "@/app/constants";

export const metadata: Metadata = {
  title: `${MY_NAME} | ${JOB_TITLE}`,
  description: TAGLINE,
  robots: {
    index: IS_INDEXABLE,
    follow: IS_INDEXABLE,
    googleBot: {
      index: IS_INDEXABLE,
      follow: IS_INDEXABLE,
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
        <main className="gb-gray-100">{children}</main>
      </body>
      <PrelineScript />
    </html>
  );
}
