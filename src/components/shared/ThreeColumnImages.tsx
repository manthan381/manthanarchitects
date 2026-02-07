

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ColumnData = {
  imageSrc: string;
  title: string;
};

type ThreeColumnImagesProps = {
  heading: string;
  columns: ColumnData[];
};

export default function ThreeColumnImages({
  heading,
  columns,
}: ThreeColumnImagesProps) {
  return (
    <section className="py-24 text-center overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-28 text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center gap-6 ${
                index === 1 ? "md:mt-16" : "mt-0"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Circle Wrapper */}
              <div className="group relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:shadow-primary/20 transition-all duration-500">
                  <Image
                    src={col.imageSrc}
                    alt={col.title}
                    width={288}
                    height={288}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title - Clean & Bold without the line below */}
              <h3 
                className="text-2xl font-bold text-gray-900 mt-4 leading-tight min-h-[3rem] flex items-center"
                dangerouslySetInnerHTML={{ __html: col.title }}
              />
              
              {/* Line removed from here */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}