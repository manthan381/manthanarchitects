
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Office & Commercial Spaces",
    description:
      "We redefine work environments with intelligent spatial design and precision-engineered structures to enhance productivity and reinforce brand identity.",
    image: "/images/services/w1.png",
  },
  {
    id: "02",
    title: "Residential Projects",
    description:
      "We design and construct customized homes that seamlessly align with your lifestyle, creating beautiful, functional spaces.",
    image: "/images/services/w2.png",
  },
  {
    id: "03",
    title: "Customizable Furnitures",
    description:
      "We design and manufacture modular, space-efficient furniture precisely tailored to your style, requirements, and space dimensions.",
    image: "/images/services/w3.png",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="pt-10 pb-8 bg-[#dff1e0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-2 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-bold text-gray-950 tracking-tighter"
            >
              What We Do
            </motion.h2>
          </div>
        </div>

        {/* 100% Original Content - Text color darkened for better contrast on green */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-900 text-lg md:text-xl text-left border-l-4 border-primary pl-6 mb-10 leading-relaxed max-w-6xl"
        >
          We provide end-to-end solutions in Architecture, Interior Designing,
          Construction, and Modular & Custom Furniture — all under one roof for
          a truly hassle-free experience. Our skilled team is dedicated to
          delivering high-quality results with precision and creativity, even
          within the most challenging timelines. Whether it’s a home, office, or
          commercial space, we bring your vision to life with efficiency and
          excellence.
        </motion.p>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full mb-8 overflow-hidden rounded-3xl shadow-lg border-4 border-white/50">
                {/* Minimalist Index Tag */}
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-950 shadow-sm">
                  {item.id}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Text Area */}
              <div className="text-left px-2">
                <h3 className="text-2xl font-bold text-gray-950 mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-800 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}