"use client";
import BlogSection from "@/components/shared/BlogSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import FeatureSection from "@/components/shared/FeatureSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import OrbitLayout from "@/components/shared/OrbitLayout";
import ProjectsSection from "@/components/shared/ProjectsSection";
import ThreeColumnImages from "@/components/shared/ThreeColumnImages";
import TrustedBy from "@/components/shared/TrustedBy";
import WhatWeDoSection from "@/components/shared/WhatWeDoSection";

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
      title: "Modern & Customize Furniture",
    },
  ];

  return (
    <main>
      <Header />
      <Hero />
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center">
          <div className="flex flex-col items-center gap-4">
            <img src="/images/home/interior-design-1.webp" alt="interior design" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900">Architects Design</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/images/home/interior-design-2.webp" alt="elevation design" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900">Elevation Design</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/images/home/interior-design-3.webp" alt="bespoke furniture" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900">Bespoke Furniture</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/images/home/interior-design-4.webp" alt="decor" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900">Decor </span>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 px-4">
        <div className="max-w-[1000px] mx-auto text-center space-y-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 leading-tight">
            Manthan Architects – Thoughtful Architecture & Inspired Spaces
          </h1>
          <div className="space-y-6 text-gray-500 leading-relaxed font-light">
            <p>
              Manthan Architects reimagines modern architecture with creativity, precision, and purpose. As a forward-thinking architectural design firm, we transform ideas into meaningful built environments that blend aesthetics, functionality, and sustainability. From the initial concept to the final structure, our approach ensures that every detail reflects thoughtful design and strong architectural integrity.
            </p>
            <p>
              We believe that every space should tell a story and respond to the needs of the people who use it. At Manthan Architects, we specialize in designing residential, commercial, and institutional spaces that balance visual appeal with practical usability. Whether it is a contemporary architectural style or a timeless design language, our team carefully crafts spaces that inspire and perform.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/images/bg/bg-architect-1.png')",
        }}
      >
        <div className="mt-8 md:mt-2">
          <TrustedBy />
        </div>
        <FeatureSection />
      </div>
      <div className="bg-[#dff1e0] pt-2 pb-4">
        <WhatWeDoSection />
      </div>
      <div className="border-b-2 bg-gray-50">
        <div className="max-w-7xl mx-auto pt-4 pb-10">
          <h3 className="text-4xl text-center pb-8">
            We make it <span className="font-bold">for everyone</span>
          </h3>
          <OrbitLayout />
        </div>
      </div>
      <div className="bg-gray-900 py-10">
        <ProjectsSection />
      </div>
      <div className="bg-[#dff1e0]/50 py-4">
        <ThreeColumnImages heading="Our Core Services" columns={data} />
      </div>
      <div className="py-16 border-t-2 border-gray-100">
        <BlogSection />
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
