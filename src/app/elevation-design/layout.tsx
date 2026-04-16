import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Elevation Design | Get a New Look for Your Home's Exterior",
  description:
    "Looking for a new look for your home? See our collection of front elevation designs, from simple modern styles to classic brick and stone finishes.",
  keywords: "luxury interior design firms, luxury interior designers in gurgaon, interior decorator in gurgaon",
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
