import CareerContent from "@/components/shared/CareerContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career at Manthan Architects | Join Our Team",
  description:
    "Explore career opportunities at Manthan Architects. Join our architecture, interior, and execution teams to work on impactful residential, commercial, and hospitality projects.",
  keywords:
    "career in architecture, architecture jobs gurugram, interior designer jobs, site execution jobs, manthan architects career, design studio jobs india",
  alternates: {
    canonical: "/career",
  },
};

export default function CareerPage() {
  return <CareerContent />;
}
