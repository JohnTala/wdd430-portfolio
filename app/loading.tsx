export default function Loading() {
  return (
    <main className="p-6">
      {/* Page title */}
      <div className="h-8 w-56 rounded bg-blue-300 animate-pulse mb-8" />

      {/* Project Card 1 */}
      <div className="mb-6 rounded border p-4">
        <div className="h-6 w-48 rounded bg-blue-200 animate-pulse mb-3" />
        <div className="h-4 w-full rounded bg-blue-100 animate-pulse mb-2" />
        <div className="h-4 w-3/4 rounded bg-blue-100 animate-pulse" />
      </div>

      {/* Project Card 2 */}
      <div className="mb-6 rounded border p-4">
        <div className="h-6 w-40 rounded bg-blue-200 animate-pulse mb-3" />
        <div className="h-4 w-full rounded bg-blue-100 animate-pulse mb-2" />
        <div className="h-4 w-2/3 rounded bg-blue-100 animate-pulse" />
      </div>

      {/* Project Card 3 */}
      <div className="rounded border p-4">
        <div className="h-6 w-52 rounded bg-blue-200 animate-pulse mb-3" />
        <div className="h-4 w-full rounded bg-blue-100 animate-pulse mb-2" />
        <div className="h-4 w-4/5 rounded bg-blue-100 animate-pulse" />
      </div>
    </main>
  );
}