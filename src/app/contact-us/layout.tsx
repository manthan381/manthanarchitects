import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Manthan Architects | Top Architects & Interior Designers in Gurugram",
  description:
    "Looking for a leading builder and interior designer in India? Contact Manthan Architects via phone, WhatsApp, or email to start your project journey today.",
  keywords: "contact Manthan Architects, architects contact Gurugram, book architecture consultation, free consultation architects India, interior design consultation Gurugram, Manthan Architects phone number, architecture firm contact Delhi NCR, book interior designer India",
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
