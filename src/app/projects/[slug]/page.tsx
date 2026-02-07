// src/app/projects/[slug]/page.tsx
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
  const { projects } = await import("@/lib/projectData");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export default function ProjectDetailPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-10 max-w-7xl mx-auto">
        <ProjectPageClient />
      </main>
      <Footer />
    </>
  );
}
