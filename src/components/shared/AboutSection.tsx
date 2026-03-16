"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const heroInitial = shouldReduceMotion ? false : { opacity: 0 };
  const textInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 };

  return (
    <>
      <section className="relative w-full h-[calc(60vh-50px)] min-h-[500px] overflow-hidden bg-white">
        <motion.div
          className="absolute inset-0"
          initial={heroInitial}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/about-us-1.jpeg"
            alt="About Manthan Architects"
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
            <h1 className="text-2xl sm:text-4xl font-medium text-gray-950 mb-12 text-center">
              About Manthan Architects: Crafting Timeless Architecture Design
            </h1>

            <div className="space-y-6 text-left text-gray-900 text-lg leading-relaxed">
              <p>
                Established in 2009 by <strong>35-year-old</strong> visionary entrepreneur Prince Aryan, Manthan Design aims to become one of India's leading architectural firms, known for creating innovative, sustainable, and timeless spaces.
              </p>

              <p>
                Having successfully completed over <strong>200 projects</strong> across India, the company envisions shaping the future of architecture by blending creativity, functionality, and modern design to enhance the way people live, work, and experience their surroundings.
              </p>

              <p>
                As a multidisciplinary architectural firm, we offer integrated solutions across residential, commercial, institutional, hospitality, and interior design. By blending global design perspectives with local sensibilities, we deliver spaces that are timeless, functional, and meaningful.
              </p>

              <p>
                What sets us apart is our ability to provide a complete one-stop solution for architecture, design, and project execution-from concept development and planning to interior detailing and project coordination-ensuring quality, innovation, and sustainability in every project.
              </p>

              <p>
                Our design philosophy focuses on simplicity, elegance, and purposeful planning. We create clean, refined spaces that respond to the strengths and challenges of each site, while integrating sustainable strategies and modern technologies to deliver functional, responsible, and future-ready architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
