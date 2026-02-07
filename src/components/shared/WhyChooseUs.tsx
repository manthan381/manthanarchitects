"use client";

import { CheckCircle, ShieldCheck, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: CheckCircle,
    title: "Timely Delivery",
    desc: "Strict adherence to timelines and client expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Superior materials and expert craftsmanship.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Designs",
    desc: "Functional and beautiful solutions tailored to you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl text-gray-900 mb-5">
          Why <span className="font-bold">Choose Us</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          A few reasons why clients trust and recommend us for their
          architectural needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-sm border text-left group hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <reason.icon size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-lg text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
