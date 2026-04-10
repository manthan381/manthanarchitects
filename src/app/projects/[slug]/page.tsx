// src/app/projects/[slug]/page.tsx
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import type { Metadata } from "next";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
  const { projects } = await import("@/lib/projectData");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { projects } = await import("@/lib/projectData");
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Manthan Architects",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} — ${project.category} | Manthan Architects`,
    description: `${project.description.slice(0, 155)}...`,
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

export const dynamicParams = false;

export default function ProjectDetailPage() {
  return (
    <>
      <Header />
      <main className="px-6 pt-24 pb-12 max-w-7xl mx-auto">
        <ProjectPageClient />
      </main>
      <Footer />
    </>
  );
}
