// src/app/projects/page.tsx
"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ProjectCategory, projects } from "@/lib/projectData";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

type DisplayCategory = ProjectCategory | "all projects";

// List of categories with "all projects" in specific order
const categories: DisplayCategory[] = [
  "all projects",
  "Hotel & Resort",
  "Hospital & Commercial",
  "Toll Plaza & Expressway",
  "Office & Residence",
  "Restaurant & Bar",
  "Modern Villa",
  "Gym & Others",
];

// Category descriptions
const categoryDescriptions: Record<ProjectCategory | "all projects", string> = {
  "all projects": "Explore our complete portfolio of projects across all categories. From residential masterpieces to commercial landmarks, discover the diverse range of architectural and design excellence we've delivered.",
  "Office & Residence":
    "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
  "Hotel & Resort":
    "Hotel and resort design should create relaxing, comfortable spaces using natural materials and light, flexible areas, and local culture for a unique, refreshing guest experience.",
  "Hospital & Commercial":
    "Effective commercial and hospital space design harmonizes functionality, aesthetics, and user experience through thoughtful space planning. Hospital design also creates clean, comfortable, calming environments promoting healing through natural light, proper ventilation, and green spaces.",
  "Restaurant & Bar":
    "The design for a restaurant, bar, or microbrewery should blend inviting Blend mood lighting, seating, layout, materials, and branding use layered ambient, accent, and task lighting with dimmers for day-night transitions.",
  "Toll Plaza & Expressway":
    "Highway and toll plaza designs emphasizing efficiency, safety, and sustainability. Wide lanes, clear signage, and electronic tolling ensure smooth traffic flow and minimal delays. A continuous green belt of native trees and shrubs, alongside the road and around the plaza absorbs emissions, reduces noise, and manages rainwater naturally.",
  "Modern Villa":
    "Modern, classical, and neoclassical villa designs integrate spacious, minimalist layouts with clean lines, ornate moldings, carved woodwork, columns, chandeliers, and balanced symmetry. They combine contemporary simplicity with timeless elegance, using natural materials and refined detailing to create luxurious yet functional living spaces. This harmonious blend respects tradition while embracing modern comfort and sophistication.",
  "Gym & Others": "Gym & others interior design prioritizes functionality and motivation through strategic zoning, appropriate lighting, durable materials, ventilation, mirrors for form checking, and energizing colour schemes.",
};

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Single source of truth: the URL
  const selectedCategory = useMemo(() => {
    const category = searchParams.get("category");
    if (category && categories.includes(category as any)) {
      return category as DisplayCategory;
    }
    return "all projects";
  }, [searchParams]);

  const handleCategoryChange = (category: DisplayCategory) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all projects") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/projects?${params.toString()}`, { scroll: false });
  };

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all projects"
      ? projects.filter((p) => categories.includes(p.category as DisplayCategory))
      : projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const isBuildService = searchParams.get("service") === "build";
  const displayCategories = isBuildService 
    ? (["Office & Residence"] as DisplayCategory[]) 
    : categories;

  return (
    <>
      <Header />

      <main className="px-6 pt-24 pb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-8 border-b pb-4">
          {displayCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm transition capitalize whitespace-nowrap ${selectedCategory === category
                ? "bg-[#273027] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 capitalize">
            {selectedCategory === "all projects" ? "All Projects" : `${selectedCategory} Projects`}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {categoryDescriptions[selectedCategory]}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group block overflow-hidden rounded-2xl shadow hover:shadow-xl transition"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={400}
                  height={250}
                  unoptimized
                  className="w-full h-64 object-cover group-hover:scale-105 transition"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {project.location}
                  </p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {project.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
