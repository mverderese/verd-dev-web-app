import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import { APP_TITLE, IS_INDEXABLE } from "@/app/constants";
import AppHeader from "./_components/AppHeader";
import AppSidebar from "./_components/AppSidebar";
import PrelineScript from "../_components/PrelineScript";

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
