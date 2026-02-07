// src/app/projects/[slug]/ProjectPageClient.tsx
"use client";

import { useParams } from "next/navigation";
import ProjectView from "./ProjectView";
import { Suspense } from "react";

export default function ProjectPageClient() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center">
          Loading project...
        </div>
      }
    >
      <ProjectView slug={slug} />
    </Suspense>
  );
}
