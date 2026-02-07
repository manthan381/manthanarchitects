// src/app/projects/[slug]/ProjectView.tsx
"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { Project, projects } from "@/lib/projectData";
import ClientProjectGallery from "./ClientProjectGallery";

export default function ProjectView({ slug }: { slug: string }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projects.find((p: Project) => p.slug === slug);

    if (!foundProject) {
      notFound();
    }

    setProject(foundProject || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <p className="text-muted-foreground">{project.location}</p>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            {project.category}
          </span>
        </div>
        {/* <p className="text-lg mb-6 max-w-7xl">{project.description}</p> */}
      </header>
      <ClientProjectGallery
        images={project.images}
        title={project.title}
        coverImage={project.coverImage}
      />
    </article>
  );
}
