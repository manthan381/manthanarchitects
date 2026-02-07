"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StatsSectionReusable } from "./StatsSectionReusable";
import { Building2, Trophy, Users2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ExpertiseHero() {
  const stats = [
    {
      icon: Trophy,
      label: "Years of Experience",
      value: "12+",
    },
    {
      icon: Building2,
      label: "Projects Completed",
      value: "250+",
    },
    {
      icon: Users2,
      label: "Happy Clients",
      value: "190+",
    },
  ];
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Heading + Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <StatsSectionReusable
            title="Crafting your ideal workspace from design to delivery"
            subtitle="Over the years, we've helped countless clients bring their visions to life."
            stats={stats}
          />
          <Link href="/contact-us">
            <Button variant="default" className="cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative w-full h-[500px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/expertise/map-india.webp" // Replace with your image path
            alt="About Bench Architects"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
