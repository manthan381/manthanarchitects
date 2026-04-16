import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "architects, interior designers & customized furniture services in gurugram",
  description:
    "architects, interior designers & Furniture Services in Gurgram? Manthan Architects offers architecture, interior design, turnkey construction & custom furniture solutions for modern spaces.",
  keywords:
    "architecture firms in gurgaon, architecture companies in gurgaon, architecture firms in gurgaon",
  alternates: {
    canonical: "/services",
  },
};

const serviceCards = [
  {
    title: "01. design",
    description:
      "architectural design services address planning, structure, and spatial development across residential and commercial projects. in addition, detailed backend support is extended to global architects and developers, including blueprint, technical coordination, and execution ready documentation, enabling efficient project delivery across geographies.",
    options: [
      "architectural planning",
      "spatial development",
      "blueprint & technical drafting",
      "global backend coordination",
    ],
    images: [
      "images/projects/sonar-hospital-1.jpg",
      "/images/home/hero-image-5.webp",
      "/images/projects/highways-toll-plaza-2.jpg",
    ],
    href: "/projects",
    cta: "explore design projects",
  },
  {
    title: "02. build",
    description:
      "we provide end-to-end construction solutions across residential, commercial, and large-scale developments worldwide. from concept to completion, every stage is executed in-house to ensure seamless coordination, uncompromising quality, and strict compliance with global standards and regulations.\n\nour project management consultancy streamlines collaboration between consultants, contractors, and on-site teams, ensuring timelines stay on track and execution remains seamless. with a structured approach, we drive progress efficiently and deliver projects of every scale with precision and reliability.",
    options: [
      "end-to-end construction",
      "project management",
      "quality compliance",
      "on-site execution",
    ],
    images: [
      "/images/home/hero-image-1.webp",
      "/images/projects/cibt-office.jpg",
      "/images/projects/real-estate-office.webp",
    ],
    href: "/projects?category=Office+%26+Residence&service=build",
    cta: "view build & construction",
  },
  {
    title: "03. furniture",
    description:
      "our integrated furniture division combines in-house manufacturing with collaborations from leading designers worldwide. this approach guarantees consistency in quality and detailing while infusing every space with a distinctive global design perspective.",
    options: [
      "in-house manufacturing",
      "designer collaborations",
      "material curation",
      "custom fabrication",
    ],
    images: [
      "/images/services/customizable-furniture-2.webp",
      "/images/services/customizable-furniture-8.webp",
      "/images/services/customizable-furniture-10.webp",
    ],
    href: "/services/furniture",
    cta: "open furniture page",
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="relative isolate overflow-hidden bg-gray-100 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#eb5e22_0%,transparent_50%),radial-gradient(circle_at_80%_0%,#4e6b5f_0%,transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] w-full px-6 sm:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lowercase text-[#1c2a22]">
              services
            </h1>
            <div className="h-1.5 w-20 bg-[#eb5e22] mt-4 rounded-full" />
            <p className="mt-6 md:mt-10 text-gray-600 text-base md:text-lg leading-relaxed lowercase font-medium">
              at manthan architects, whether for residential or commercial projects, our integrated approach ensures every stage—from initial planning to final detailing—is handled in-house. this guarantees consistency, seamless coordination, and a smooth end-to-end experience, delivering spaces that are both functional and inspiring.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl lg:scale-105 transition-transform duration-700 mt-10 lg:mt-0">
            <Image
              src="/images/services/service-image-2.webp"
              alt="Services Overview"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-24 space-y-10 md:space-y-12">
          {serviceCards.map((service) => (
            <article key={service.title} className="flex flex-col gap-8 md:gap-10 border-b border-gray-100 pb-10 md:pb-12 last:border-b-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 xl:gap-64">
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1c2a22] lowercase tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 md:mt-6 text-gray-700 leading-relaxed text-base lg:text-lg lowercase whitespace-pre-wrap max-w-2xl">
                    {service.description}
                  </p>

                  <div className="mt-8 lg:mt-12">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-3 rounded-full bg-[#1c2a22] px-7 py-3 text-white hover:bg-[#eb5e22] transition-colors duration-300 lowercase text-sm font-medium"
                    >
                      {service.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-start">
                  <div className="space-y-6">
                    <p className="text-sm tracking-[0.25em] uppercase text-[#eb5e22] font-semibold mb-4">capabilities</p>
                    <ul className="space-y-4 w-full">
                      {service.options.map(option => (
                        <li key={option} className="flex items-center justify-between text-base sm:text-lg md:text-xl font-light text-gray-800 lowercase border-b border-gray-200 pb-4 hover:text-[#eb5e22] transition-colors cursor-default">
                          {option}
                          <ArrowRight className="w-4 h-4 text-gray-300" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {service.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="relative aspect-[4/3] md:aspect-[3/2] w-full rounded-2xl overflow-hidden group shadow-md border border-gray-100">
                    <Image
                      src={img}
                      alt={`${service.title} showcase ${imgIdx + 1}`}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
