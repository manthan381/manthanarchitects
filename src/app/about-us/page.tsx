"use client";

import AboutSection from "@/components/shared/AboutSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { MissionVisionSection } from "@/components/shared/MissionVisionSection";
import { StatsSection } from "@/components/shared/StatsSection";
import { AboutServicesSection } from "@/components/shared/AboutServicesSection";
import { TeamSection } from "@/components/shared/TeamSection";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <StatsSection />
      <MissionVisionSection />
      <AboutServicesSection />
      <TeamSection />
      <div className="bg-gray-50 py-20 mx-auto">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-black mb-6">
              Our <span className="font-bold">6 Step Process</span>
            </h1>
            <p className="text-lg text-gray-900 leading-relaxed pb-5">
              Track the progress of our development journey with this refined
              timeline component. Each milestone represents a crucial step in
              bringing our vision to life.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1.0 }}
            transition={{ 
              opacity: { duration: 0.3, ease: "easeInOut" },
              scale: { duration: 1.0, ease: "easeOut" }
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/process-steps.png"
              alt="Our 6 Steps Process"
              width={1500}
              height={800}
              className="object-cover grayscale-[100%] contrast-105"
            />
          </motion.div>
        </div>
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
