import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Manthan Architects | Top Architects & Interior Designers in Gurugram",
  description:
    "Looking for a leading builder and interior designer in India? Contact Manthan Architects via phone, WhatsApp, or email to start your project journey today.",
  keywords: "best architects in gurgaon, top architects in gurgaon, architects and interior designers in gurgaon",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
