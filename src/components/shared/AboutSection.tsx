"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const heroInitial = shouldReduceMotion ? false : { opacity: 0 };
  const textInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 };

  return (
    <>
      <section className="relative w-full aspect-[1292/726] md:max-h-[85vh] overflow-hidden bg-white">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1.0 }}
          transition={{ 
            opacity: { duration: 0.3, ease: "easeInOut" },
            scale: { duration: 1.0, ease: "easeOut" }
          }}
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

      <section className="w-full bg-white pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={textInitial}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-black mb-8 text-center">
              About Manthan Architects: Crafting Timeless Architecture Design
            </h1>

            <div className="space-y-6 text-left text-gray-900 text-lg leading-relaxed">
              <p>
                Founded in 2009 by visionary entrepreneur <strong>Prince Aryan</strong>, Manthan Design is one of India's leading full-service architectural and design firms. With over <strong>15 years of expertise</strong> and <strong>200+ completed projects</strong>, we specialize in creating innovative, sustainable, and timeless spaces that enhance the way people live, work, and experience their surroundings.
              </p>

              <p>
                Our multidisciplinary approach spans residential, commercial, institutional, hospitality, and interiors—offering complete solutions from concept development to turnkey execution. Supported by our in-house facility for bespoke furniture, custom millwork, wardrobes, and curated décor, we deliver seamless, high-quality results tailored to each client's vision.
              </p>

              <p>
                Guided by a philosophy of simplicity, elegance, and purposeful planning, we blend global design perspectives with local craftsmanship. Every project reflects refined aesthetics, sustainability, and innovation—ensuring architecture that is functional, future-ready, and enduring.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
