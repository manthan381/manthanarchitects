import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expertise — Architecture, Interior & Elevation Design | Manthan Architects",
  description:
    "Discover Manthan Architects' areas of expertise — from residential architecture and interior design to commercial spaces and elevation design. Trusted by 500+ satisfied clients across India.",
  keywords: "interior designer in gurugram, top 10 interior designers in gurgaon, top interior designers in gurgaon",
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
