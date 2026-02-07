"use client";
import BlogSection from "@/components/shared/BlogSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import FeatureSection from "@/components/shared/FeatureSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import IconContentSplit from "@/components/shared/IconContentSplit";
import ProjectsSection from "@/components/shared/ProjectsSection";
import ThreeColumnImages from "@/components/shared/ThreeColumnImages";
import TrustedBy from "@/components/shared/TrustedBy";
import WhatWeDoSection from "@/components/shared/WhatWeDoSection";
import { Sofa, Hammer, PencilRuler } from "lucide-react";
import OrbitLayout from "@/components/shared/OrbitLayout";

export default function Home() {
  const data = [
    {
      imageSrc: "/images/projects/p1.png",
      title: `Architecture & Design`,
    },
    {
      imageSrc: "/images/projects/p2.png",
      title: "Office Design & Build",
    },
    {
      imageSrc: "/images/services/customizable-furniture-1.jpg",
      title: "Office & House Furniture",
    },
  ];
  const blocks = [
    {
      icon: Sofa,
      title: "Modular Furniture Solutions",
      description:
        "Smart, space-saving designs that bring flexibility and function to modern living and workspaces — built for everyday convenience.",
    },
    {
      icon: PencilRuler,
      title: "Fully Customizable Designs",
      description:
        "From size to finish, every piece is tailored to fit your style and space perfectly, blending aesthetics with practicality.",
    },
    {
      icon: Hammer,
      title: "Premium Craftsmanship & Materials",
      description:
        "We use high-quality materials and skilled craftsmanship to ensure every furniture piece is durable, elegant, and built to last.",
    },
  ];

  return (
    <main>
      <Header />
      <Hero />
      <div
        className="bg-cover bg-center bg-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/images/bg/bg-architect-1.png')",
        }}
      >
        <div className="mt-48 md:mt-5">
          <TrustedBy />
        </div>
        <FeatureSection />
      </div>
      <div className="bg-[#dff1e0] py-20">
        <WhatWeDoSection />
      </div>
      <div className="border-b-2 bg-gray-50">
        <div className="max-w-7xl mx-auto py-20">
          <h3 className="text-4xl text-center pb-12">
            We make it <span className="font-bold">for everyone</span>
          </h3>
          <OrbitLayout />
        </div>
      </div>
      <div className="bg-gray-900 py-20">
        <ProjectsSection />
      </div>
      <div className="bg-[#dff1e0]/50 py-20">
        <ThreeColumnImages heading="Our Core Services" columns={data} />
      </div>
      <div className="py-20">
        <IconContentSplit
          blocks={blocks}
          imageSrc="/images/bench-furniture-collage.png"
        />
      </div>
      <div className="py-28 border-t-2 border-gray-100">
        <BlogSection />
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
