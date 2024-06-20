import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import PrelineScript from "@/app/_components/shared/PrelineScript";
import AppHeader from "@/app/_components/app/AppHeader";
import AppSidebar from "@/app/_components/app/AppSidebar";
import { APP_TITLE, IS_INDEXABLE } from "@/app/constants";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "This is a pretty cool app!",
  robots: {
    index: IS_INDEXABLE,
    follow: IS_INDEXABLE,
    googleBot: {
      index: IS_INDEXABLE,
      follow: IS_INDEXABLE,
    },
  },
};

export default function AppLayout({
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
