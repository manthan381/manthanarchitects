// Next.js
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

// Global CSS
import "./globals.css";

import Script from "next/script";

//Fonts

const centuryGothic = localFont({
  src: "./fonts/CenturyGothic.woff2", // Relative path from the current file
  variable: "--font-century-gothic",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://manthanarchitects.com"),
  title: "Manthanarchitects",
  description:
    "Building timeless spaces through innovative design and quality construction.",
  verification: {
    google: "PyLg8ALIyatD4ipJsPkmYyE3472iIntX8SIiUC4Fdts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Manthan Architects", url: "https://manthanarchitects.com" }],
  publisher: "Manthan Architects",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2G79DZ4');
          `}
        </Script>
      </head>
      <body className={`${centuryGothic.className} antialiased lowercase`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2G79DZ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
