"use client";

import { motion, useInView, animate } from "framer-motion";
import { Building2, Trophy, Users2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type StatItem = {
  icon: any;
  label: string;
  value: number;
  suffix: string;
};

const stats: StatItem[] = [
  { icon: Trophy, label: "years of experience", value: 15, suffix: "+" },
  { icon: Building2, label: "projects delivered globally", value: 1000, suffix: "+" },
  { icon: Users2, label: "design professionals", value: 150, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
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
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="pt-0 pb-10 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-10 text-center lowercase tracking-tight"
        >
          our achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-4 text-gray-900 group-hover:text-[#eb5e22] transition-colors duration-300">
                <stat.icon size={48} strokeWidth={1} />
              </div>
              <div className="mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm tracking-[0.1em] text-gray-500 uppercase font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
