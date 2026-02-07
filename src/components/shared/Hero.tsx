
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/images/hero-bg-spacemanthan-7.jpg",
  "/images/M4.png", 
  "/images/M1.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds mein change hoga
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[650px] w-full overflow-hidden">
      {/* Image Slider Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        />
      </AnimatePresence>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-1" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          {/* Left Side Content */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white space-y-6"
          >
            <div className="bg-linear-to-r from-gray-900 to-[#101828b3] py-10 px-5 md:px-8 lg:px-20 max-w-3xl backdrop-blur-sm">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                One Vision. One Team. One Roof.
              </h1>
              <p className="text-md md:text-lg text-gray-300 max-w-xl font-semibold mt-4">
                One-Stop Solution for Architecture, Interiors, Construction &
                Custom Furnitures — All seamlessly managed and delivered hassle
                free with Precision and Excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              currentIndex === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}