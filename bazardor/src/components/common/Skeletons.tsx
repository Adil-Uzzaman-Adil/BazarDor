export function CardSkeleton() {
  return (
    <div className="card bg-base-100 shadow animate-pulse">
      <div className="card-body">
        <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mt-3" />
        <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
        <div className="h-5 bg-gray-200 rounded w-2/3 mx-auto mt-3" />
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => <CardSkeleton key={i} />)}
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-24 bg-gray-200 rounded-xl" />
      <div className="h-40 bg-gray-200 rounded-xl" />
      <div className="h-60 bg-gray-200 rounded-xl" />
    </div>
  );
}