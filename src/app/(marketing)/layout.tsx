import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import PrelineScript from "@/app/_components/PrelineScript";
import MarketingNavbar from "@/app/_components/MarketingNavbar";

export const metadata: Metadata = {
  title: "Verderese Development | Innovation through custom solutions",
  description: "Innovation through custom solutions",
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
      <body>
        <MarketingNavbar />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
