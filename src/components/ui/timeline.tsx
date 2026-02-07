"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 py-4", className)}>
      <div className="relative">
        {/* Main horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0"></div>

        {/* Timeline items container */}
        <div className="flex justify-between items-center relative z-10">
          {items.map((item, index) => {
            const isAbove = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="flex flex-col items-center relative"
              >
                {/* Content card positioned above or below */}
                <div
                  className={cn(
                    "absolute w-64 transition-all duration-300 hover:scale-105",
                    isAbove ? "bottom-16 mb-4" : "top-16 mt-4"
                  )}
                >
                  {/* Dotted connecting line */}
                  <div
                    className={cn(
                      "absolute left-1/2 transform -translate-x-1/2 w-0.5 border-l-2 border-dotted border-gray-400 z-0",
                      isAbove ? "top-full h-12" : "bottom-full h-12"
                    )}
                  ></div>

                  {/* Content card */}
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 relative z-10">
                    {/* Status indicator */}
                    <div className="inline-flex items-center px-2.5 py-0.5 bg-gray-100 rounded-full text-xs font-medium mb-3">
                      Step {item.id}
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Step number circle on the main line */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg z-20 relative bg-gray-400 transition-all duration-300 hover:scale-110">
                  {item.status === "completed" ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-sm">{item.id}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
