"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <>
      {/* Hero — 2 column: text left, image right */}
      <section className="bg-white pt-28 pb-10 px-6 sm:px-10 lg:px-24 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Top label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-[0.25em] text-black uppercase mb-5"
            >
              established 2009 · gurugram, india
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-black lowercase leading-tight tracking-tight mb-5"
            >
              crafting spaces <br />
              <span className="text-black">that</span> endure.
            </motion.h1>

            {/* Thin orange accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="w-16 h-[2px] bg-[#eb5e22] mb-5"
            />

            {/* Short tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-md text-black font-light text-base lowercase leading-relaxed"
            >
              india's leading full-service architecture & design firm — blending global perspective with local craftsmanship to create spaces that are functional, future-ready, and enduring.
            </motion.p>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden"
          >
            <img
              src="/images/projects/p1.png"
              alt="Manthan Architects — architectural design"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* About body text */}
      <section className="w-full bg-white pt-12 pb-16 px-6 sm:px-10 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black lowercase tracking-tight mb-6">
                about manthan architects
              </h2>
              <p className="text-gray-500 font-light text-base leading-relaxed mb-4">
                founded in 2009 by visionary entrepreneur <strong className="text-gray-800 font-semibold">prince aryan</strong>, manthan design is one of india's leading full-service architectural and design firms. with over <strong className="text-gray-800 font-semibold">15 years of expertise</strong> and <strong className="text-gray-800 font-semibold">1000+ completed projects</strong>, we specialize in creating innovative, sustainable, and timeless spaces.
              </p>
              <p className="text-gray-500 font-light text-base leading-relaxed">
                our multidisciplinary approach spans residential, commercial, institutional, hospitality, and interiors — offering complete solutions from concept development to turnkey execution.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black lowercase tracking-tight mb-6">
                our philosophy
              </h2>
              <p className="text-gray-500 font-light text-base leading-relaxed mb-4">
                guided by a philosophy of simplicity, elegance, and purposeful planning, we blend global design perspectives with local craftsmanship. every project reflects refined aesthetics, sustainability, and innovation.
              </p>
              <p className="text-gray-500 font-light text-base leading-relaxed">
                supported by our in-house facility for bespoke furniture, custom millwork, wardrobes, and curated décor, we deliver seamless, high-quality results tailored to each client's vision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

