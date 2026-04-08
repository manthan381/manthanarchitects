import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Design Services in Gurugram | Manthan Architects",
  description:
    "Manthan Architects specializes in exquisite architectural design, blending structural precision with aesthetic brilliance. Discover functional, innovative spaces featuring indoor-outdoor concepts, landscaped courtyards, and timeless facades in Gurugram.",
  keywords: "architectural design Gurugram, best architecture design firm Gurugram, architects design services India, architectural design company Gurgaon, residential architectural design, commercial architectural design, modern architecture Gurugram, facade design India, space planning architects, architectural design consultation",
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
