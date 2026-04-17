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
import { getLatestPublishedPosts } from "@/lib/blog/repository";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manthan Architects — Best Architecture & Interior Design Firm in Gurugram",
  description:
    "Transform your vision into reality with Manthan Architects - award-winning architecture, interior design, and elevation solutions across Gurugram, Delhi NCR, and India.",
  keywords: "architects in gurgaon, interior designers in gurgaon, office interior design, architectural design, architectural designs for houses, architecture home design",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const latestPosts = await getLatestPublishedPosts(3);

  const data = [
    {
      imageSrc: "/images/services/ANM-45-46.webp",
      title: `architecture & design`,
      link: "/projects",
    },
    {
      imageSrc: "/images/home/hero-image-1.webp",
      title: "office design & build",
      link: "/projects?category=Office+%26+Residence&service=build",
    },
    {
      imageSrc: "/images/services/customizable-furniture-3.webp",
      title: "modern & customize furniture",
      link: "/services/furniture",
    },
  ];

  return (
    <main className="lowercase">
      <Header />
      <Hero />
      <section className="bg-white pt-8 pb-4">
        <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center">
          <Link href="/projects" className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300 group">
            <img src="/images/home/interior-design-1.webp" alt="architect" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">architects</span>
          </Link>
          <Link href="/projects" className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300 group">
            <img src="/images/home/interior.webp" alt="interior" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">interior</span>
          </Link>
          <Link href="/projects?category=Office+%26+Residence&service=build" className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300 group">
            <img src="/images/home/design-build.webp" alt="design & build" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">design & build</span>
          </Link>
          <Link href="/services/furniture" className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300 group">
            <img src="/images/home/interior-design-3.webp" alt="furniture" className="w-[50px] h-[50px] object-contain" />
            <span className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">furniture</span>
          </Link>
        </div>
      </section>

      <section className="bg-white pt-4 pb-8">
        <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-left">
            manthan architects – thoughtful architecture & inspired spaces
          </h1>
          <div className="space-y-6 text-gray-500 leading-relaxed font-light text-left">
            <p>
              manthan architects reimagines modern architecture with creativity, precision, and purpose. as a forward-thinking architectural design firm, we transform ideas into meaningful built environments that blend aesthetics, functionality, and sustainability. from the initial concept to the final structure, our approach ensures that every detail reflects thoughtful design and strong architectural integrity.
            </p>
            <p>
              we believe that every space should tell a story and respond to the needs of the people who use it. at manthan architects, we specialize in designing residential, commercial, and institutional spaces that balance visual appeal with practical usability. whether it is a contemporary architectural style or a timeless design language, our team carefully crafts spaces that inspire and perform.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/images/bg/bg-architect-1.png')",
        }}
      >
        <TrustedBy />
        <FeatureSection />
      </section>
      <WhatWeDoSection />
      <section className="border-b-2 bg-gray-50 pt-4 pb-12">
        <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24">
          <h3 className="text-4xl text-center font-bold">
            we make it <span>for everyone</span>
          </h3>
          <OrbitLayout />
        </div>
      </section>
      <section className="bg-[#111111]">
        <ProjectsSection />
      </section>
      <section className="bg-white">
        <ThreeColumnImages heading="our core services" columns={data} />
      </section>
      <section className="border-t-2 border-gray-100">
        <BlogSection posts={latestPosts} />
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
