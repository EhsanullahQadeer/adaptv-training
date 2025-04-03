import { Skeleton } from '@workspace/ui/components/skeleton';

export function MovementsGridSkeleton() {
  return (
    <div className="flex-1">
      {/* Mobile Filters Placeholder */}
      <div className="md:hidden w-full mb-4">
        <Skeleton className="h-10 w-full rounded-lg" /> {/* Mobile filters button */}
      </div>

      {/* Search and Sort Bar */}
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-10 w-48" /> {/* Search bar */}
        <Skeleton className="h-10 w-32" /> {/* Sort dropdown */}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:max-lg:grid-cols-2 gap-4 md:gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3 p-4 border rounded-lg">
            <Skeleton className="h-40 w-full rounded-lg" /> {/* Movement image */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-3/4" /> {/* Movement title */}
              <div className="flex gap-2">
                <Skeleton className="h-4 w-16" /> {/* Tag 1 */}
                <Skeleton className="h-4 w-16" /> {/* Tag 2 */}
              </div>
              <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
              <Skeleton className="h-4 w-2/3" /> {/* Description line 2 */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
