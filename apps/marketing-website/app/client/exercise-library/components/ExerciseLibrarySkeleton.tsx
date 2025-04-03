import { Skeleton } from '@workspace/ui/components/skeleton';
 

export function ExerciseLibrarySkeleton() {
  return (
    <div className="max-md:my-8 md:mt-[70px] md:mb-[135px] max-w-[1100px] m-auto flex flex-col gap-[42px]">
      {/* Muscles Section Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" /> {/* Section title */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-32 w-full rounded-lg" /> {/* Muscle image */}
              <Skeleton className="h-4 w-24" /> {/* Muscle name */}
            </div>
          ))}
        </div>
      </div>

      {/* Training Style Section Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-56" /> {/* Section title */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-40 w-full rounded-lg" /> {/* Style image */}
              <Skeleton className="h-4 w-32" /> {/* Style name */}
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Section Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-44" /> {/* Section title */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg space-y-3">
              <Skeleton className="h-6 w-24" /> {/* Difficulty level */}
              <Skeleton className="h-4 w-full" /> {/* Description */}
              <Skeleton className="h-4 w-3/4" /> {/* Description cont. */}
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Section Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-44" /> {/* Section title */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-24 w-full rounded-lg" /> {/* Equipment image */}
              <Skeleton className="h-4 w-28" /> {/* Equipment name */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
