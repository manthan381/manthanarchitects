"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import "swiper/css";

type Testimonial = {
  name: string;
  role?: string;
  image?: string;
  message: string;
  rating?: number;
};

type ClientTestimonialsProps = {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
};

export function ClientTestimonials({
  title = "Client Testimonials",
  subtitle = "Hear what our clients say about working with us.",
  testimonials,
  className = "",
}: ClientTestimonialsProps) {
  return (
    <section className={`${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-gray-600 mt-4 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000 }}
          loop
          className="overflow-visible"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <motion.div
                className="bg-white h-full rounded-2xl shadow-sm border flex flex-col text-center px-6 py-8 transition hover:shadow-md min-h-96"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 text-lg italic mb-6 flex-1">
                  “{item.message}”
                </p>

                <div className="flex justify-center mb-4 gap-1 text-yellow-500">
                  {[...Array(item.rating ?? 5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <div className="flex flex-col items-center">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  )}
                  <p className="mt-3 font-semibold text-gray-900">
                    {item.name}
                  </p>
                  {item.role && (
                    <p className="text-sm text-gray-500">{item.role}</p>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
