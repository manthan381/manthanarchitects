"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type StatItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type StatsSectionProps = {
  title: string;
  subtitle?: string;
  stats: StatItem[];
  className?: string;
};

export function StatsSectionReusable({
  title,
  subtitle,
  stats,
  className = "",
}: StatsSectionProps) {
  return (
    <section className={`py-5 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && (
          <p className="text-gray-600 max-w-xl mx-auto mb-8">{subtitle}</p>
        )}

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow border text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <stat.icon className="text-primary mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
