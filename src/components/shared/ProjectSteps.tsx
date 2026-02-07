"use client";

import Timeline from "@/components/ui/timeline";

const timelineData = [
  {
    id: 1,
    title: "Deep-Dive Consultation",
    description:
      "We dissect your vision—needs, style, and constraints—to craft a blueprint for success. Clarity first, always.",
    status: "current" as const,
  },
  {
    id: 2,
    title: "Rapid Design & Budget Sync",
    description:
      "Lightning-fast concepts meet your budget. Iterate, refine, and align—no surprises, just smart solutions.",
    status: "current" as const,
  },
  {
    id: 3,
    title: "Finalized 3D Designs",
    description:
      "Crystal-clear 3D models lock in every detail. Your approval is our green light. No guesswork, just precision.",
    status: "current" as const,
  },
  {
    id: 4,
    title: "Seamless Project Execution",
    description:
      "Shovels in ground, timelines tracked. We orchestrate builds like clockwork—zero delays, 100% accountability.",
    status: "upcoming" as const,
  },
  {
    id: 5,
    title: "On-Time Delivery",
    description:
      "Keys in hand, promise kept. Move in on schedule with zero loose ends. Your dream, delivered.",
    status: "upcoming" as const,
  },
];

export default function ProjectSteps() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl text-gray-900 mb-6">
            Our <span className="font-bold">5 Step Process</span>
          </h1>
          <p className="text-lg text-gray-900 leading-relaxed">
            Track the progress of our development journey with this refined
            timeline component. Each milestone represents a crucial step in
            bringing our vision to life.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="pt-80">
        <Timeline items={timelineData} />
      </div>
    </div>
  );
}
