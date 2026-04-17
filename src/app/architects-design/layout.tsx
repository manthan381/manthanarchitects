import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Design Services in Gurugram | Manthan Architects",
  description:
    "Manthan Architects specializes in exquisite architectural design, blending structural precision with aesthetic brilliance. Discover functional, innovative spaces featuring indoor-outdoor concepts, landscaped courtyards, and timeless facades in Gurugram.",
  keywords: "environ architecture, modern traditional, modern traditional interior",
  alternates: {
    canonical: "/architects-design",
  },
};

export default function ArchitectsDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
