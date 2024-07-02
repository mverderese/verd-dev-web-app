import Script from "next/script";
import React from "react";

const isProdNodeEnv = process.env.NODE_ENV === "production";
const gtmMeasurementId = process.env.NEXT_PUBLIC_GTM_MEASUREMENT_ID;
const hotjarSiteId = process.env.NEXT_PUBLIC_HOTJAR_SITE_ID
  ? parseInt(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID)
  : undefined;

export default function Scripts() {
  return (
    <>
      {isProdNodeEnv && gtmMeasurementId && (
        <>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=${gtmMeasurementId}"></Script>
          <Script id="gtm" strategy="beforeInteractive">
            {`
              <!-- Google tag (gtag.js) -->
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtmMeasurementId}');
            `}
          </Script>
        </>
      )}
      {isProdNodeEnv && hotjarSiteId && (
        <Script id="hotjar" strategy="beforeInteractive">
          {`
            <!-- Hotjar tracking code -->
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:${hotjarSiteId},hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}
    </>
  );
}
