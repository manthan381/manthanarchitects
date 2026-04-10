import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Manthan Architects in gurgaon",
  description:
    "Looking for expert architects in Gurugram? Manthan Architects offers integrated design and project execution. Explore our 1,000+ completed projects and book a consultation.",
  keywords: "about Manthan Architects, architects in Gurugram, architecture firm India, interior design company Gurgaon, best architects Gurugram, award winning architecture India, architectural firm Delhi NCR, Manthan Dezin Studio",
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
