"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const paragraphs = [
  "At Manthan Architects, we specialize in crafting stunning architectural elevation designs that enhance the visual identity and character of every structure. As a firm recognized for delivering the best Architects Design in Gurugram, our focus is on creating facades that elevate the aesthetic appeal of a building while reflecting the personality and lifestyle of its occupants. Our experienced team of architects blends creativity with architectural precision to develop distinctive elevation concepts that stand out with elegance and sophistication.",
  "From the very beginning of the design journey, we focus on understanding our clients' vision, preferences, and functional requirements. At Manthan Architects, we believe that every project deserves a unique architectural identity. By combining thoughtful planning with innovative design ideas, we create elevation styles that are visually striking while remaining structurally balanced, reinforcing our reputation for offering the best Architects Design in Gurugram.",
  "Our approach to elevation design emphasizes careful selection of materials, textures, and architectural elements. We thoughtfully incorporate materials such as stone, glass, wood, metal, and modern cladding to create facades that are refined, durable, and visually compelling. Each detail-from proportions and patterns to the interaction of light and shadow-is designed to create a timeless and harmonious exterior.",
  "Functionality is also a key element of our elevation design philosophy. At Manthan Architects, we integrate features that enhance both aesthetics and performance. Elements such as shaded balconies, vertical fins, pergolas, and strategically placed openings help improve ventilation, maximize natural light, and enhance energy efficiency while contributing to the building's overall architectural character.",
  "By staying aligned with evolving architectural trends and modern design innovations, our team consistently develops elevation concepts that reflect contemporary lifestyles. Our commitment to quality, creativity, and client satisfaction has positioned Manthan Architects among firms known for the best Architects Design in Gurugram, where we transform building facades into striking architectural statements that leave a lasting impression.",
];

const highlightText = "best Architects Design in Gurugram";

export default function ElevationDesignPage() {
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
            src="/elevation-2.jpeg"
            alt="Elevation design"
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
              Stunning Elevation Designs: Enhancing Architectural Beauty
            </h1>

            <div className="space-y-6 text-left text-gray-900 text-lg leading-relaxed">
              {paragraphs.map((paragraph, index) => {
                // Bold this phrase only in the second paragraph.
                if (index !== 1 || !paragraph.includes(highlightText)) {
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-lg overflow-hidden">
                <Image
                  src="/elevation-3.jpeg"
                  alt="Modern elevation design view 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-lg overflow-hidden">
                <Image
                  src="/elevation-4.jpeg"
                  alt="Modern elevation design view 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/architects-design"
                className="inline-flex items-center justify-center rounded-full bg-[#273027] px-8 py-3 text-base font-medium text-white transition hover:bg-[#1f291f]"
              >
                Back to Architects Design
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
