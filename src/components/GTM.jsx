"use client";

import { useEffect } from "react";
import Head from "next/head";

const GTM_ID = "AW-16850078520"; // Substitua pelo seu ID

export default function GoogleTagManager() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GTM_ID);
    }
  }, []);

  return (
    <Head>
      {/* Script do GTM no <head> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}');
          `,
        }}
      />
    </Head>
  );
}
