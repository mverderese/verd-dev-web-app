import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import PrelineScript from "@/app/_components/PrelineScript";
import MarketingNavbar from "@/app/(marketing)/_components/MarketingNavbar";
import { IS_INDEXABLE, JOB_TITLE, MY_NAME, SITE_DESCRIPTION } from "@/app/constants";
import localFont from "next/font/local";
import { Archivo_Black, DM_Sans, Roboto } from "next/font/google";
import classNames from "classnames";
import Scripts from "@/app/_components/Scripts";
import { titleForEnv } from "@/app/_util";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : null,
  alternates: {
    canonical: "/",
  },
  title: titleForEnv(`${MY_NAME} | ${JOB_TITLE}`),
  description: SITE_DESCRIPTION,
  robots: {
    index: IS_INDEXABLE,
    follow: IS_INDEXABLE,
    googleBot: {
      index: IS_INDEXABLE,
      follow: IS_INDEXABLE,
    },
  },
  openGraph: {
    title: `${MY_NAME} | ${JOB_TITLE}`,
    description: SITE_DESCRIPTION,
    images: `${baseUrl}mike-headshot.jpg`,
  },
};

const akiraExpandedFont = localFont({
  src: "../_fonts/akira-expanded.otf",
  display: "swap",
  variable: "--font-akira-expanded",
});

const archivoBlackFont = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

const robotoRegularFont = Roboto({
  subsets: ["latin"],
  weight: "300",
});
const robotoMediumFont = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto-medium",
});

const dmSansSemiBoldFont = DM_Sans({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-dm-sans-semibold",
});

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={classNames(
        akiraExpandedFont.variable,
        archivoBlackFont.variable,
        robotoRegularFont.className,
        dmSansSemiBoldFont.variable,
        robotoMediumFont.variable,
      )}
    >
      <body className={classNames("bg-astral")}>
        <MarketingNavbar />
        <main>{children}</main>
      </body>
      <PrelineScript />
      <Scripts />
    </html>
  );
}
