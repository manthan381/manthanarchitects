import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects – Modern Architects | Residential & Commercial Architecture Firm",
  description:
    "Browse Manthan Architects' projects featuring residential homes, commercial spaces, offices, and hospitals. Experience innovative architecture, interior design, and turnkey solutions.",
  keywords: "architecture portfolio India, interior design projects Gurugram, completed architecture projects, luxury residential projects, commercial interior design projects, hotel design projects India, office design Gurugram, architecture case studies, best interior design portfolio India",
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
