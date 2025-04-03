import { Skeleton } from '@workspace/ui/components/skeleton';

export function FiltersSkeleton() {
  return (
    <div className="max-md:hidden md:max-w-[260px] md:pr-5 flex-1 md:border-r border-light-gray">
      <div className="space-y-6">
        {/* Filter Groups */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-6 w-32" /> {/* Filter group title */}
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" /> {/* Checkbox */}
                  <Skeleton className="h-4 w-24" /> {/* Filter option */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
