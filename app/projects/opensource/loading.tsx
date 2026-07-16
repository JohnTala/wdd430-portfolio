export default function Loading() {
  return (
    <main className="p-6">
      <div className="h-8 w-64 bg-blue-300 rounded animate-pulse mb-8"></div>

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="mb-6 border rounded-lg p-4 space-y-3"
        >
          <div className="h-6 w-52 bg-blue-200 rounded animate-pulse"></div>

          <div className="h-4 w-full bg-blue-100 rounded animate-pulse"></div>

          <div className="h-4 w-5/6 bg-blue-100 rounded animate-pulse"></div>
        </div>
      ))}
    </main>
  );
}