"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="pt-12 pb-10 bg-[#111111] text-white text-center px-6 sm:px-10 lg:px-24">
      <motion.div
        className="max-w-[1600px] mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 lowercase tracking-tight">
          ready to build your dream space?
        </h2>
        <p className="mb-6 text-base text-gray-400 font-light lowercase">
          get in touch with our team to schedule a free consultation and start your journey.
        </p>
        <Link
          href="/book-consultation"
          className={buttonVariants({ size: "lg", variant: "manthan" })}
        >
          book a consultation
        </Link>
      </motion.div>
    </section>
  );
}
