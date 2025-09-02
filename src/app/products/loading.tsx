export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="animate-pulse space-y-3">
        <div className="h-6 w-56 bg-gray-200 rounded" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-2xl border border-gray-200 bg-white p-5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
