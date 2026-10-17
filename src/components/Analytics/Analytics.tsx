import { env } from "~/lib/env";

const idPattern = /^[\w-]+$/;

/**
 * Google Analytics and Hotjar, loaded only in production builds that have the
 * matching IDs configured. IDs are validated before being inlined.
 */
export function Analytics() {
  if (!env.isProdBuild) return null;
  const gaId = env.gaMeasurementId && idPattern.test(env.gaMeasurementId) ? env.gaMeasurementId : undefined;
  const hotjarId = env.hotjarSiteId && /^\d+$/.test(env.hotjarSiteId) ? env.hotjarSiteId : undefined;

  return (
    <>
      {gaId ? (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
            }}
          />
        </>
      ) : null}
      {hotjarId ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${hotjarId},hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      ) : null}
    </>
  );
}
