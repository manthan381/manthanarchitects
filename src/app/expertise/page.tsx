"use client";
import BlogSection from "@/components/shared/BlogSection";
import { ClientTestimonials } from "@/components/shared/ClientTestimonials";
import { ContactCTA } from "@/components/shared/ContactCTA";
import ExpertiseHero from "@/components/shared/ExpertiseHero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import ProjectsSection from "@/components/shared/ProjectsSection";
import TrustedBy from "@/components/shared/TrustedBy";

export default function Home() {
  const testimonials = [
    {
      name: "Subhashe Chand",
      message: "Excellent team, good work",
      image: "/images/expertise/placeholder.png",
      rating: 5,
    },
    {
      name: "Ankush Kashyap",
      role: "Director",
      message:
        "Best-in-class services, and amazing interior designing solutions. The teamwork and the ideas they pitch were fabulous. Highly recommend.",
      image: "/images/expertise/placeholder.png",
      rating: 5,
    },
    {
      name: "Kashish Kapoor",
      message:
        "This firm is the best in providing timely and best service. I would like to appreciate the management for being hardworking and supportive.",
      image: "/images/expertise/placeholder.png",
      rating: 5,
    },
    {
      name: "Nishant kashyap",
      message:
        "Nice place to visit and get your work done with finesse, people are very co operative here",
      image: "/images/expertise/placeholder.png",
      rating: 5,
    },
    {
      name: "NAVDISH VERMA MECHANICAL ENGINEERING",
      message:
        "It's a interior design company which is a best in there work and no one competition in this area.",
      image: "/images/expertise/placeholder.png",
      rating: 5,
    },
    {
      name: "Simran Jyoti",
      message:
        "Very excellent staff ,services are on time Good hygienic conditions.",
      image: "/images/expertise/placeholder.png",
      rating: 5,
    },
    {
      name: "Kirti Bajwa",
      message:
        "Best Architectural and interior design firm in gurugram.....timely work and cost efficient with quality work.",
      image: "/images/expertise/placeholder.png",
      rating: 5,
    },
  ];
  return (
    <main>
      <Header />
      <ExpertiseHero />
      <TrustedBy />
      <div className="bg-gray-900 py-20">
        <ProjectsSection />
      </div>
      <ClientTestimonials
        className="py-20"
        title="Client Testimonials"
        subtitle="Hear from our satisfied partners"
        testimonials={testimonials}
      />
      <div className="py-20">
        <BlogSection />
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
