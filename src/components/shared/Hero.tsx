
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/home/hero-image-1.webp",
  "/images/home/hero-image-2.webp",
  "/images/home/hero-image-3.webp",
  "/images/home/hero-image-4.webp",
  "/images/home/hero-image-5.webp",
  "/images/home/hero-image-7.webp",
  "/images/home/hero-image-8.webp",
  "/images/home/hero-image-9.webp",
  "/images/home/hero-image-10.webp",

];

const imageMeta = [
  {
    title: "Urban Company Office",
    location: "Plot-183 Udyog Vihar, Gurugram",
  },
  {
    title: "Sanar Hospital",
    location: "Gurugram, Haryana",
  },
  {
    title: "Punjabi Haveli",
    location: "Katra, Jammu",
  },
  {
    title: "Bellvino Night Club",
    location: "Gurugram, Haryana",
  },
  {
    title: "Radison Blu Hotel",
    location: "Sohna Road, Gurugram",
  },
  {
    title: "Punjabi Haveli",
    location: "Katra, Jammu",
  },
  {
    title: "BSTS Tower",
    location: "Udyog Vihar, Gurugram",
  },
  {
    title: "Quaff Brewing",
    location: "DLF Cyber City, Gurugram",
  },
  {
    title: "Feb Hotels",
    location: "Udyog Vihar, Gurugram",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoPlay();
  };
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startAutoPlay();
  };

  const variants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1.0 },
    exit: { opacity: 0, scale: 1.0 },
  };

  const currentMeta = imageMeta[currentIndex];

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen min-h-[420px] sm:min-h-[500px] overflow-hidden">
      {/* Sliding Images */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
            scale: { duration: 1.0, ease: "easeOut" },
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4.5s] ease-linear"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="scale-90 sm:scale-100" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="scale-90 sm:scale-100" />
      </button>

      {currentMeta ? (
        <div
          className="absolute bottom-16 sm:bottom-16 left-3 right-3 sm:left-auto sm:right-6 z-20 max-w-none sm:max-w-[360px] rounded-3xl px-4 py-3 sm:px-6 sm:py-5 text-white shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] text-center sm:text-right"
          style={{
            background:
              "radial-gradient(140% 140% at 15% 20%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.12) 100%)",
          }}
        >
          <p className="text-sm sm:text-lg font-semibold uppercase tracking-[0.12em] sm:tracking-[0.2em] leading-snug text-balance drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            {currentMeta.title}
          </p>
          <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            {currentMeta.location}
          </p>
        </div>
      ) : null}

      {/* Slider Indicators (Dots) */}
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              startAutoPlay();
            }}
            className={`h-2 w-8 rounded-full transition-all ${currentIndex === index ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}