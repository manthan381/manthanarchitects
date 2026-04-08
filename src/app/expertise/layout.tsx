import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expertise — Architecture, Interior & Elevation Design | Manthan Architects",
  description:
    "Discover Manthan Architects' areas of expertise — from residential architecture and interior design to commercial spaces and elevation design. Trusted by 500+ satisfied clients across India.",
  keywords: "architecture expertise India, interior design expertise Gurugram, residential interior design, commercial architecture services, elevation design expertise, luxury home design services, hospitality design India, office interior design Gurugram, architecture consultancy India, interior design consultation",
  alternates: {
    canonical: "/expertise",
  },
};

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
