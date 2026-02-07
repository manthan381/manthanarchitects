"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    title: "Top 10 Sustainable Architecture Trends in 2025",
    summary:
      "Explore how open-plan concepts and minimalist architecture shape the way we live.",
    image: "/images/blogs/blog-1.webp",
    slug: "/blog/sustainable-architecture-trends-2025",
  },
  {
    title: "How Smart Homes are Changing Urban Living",
    summary:
      "Discover emerging trends in office and retail space design that blend function and beauty.",
    image: "/images/blogs/blog-2.jpg",
    slug: "/blog/smart-homes-are-changing-urban-living",
  },
  {
    title: "Designing for Wellness: The New Trend in Office Spaces",
    summary:
      "Learn about eco-friendly building materials that reduce impact while maximizing durability.",
    image: "/images/blogs/blog-3.jpg",
    slug: "/blog/new-trend-in-office-spaces",
  },
];

export default function BlogSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl text-gray-950 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Top Industry <span className="font-bold">Insights</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-900 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Stay updated with the latest trends, techniques, and perspectives
          shaping the world of architecture and construction.
        </motion.p>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.summary}</p>
                <Link
                  href={blog.slug}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
