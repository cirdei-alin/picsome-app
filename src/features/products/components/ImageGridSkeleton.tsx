export function ImageGridSkeleton() {
  return (
    <section>
      <div className="mb-7">
        <div className="mb-3 h-4 w-40 animate-pulse rounded-full bg-white/10" />
        <div className="h-10 w-80 max-w-full animate-pulse rounded-2xl bg-white/10" />
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl"
          >
            <div className="h-72 w-full animate-pulse bg-white/10" />

            <div className="space-y-4 p-5">
              <div className="h-5 w-3/4 animate-pulse rounded-full bg-white/10" />
              <div className="h-5 w-1/2 animate-pulse rounded-full bg-white/10" />

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="h-12 animate-pulse rounded-2xl bg-white/10" />
                <div className="h-12 animate-pulse rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}