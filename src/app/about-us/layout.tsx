import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Manthan Architects in gurgaon",
  description:
    "Looking for expert architects in Gurugram? Manthan Architects offers integrated design and project execution. Explore our 1,000+ completed projects and book a consultation.",
  keywords: "architecture firms in gurgaon, architecture companies in gurgaon, list of architects in gurgaon",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
