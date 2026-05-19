export function ImageGridSkeleton() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">PicSome Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-60 bg-gray-300" />

            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded mb-3" />
              <div className="h-4 bg-gray-300 rounded mb-4" />
              <div className="h-8 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}