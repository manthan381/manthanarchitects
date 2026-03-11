"use client";

import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="py-10 bg-white selection:bg-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-4xl text-gray-950 tracking-tighter">
            Why Choose <span className="font-bold text-gray-900">Manthan Architects</span>
          </h2>
        </motion.div>

        {/* Content Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto text-center space-y-6 text-gray-500 leading-relaxed font-light"
        >
          <p>
            Manthan Architects specializes in delivering comprehensive, integrated
            solutions for exceptional space creation - ranging from Architecture and
            Interior Design to Construction and Modular Custom Furniture - all
            consolidated under a single entity. As an ISO 9001:2015 certified
            organization, we adhere to the highest standards of quality, safety,
            and precision across all projects. Employing advanced AI technology,
            we ensure accelerated, intelligent, and precise project delivery.
          </p>
          <p>
            Backed by a team of experienced professionals and a demonstrated
            history of on-time execution of prestigious projects, we transform
            your vision into reality with minimal complexity and maximum
            operational efficiency. By consolidating vendor management, we provide
            a cost-effective and streamlined experience, positioning Manthan Architects
            as your reliable partner for end-to-end space solutions.
          </p>
        </motion.div>
      </div>

      {/* Presence Section */}
      <div className="bg-[#f8f9fa] mt-10 py-16 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-800 mb-2 text-center">
            Presence
          </h2>
          <div className="w-16 h-[1px] bg-gray-400 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white py-8 px-6 flex flex-col items-center justify-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">15+</h3>
              <div className="w-12 h-[1px] bg-gray-200 mb-6" />
              <p className="text-sm text-gray-500 font-light tracking-wide">years of experience</p>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white py-8 px-6 flex flex-col items-center justify-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">1,000+</h3>
              <div className="w-12 h-[1px] bg-gray-200 mb-6" />
              <p className="text-sm text-gray-500 font-light tracking-wide">projects globally</p>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white py-8 px-6 flex flex-col items-center justify-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">150+</h3>
              <div className="w-12 h-[1px] bg-gray-200 mb-6" />
              <p className="text-sm text-gray-500 font-light tracking-wide">team members</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}