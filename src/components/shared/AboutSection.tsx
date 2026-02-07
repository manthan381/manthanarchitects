"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Heading + Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl text-gray-950 mb-6 font-bold">
            Personalized Spaces with Purpose
          </h2>
          <p className="text-gray-900 text-lg leading-relaxed text-wrap text-justify">
            Manthanarchitects is a comprehensive design and build partner, committed
            to realizing your vision through a deep understanding of the unique
            essence of each space. As an ISO 9001:2015 certified organization,
            we offer end-to-end solutions encompassing architecture, interior
            design, construction, and custom furniture manufacturing—all
            seamlessly integrated under one roof. Our team transcends basic plan
            execution, appreciating that every project reflects your aspirations
            and objectives. Utilizing advanced AI-driven tools, we ensure
            projects are delivered on schedule and within budget, while
            maintaining exceptional focus on the nuanced design elements that
            distinguish each space. Whether executing residential renovations,
            office designs, or commercial developments, we uphold the highest
            standards of professionalism and care. Selecting Space Manthan means
            engaging a partner dedicated to creating authentic, purposeful
            environments that align with your personality and operational needs,
            realized with precision and passion.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/bg/modern-office-space-1.png" // Replace with your image path
            alt="About Bench Architects"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
