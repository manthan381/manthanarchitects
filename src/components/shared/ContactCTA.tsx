"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="bg-[#273027] text-white text-center py-20 px-6 sm:px-10 lg:px-24">
      <motion.div
        className="max-w-[1600px] mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Dream Space?
        </h2>
        <p className="mb-6 text-lg">
          Get in touch with our team to schedule a free consultation and start
          your journey.
        </p>
        <Link 
          href="/book-consultation" 
          className={buttonVariants({ size: "lg", variant: "manthan" })}
        >
          Book a Consultation
        </Link>
      </motion.div>
    </section>
  );
}
