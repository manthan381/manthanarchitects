import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Elevation Design | Get a New Look for Your Home's Exterior",
  description:
    "Looking for a new look for your home? See our collection of front elevation designs, from simple modern styles to classic brick and stone finishes.",
  keywords: "elevation design Gurugram, front elevation design India, home exterior design, building elevation design, house facade design Gurgaon, modern elevation design, exterior architecture design, elevation design services India, stone elevation design, glass facade elevation",
  alternates: {
    canonical: "/elevation-design",
  },
};

export default function ElevationDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
