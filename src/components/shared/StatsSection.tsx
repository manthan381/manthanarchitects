"use client";

import { motion } from "framer-motion";
import { Building2, Users2, Trophy } from "lucide-react";

const stats = [
  { icon: Trophy, label: "Years of Experience", value: "12+" },
  { icon: Building2, label: "Projects Completed", value: "250+" },
  { icon: Users2, label: "Happy Clients", value: "190+" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl text-gray-900 mb-12">
          Our <span className="font-bold">Achievements</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white px-6 py-10 rounded-xl shadow border text-center"
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
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
