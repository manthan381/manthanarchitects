"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Ruler,
  PencilRuler,
  Building2,
  Hammer,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Consultation",
    icon: ClipboardList,
    description: "Understanding your goals, vision, and site requirements.",
  },
  {
    title: "Site Visit",
    icon: Ruler,
    description: "Detailed analysis of the location to plan accordingly.",
  },
  {
    title: "Design",
    icon: PencilRuler,
    description: "Creating architectural concepts tailored to your needs.",
  },
  {
    title: "Planning",
    icon: Building2,
    description: "Finalizing drawings, documentation, and approvals.",
  },
  {
    title: "Execution",
    icon: Hammer,
    description: "Construction with quality materials and expert supervision.",
  },
  {
    title: "Handover",
    icon: ThumbsUp,
    description: "Final delivery with assurance of satisfaction and quality.",
  },
];

export default function SixStepProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our 6 Step Process
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From first sketch to final handover, we follow a structured approach
          that ensures quality, clarity, and client satisfaction.
        </motion.p>

        {/* Timeline */}
        <div className="overflow-x-auto">
          <div className="flex items-center gap-8 min-w-[900px] justify-center">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center max-w-[150px]"
                >
                  <div className="bg-white rounded-full p-4 shadow-lg mb-3">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <ArrowRight className="text-gray-400 shrink-0" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
