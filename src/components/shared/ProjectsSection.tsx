//We take pride in crafting premium spaces—residential, commercial, and everything in between. Discover our recent work—innovative residential, commercial, and interior projects that redefine space, function, and design.

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Corporate Office",
    image: "/images/projects/urban-company-1.jpg",
    link: "/projects?category=Office",
  },
  {
    title: "Commercial Space",
    image: "/images/projects/bsts-corporate-plaza.jpg",
    link: "/projects?category=Commercial",
  },
  {
    title: "Hotels & Resorts",
    image: "/images/projects/radison-hotel-top.jpg",
    link: "/projects?category=Hotel+and+Resort",
  },
  {
    title: "Multispecialty Hospitals",
    image: "/images/projects/sonar-hospital-1.jpg",
    link: "/projects?category=Hospital",
  },
  {
    title: "Restaurant, Bar & Brewery",
    image: "/images/projects/tangy-house.jpg",
    link: "/projects?category=Restaurant%2C+Bar+and+Microbrewery",
  },
  {
    title: "Highways & Toll Plaza",
    image: "/images/projects/highways-toll-plaza.jpg",
    link: "/projects?category=Highways+and+Toll+Plaza",
  },
  {
    title: "Farm House & Villa",
    image: "/images/projects/modern-villa.jpg",
    link: "/projects?category=Modern+Villa",
  },
];

export default function ProjectsSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl text-white mb-4"
        >
          Architectural Excellence{" "}
          <span className="font-bold">Across All Domains</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white max-w-4xl mx-auto mb-12"
        >
          We deliver architectural solutions that balance innovation,
          functionality, and aesthetics across commercial, residential, and
          institutional spaces. Our designs are tailored to meet the unique
          needs of each project, ensuring both visual appeal and structural
          integrity. With a focus on detail and efficiency, we bring
          architectural excellence to every domain we serve.
        </motion.p>

        {/* Alternating Grids */}
        <div className="space-y-3">
          {chunkProjects(projects).map((chunk, i) => (
            <div
              key={i}
              className={`grid gap-3 ${
                i % 2 === 0
                  ? "grid-cols-1 sm:grid-cols-2" // 2-column layout
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" // 3-column layout
              }`}
            >
              {chunk.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl shadow hover:shadow-md transition"
                >
                  <div className="relative aspect-video w-full">
                    <Link
                      href={project.link}
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center group"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper to chunk the array into alternating sizes: [2, 3, 2, 3, ...]
function chunkProjects(
  projects: { title: string; image: string; link: string }[]
) {
  const chunks: (typeof projects)[] = [];
  let i = 0;
  let size = 2;
  while (i < projects.length) {
    chunks.push(projects.slice(i, i + size));
    i += size;
    size = size === 2 ? 3 : 2;
  }
  return chunks;
}
