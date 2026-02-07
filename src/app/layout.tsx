// Next.js
import type { Metadata } from "next";
import localFont from "next/font/local";

// Global CSS
import "./globals.css";

//Fonts

const centuryGothic = localFont({
  src: "./fonts/CenturyGothic.woff2", // Relative path from the current file
  variable: "--font-century-gothic",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Manthanarchitects ",
  description:
    "Building timeless spaces through innovative design and quality construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${centuryGothic.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
