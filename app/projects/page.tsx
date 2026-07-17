import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";
import { ProjectSearch } from "@/components/ProjectSearch";
import { Pagination } from "@/components/Pagination";

type ProjectsPageProps = {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const { query = "", page = "1" } = await searchParams;

  const currentPage = Number(page);

  const projects = await fetchFilteredProjects(query, currentPage);

  const totalPages = await fetchProjectsPages(query);

  return (
    <main>
      <h1>Projects Overview</h1>

      <ProjectSearch />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>

      <Pagination totalPages={totalPages} />
    </main>
  );
}