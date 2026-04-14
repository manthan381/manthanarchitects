"use client";

import { motion } from "framer-motion";
import { Key, Layers, Palette, PenTool } from "lucide-react";

const services = [
  {
    title: "architectural",
    icon: PenTool,
    description: "we go beyond traditional boundaries, blending creativity with precision to deliver client-focused, sustainable architectural solutions. from concept to construction, our services ensure designs that inspire, comply, and endure.",
    bullets: [
      "conceptual & schematic design",
      "design development",
      "construction documentation",
      "permit application & regulatory compliance",
      "sustainable building design (leed, passive strategies)"
    ],
    conclusion: "we create architecture that sets benchmarks in design, functionality, and longevity."
  },
  {
    title: "interior",
    icon: Palette,
    description: "our interior design solutions transform spaces into functional, inspiring environments tailored to your lifestyle and vision. we blend creativity with precision, ensuring every detail enhances comfort, aesthetics, and sustainability.",
    bullets: [
      "space planning & conceptual design",
      "interior styling & finishes selection",
      "furniture, lighting & material coordination",
      "sustainable and energy-efficient interiors",
      "regulatory compliance & documentation"
    ],
    conclusion: "we create interiors that are timeless, practical, and uniquely yours."
  },
  {
    title: "exterior",
    icon: Layers,
    description: "we specialise in creating striking exteriors and facades that balance aesthetics, functionality, and sustainability. our designs enhance building identity, respond to site context, and integrate modern materials with innovative detailing.",
    bullets: [
      "architectural façade concepts & visualization",
      "material selection & detailing",
      "climate-responsive and energy-efficient façade systems",
      "structural integration & regulatory compliance",
      "contemporary, timeless, and brand-aligned exterior solutions"
    ],
    conclusion: "we craft exteriors that not only protect and perform but also inspire and define the character of your space."
  },
  {
    title: "design build",
    icon: Key,
    description: "we provide complete turnkey solutions, managing every stage of the project from concept to completion. with a client-first approach, we deliver seamless coordination, cost efficiency, and timely execution—ensuring your vision becomes reality without the stress of managing multiple contractors.",
    bullets: [
      "end-to-end project planning & design",
      "procurement & vendor management",
      "construction & site supervision",
      "regulatory approvals & compliance",
      "final delivery, ready for immediate use"
    ],
    conclusion: "we handle everything, so you step into a fully realized space that's functional, sustainable, and inspiring."
  }
];

export function AboutServicesSection() {
  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            our <span className="font-bold text-[#eb5e22] text-black">services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            delivering end-to-end design and build solutions with precision, creativity, and a commitment to excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Header — light gray, centered */}
              <div className="bg-gray-200 px-8 py-6 flex flex-col items-center justify-center gap-2 border-b border-gray-300">
                <span className="text-gray-800"><service.icon size={36} strokeWidth={2.5} /></span>
                <h3 className="text-2xl md:text-3xl font-normal hover:font-bold transition-all duration-300 cursor-default text-gray-800 tracking-tight text-center">{service.title}</h3>
              </div>

              <div className="flex flex-col flex-1 p-8 lg:p-10">
                <p className="text-gray-700 leading-relaxed mb-6 text-[1.05rem]">
                  {service.description}
                </p>

                <div className="flex-1">
                  <p className="font-black text-gray-950 mb-4 text-base md:text-[1.05rem]">our services include:</p>
                  <ul className="space-y-4 mb-6">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-2 h-2 rounded-full bg-gray-900 flex-shrink-0 relative top-[0.6rem]" />
                        <span className="text-gray-700 leading-relaxed text-base md:text-[1.05rem]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.conclusion && (
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <p className="text-gray-800 font-medium italic text-[1.05rem]">
                      "{service.conclusion}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
