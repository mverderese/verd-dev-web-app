import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import PrelineScript from "@/app/_components/shared/PrelineScript";
import AppHeader from "@/app/_components/app/AppHeader";
import AppSidebar from "@/app/_components/app/AppSidebar";
import { APP_TITLE } from "@/app/_components/shared/constants";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "You know how sweet it is!",
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
        <AppHeader />
        <AppSidebar />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
