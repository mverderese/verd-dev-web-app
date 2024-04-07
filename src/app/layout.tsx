import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const isProdNodeEnv = process.env.NODE_ENV === "production";
const gtmMeasurementId = process.env.NEXT_PUBLIC_GTM_MEASUREMENT_ID;
const hotjarSiteId = process.env.NEXT_PUBLIC_HOTJAR_SITE_ID
  ? parseInt(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID)
  : undefined;

export const metadata: Metadata = {
  title: "Verderese Development",
  description: "Making your software dreams a reality",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {isProdNodeEnv && gtmMeasurementId && (
        <Script id="gtm">
          {`
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=${gtmMeasurementId}"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtmMeasurementId}');
            </script>
          `}
        </Script>
      )}
      {isProdNodeEnv && gtmMeasurementId && (
        <Script id="hotjar">
          {`
            <!-- Hotjar tracking code -->
            <script>
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${hotjarSiteId},hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            </script>
          `}
        </Script>
      )}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
