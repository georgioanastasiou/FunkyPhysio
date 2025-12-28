export function BlogPostSkeleton() {
  return (
    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-64 bg-gray-300"></div>
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Category badge */}
        <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
        
        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        
        {/* Date and author */}
        <div className="flex items-center gap-4">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function BlogPostsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <BlogPostSkeleton key={i} />
      ))}
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="w-full max-w-[384px] h-[470px] bg-white rounded-[20px] shadow-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-300"></div>
      
      {/* Content skeleton */}
      <div className="p-6 md:p-10 space-y-4">
        {/* Title */}
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        
        {/* List items */}
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
        </div>
        
        {/* Button */}
        <div className="h-12 bg-gray-300 rounded-[10px] mt-3"></div>
      </div>
    </div>
  );
}
