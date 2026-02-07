// /app/projects/loading.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="h-12 w-48 bg-muted rounded-md mb-8 animate-pulse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-muted rounded-t-md" />
            <CardContent className="p-4 space-y-2">
              <div className="h-4 w-3/4 bg-muted rounded" />
              <div className="h-3 w-1/2 bg-muted rounded" />
              <div className="h-3 w-2/3 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
