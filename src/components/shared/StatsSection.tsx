"use client";

import { motion } from "framer-motion";
import { Building2, Trophy, Users2 } from "lucide-react";

type StatItem = {
  icon: any;
  label: string;
  value: string;
  description?: string;
};

const stats: StatItem[] = [
  { icon: Trophy, label: "years of experience", value: "15+" },
  { icon: Building2, label: "projects delivered globally", value: "200+" },
  { icon: Users2, label: "professionals", value: "100+" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-12">
          our <span className="font-bold">achievements</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 items-stretch">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white px-6 py-10 rounded-xl shadow border text-center flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <stat.icon
                className="text-primary mx-auto mb-2 bg-gray-200 p-2"
                size={64}
              />
              <h3 className="text-4xl font-bold text-gray-900 py-2">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-gray-700">{stat.label}</p>
              {stat.description && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed text-justify">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
