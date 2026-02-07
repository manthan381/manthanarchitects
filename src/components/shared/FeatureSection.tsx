

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building, Hammer, Ruler } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Building className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    image: "/images/projects/F1.png",
    title: `Office Design<br />& Build`,
    description:
      "We design intelligent workspaces with end-to-end solutions, from planning to execution, boosting productivity and reflecting your brand identity.",
  },
  {
    icon: <Hammer className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    image: "/images/projects/F3.png",
    title: "Residential & Commercial Interiors",
    description:
      "Our Interior design solutions blend style, comfort, and purpose for sophisticated residences and commercial spaces, executed with meticulous attention to detail.",
  },
  {
    icon: <Ruler className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    image: "/images/services/F2.png",
    title: "Modular Office & Residential furniture",
    description:
      "Our Modular furniture offers versatile, sophisticated, precision-engineered solutions for flexible, stylish, and functional environments.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white selection:bg-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-gray-950 tracking-tighter">
            Why Choose <span className="font-bold text-gray-900">Manthanarchitects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </motion.div>

        {/* Original Content Paragraph - Fixed "M" Capitalization */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-6xl mx-auto mb-20 leading-relaxed text-center"
        >
          <span className="font-semibold text-gray-900">Manthanarchitects</span> specializes in delivering comprehensive, integrated
          solutions for exceptional space creation—ranging from Architecture and
          Interior Design to Construction and Modular Custom Furniture—all
          consolidated under a single entity. As an <span className="text-gray-900 font-medium">ISO 9001:2015 certified</span>
          {" "}organization, we adhere to the highest standards of quality, safety,
          and precision across all projects. Employing advanced AI technology,
          we ensure accelerated, intelligent, and precise project delivery.
          Backed by a team of experienced professionals and a demonstrated
          history of on-time execution of prestigious projects, we transform
          your vision into reality with minimal complexity and maximum
          operational efficiency. By consolidating vendor management, we provide
          a cost-effective and streamlined experience, positioning <span className="font-semibold text-gray-900">Manthanarchitects</span>
          {" "}as your reliable partner for end-to-end space solutions.
        </motion.p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              {/* Image Circle with Subtle Hover */}
              <div className="relative mb-8 shadow-sm">
                <div className="relative h-48 w-48 rounded-full p-1 border-2 border-gray-50 transition-all duration-500 group-hover:border-primary/30">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={feature.image}
                      alt={feature.title.replace("<br />", " ")}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Floating Icon Badge */}
                <div className="absolute -bottom-2 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-primary group-hover:-translate-y-2 transition-transform duration-300 left-1/2 -translate-x-1/2">
                  {feature.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3
                className="text-xl font-bold text-gray-900 mb-4 leading-tight min-h-[56px] flex items-center justify-center transition-colors group-hover:text-primary"
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></h3>
              
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}