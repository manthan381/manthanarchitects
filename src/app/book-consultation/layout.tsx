import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation - Manthan Architects | Top Architects & Interior Designers",
  description:
    "Schedule a consultation with Manthan Architects. Discuss your architectural, interior design, or construction vision with our expert team.",
  keywords: "home interior designer gurgaon, novarch architects, best resturant bar and brewery interior designer",
  alternates: {
    canonical: "/book-consultation",
  },
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
