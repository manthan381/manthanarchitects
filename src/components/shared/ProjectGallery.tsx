"use client";

import Image from "next/image";

export type Project = {
  title: string;
  image: string;
  location: string;
};

type ProjectGalleryProps = {
  projects: Project[];
};

function groupProjects(projects: Project[]): Project[][] {
  const groups: Project[][] = [];
  let i = 0;

  while (i < projects.length) {
    const isEvenGroup = groups.length % 2 === 0;
    const groupSize = isEvenGroup ? 2 : 3;
    groups.push(projects.slice(i, i + groupSize));
    i += groupSize;
  }

  return groups;
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const groupedProjects = groupProjects(projects);

  return (
    <div className="space-y-12">
      {groupedProjects.map((group, groupIdx) => {
        const columnClass =
          group.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

        return (
          <div key={groupIdx} className={`grid gap-6 ${columnClass}`}>
            {group.map((project, idx) => (
              <div key={idx}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transition rounded-xl"
                />
                <div className="text-gray-900">
                  <h3 className="text-lg font-semibold pt-2 pb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
