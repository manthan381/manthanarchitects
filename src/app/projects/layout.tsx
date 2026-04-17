import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects – Modern Architects | Residential & Commercial Architecture Firm",
  description:
    "Browse Manthan Architects' projects featuring residential homes, commercial spaces, offices, and hospitals. Experience innovative architecture, interior design, and turnkey solutions.",
  keywords: "top 10 architects in gurgaon, list of architects in delhi ncr, architecture companies",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
