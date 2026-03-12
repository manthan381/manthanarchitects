"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const clientLogos = [
  "/images/brands/Logo-1.png",
  "/images/brands/Logo-2.png",
  "/images/brands/Logo-3.png",
  "/images/brands/Logo-4.png",
  "/images/brands/Logo-5.png",
  "/images/brands/Logo-6.png",
  "/images/brands/Logo-7.png",
  "/images/brands/Logo-8.png",
  "/images/brands/Logo-9.png",
  "/images/brands/Logo-10.png",
  "/images/brands/Logo-11.png",
  "/images/brands/Logo-12.png",
  "/images/brands/Logo-13.png",
  "/images/brands/Logo-14.png",
  "/images/brands/Logo-15.png",
  "/images/brands/Logo-16.png",
  "/images/brands/Logo-17.png",
  "/images/brands/Logo-18.png",
  "/images/brands/Logo-19.png",
  "/images/brands/Logo-20.png",
  "/images/brands/Logo-21.png",
  "/images/brands/Logo-22.png",
  "/images/brands/Logo-23.png",
];

export default function TrustedBy() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl text-gray-900 pb-10">
          Trusted by <span className="font-bold">Leading Brands</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 7 },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
