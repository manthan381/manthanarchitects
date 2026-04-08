import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects — Architecture & Interior Design Portfolio | Manthan Architects",
  description:
    "Browse Manthan Architects' portfolio of 800+ completed projects — luxury residences, corporate offices, hospitality spaces, and landmark architecture across India.",
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
