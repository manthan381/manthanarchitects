// src/app/projects/[slug]/loading.tsx
export default function Loading() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="h-6 w-40 bg-gray-300 rounded animate-pulse mb-4" />
      <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mb-2" />
      <div className="h-80 bg-gray-100 rounded animate-pulse" />
    </div>
  );
}
