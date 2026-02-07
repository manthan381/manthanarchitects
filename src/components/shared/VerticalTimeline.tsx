"use client";

import {
  ClipboardList,
  Ruler,
  PencilRuler,
  Building2,
  Hammer,
  ThumbsUp,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    description:
      "Understanding your goals and project scope. Understanding your goals and project scope. Understanding your goals and project scope.",
    icon: ClipboardList,
  },
  {
    title: "Site Visit",
    description: "Inspecting location to inform design strategy.",
    icon: Ruler,
  },
  {
    title: "Design",
    description: "Creating architectural concepts tailored to you.",
    icon: PencilRuler,
  },
  {
    title: "Planning",
    description: "Preparing final drawings and approvals.",
    icon: Building2,
  },
  {
    title: "Execution",
    description: "Construction with continuous quality control.",
    icon: Hammer,
  },
  {
    title: "Handover",
    description: "Delivering your completed dream space.",
    icon: ThumbsUp,
  },
];

export default function VerticalTimelineCompact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Our 6 Step Process
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm">
          A streamlined journey from consultation to completion.
        </p>

        <div className="relative">
          {/* Static Vertical Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-primary/30 rounded-full" />

          {/* Steps */}
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 !== 0;

              return (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                >
                  <div
                    className={`hidden md:block w-1/2 ${
                      isRight ? "order-2" : ""
                    }`}
                  />

                  {/* Content */}
                  <motion.div
                    className="relative z-10 w-full md:w-1/2 group px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 transition group-hover:shadow-md text-sm">
                      <h3 className="text-base font-semibold text-gray-800 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white border-2 border-primary shadow-md rounded-full p-2 z-20">
                    <Icon size={20} className="text-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
