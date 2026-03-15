"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const paragraphs = [
  "At Manthan Architects, we take great pride in our ability to craft exquisite architectural spaces that perfectly capture every detail of your vision. Our mission is not only to ensure functionality in our designs but also to elevate the way people experience their environments. We believe that architecture should be a harmonious blend of art, structure, and practicality, which is why our approach to architectural design is both thoughtful and innovative.",
  "Each architectural concept we develop is defined by bold structural forms, carefully considered spatial planning, and distinctive design elements that enhance both aesthetics and usability. From striking facades to well-balanced proportions, every aspect of our architecture is meticulously planned to create buildings that stand out while remaining timeless. These architectural elements are thoughtfully complemented by refined material selections, natural textures, and integrated design features that enhance the overall character of the space.",
  "As one of the best architecture design firms in Gurugram, Manthan Architects focuses on creating spaces with a strong and distinctive architectural identity. This is achieved through meticulous attention to layout planning, structural harmony, facade detailing, and the thoughtful integration of materials such as stone, glass, wood, and metal. Every element is intentionally selected to add depth and dynamism while maintaining a sophisticated and balanced design language.",
  "Our architectural philosophy emphasizes a refined foundation that allows form, light, and space to become the defining features of the design. This thoughtful balance creates structures that are not only visually striking but also highly functional and adaptable to modern lifestyles. At Manthan Architects, our commitment to design extends beyond the building structure. We believe that great architecture should foster a meaningful connection between people and their surroundings. This holistic approach to architectural design incorporates elements such as landscaped courtyards, open terraces, vertical gardens, and integrated green spaces that bring nature closer to everyday living.",
  "Our indoor-outdoor architectural concepts are designed to seamlessly blend built environments with natural surroundings, creating spaces that feel open, refreshing, and harmonious. Whether it is a thoughtfully designed courtyard, a spacious terrace garden, or expansive glass openings that allow natural light to flow through interiors, every detail is carefully considered to enhance comfort, functionality, and visual appeal.",
  "At Manthan Architects, we blend structural precision with aesthetic brilliance, creating architectural spaces that reflect our dedication to design excellence and innovation. Our team of experienced architects works closely with clients throughout the design journey, transforming ideas into thoughtfully designed structures that balance creativity, functionality, and timeless architectural value.",
];

const highlightText = "best architecture design firms in Gurugram";

export default function ArchitecturePage() {
  const shouldReduceMotion = useReducedMotion();
  const heroInitial = shouldReduceMotion ? false : { opacity: 0 };
  const textInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 };

  return (
    <main>
      <Header />

      <section className="relative w-full h-[calc(60vh-50px)] min-h-[500px] overflow-hidden bg-white">
        <motion.div
          className="absolute inset-0"
          initial={heroInitial}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/architecture-1.jpeg"
            alt="Exquisite architectural design"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={textInitial}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-2xl sm:text-4xl font-medium text-gray-950 mb-12 text-center leading-tight">
              Exquisite Architectural Design: Creating Elegant &amp; Functional Spaces
            </h1>

            <div className="space-y-6 text-left text-gray-900 text-lg leading-relaxed">
              {paragraphs.map((paragraph) => {
                if (!paragraph.includes(highlightText)) {
                  return <p key={paragraph}>{paragraph}</p>;
                }

                const [before, after] = paragraph.split(highlightText);

                return (
                  <p key={paragraph}>
                    {before}
                    <strong>{highlightText}</strong>
                    {after}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
