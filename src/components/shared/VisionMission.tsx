"use client";

import { motion } from "framer-motion";

export function VisionMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl text-gray-900 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Vision <span className="font-bold">& Mission</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary mb-2">Our Vision</h2>
            <h3 className="text-lg font-bold text-primary mb-2">
              To Be the Most Trusted Name in Integrated Space Solutions
            </h3>
            <p className="text-gray-600">
              Our vision is to redefine how spaces are imagined, built, and
              experienced. We aspire to become a leading force in delivering
              innovative, sustainable, and fully integrated design-to-execution
              solutions across all sectors — residential, commercial, and
              institutional. By harnessing the power of technology, creativity,
              and craftsmanship, we aim to create spaces that not only meet
              functional needs but also inspire a better way of living and
              working.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md p-6 border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary mb-2">
              Our Mission
            </h2>
            <h3 className="text-lg font-bold text-primary mb-2">
              Creating Thoughtfully Designed Spaces That Inspire and Endure
            </h3>
            <p className="text-gray-600">
              Our mission is to deliver smart, sustainable, and beautifully
              crafted spaces that enhance the way people live, work, and
              connect. We aim to simplify the entire design and build journey by
              offering end-to-end, hassle-free solutions — combining innovation,
              quality craftsmanship, and cutting-edge technology. With a
              commitment to excellence and integrity, we strive to exceed
              expectations and deliver lasting value in every project we
              undertake.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
