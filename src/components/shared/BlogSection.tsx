"use client";

import type { BlogPostPreview } from "@/lib/blog/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const defaultBlogs = [
  {
    title: "Top 10 Sustainable Architecture Trends in 2025",
    excerpt:
      "Explore how open-plan concepts and minimalist architecture shape the way we live.",
    coverImage: "/images/blogs/blog-1.webp",
    authorName: "Manthan Team",
    publishedAt: "2025-06-15T00:00:00.000Z",
    slug: "sustainable-architecture-trends-2025",
  },
  {
    title: "How Smart Homes are Changing Urban Living",
    excerpt:
      "Discover emerging trends in office and retail space design that blend function and beauty.",
    coverImage: "/images/blogs/blog-2.jpg",
    authorName: "Manthan Team",
    publishedAt: "2025-06-10T00:00:00.000Z",
    slug: "smart-homes-are-changing-urban-living",
  },
  {
    title: "Designing for Wellness: The New Trend in Office Spaces",
    excerpt:
      "Learn about eco-friendly building materials that reduce impact while maximizing durability.",
    coverImage: "/images/blogs/blog-3.jpg",
    authorName: "Manthan Team",
    publishedAt: "2025-06-05T00:00:00.000Z",
    slug: "new-trend-in-office-spaces",
  },
];

type BlogSectionProps = {
  posts?: BlogPostPreview[];
};

function formatDate(date: string | null) {
  if (!date) {
    return "";
  }

  return new Date(date).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogSection({
  posts = [],
}: Readonly<BlogSectionProps>) {
  const blogs = posts.length > 0 ? posts : defaultBlogs;

  return (
    <section>
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl text-gray-950 mb-4 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Top Industry <span>Insights</span>
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
          {blogs.map((blog) => (
            <motion.div
              key={blog.slug}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <p className="text-xs text-gray-500 mb-3">
                  {blog.authorName}
                  {blog.publishedAt ? ` • ${formatDate(blog.publishedAt)}` : ""}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
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
