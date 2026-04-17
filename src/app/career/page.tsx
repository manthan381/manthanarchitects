import CareerContent from "@/components/shared/CareerContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manthan Architects Careers | Architect, Interior Designer & 3D Jobs in Gurgaon",
  description:
    "Join Manthan Architects and build impactful architecture & design projects. Explore careers in architecture, interior design, 3D design & business roles in Gurgaon.",
  keywords:
    "interior designers in gurgaon, interior design firms in gurgaon, interior design company in gurgaon",
  alternates: {
    canonical: "/career",
  },
};

export default function CareerPage() {
  return <CareerContent />;
}
