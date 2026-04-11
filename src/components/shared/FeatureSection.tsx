"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FeatureSection() {
  return (
    <section className="pt-4 pb-12 bg-white selection:bg-primary/10">
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 text-center pb-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-3xl md:text-4xl text-gray-950 tracking-tighter font-bold lowercase">
            why choose manthan architects
          </h2>
        </motion.div>

        {/* Content Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full text-left space-y-6 text-gray-500 leading-relaxed font-light text-xl"
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
      <div className="section-shell pb-20 bg-[#f8f9fa]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black mb-10 text-center lowercase tracking-tight"
          >
            presence
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "years of experience", value: 15, suffix: "+" },
              { label: "projects globally", value: 1000, suffix: "+" },
              { label: "team members", value: 150, suffix: "+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white py-10 px-8 flex flex-col items-center justify-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] rounded-2xl group border border-transparent hover:border-gray-100 transition-all"
              >
                <div className="mb-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="w-10 h-[1px] bg-gray-200 mb-4 group-hover:w-16 transition-all duration-300" />
                <p className="text-sm text-gray-500 font-medium tracking-wide lowercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-black tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
