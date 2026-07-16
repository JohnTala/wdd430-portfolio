import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";
import SchoolProjectSkeleton from "@/components/SchoolProjectSkeleton";

export default function SchoolProjectsPage() {
  return (
    <main>
      <h1>School Projects</h1>

      <Suspense fallback={<SchoolProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}