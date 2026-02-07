"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridSectionProps = {
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  columns?: number; // default 3
  className?: string;
};

export function FeatureGridSection({
  title,
  subtitle,
  items,
  columns = 3,
  className = "",
}: FeatureGridSectionProps) {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && (
          <p className="text-gray-600 max-w-xl mx-auto mb-12">{subtitle}</p>
        )}
        <div
          className={`grid gap-8 ${
            columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-sm border text-left group hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
