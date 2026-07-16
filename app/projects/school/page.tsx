
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectsPage() {
  const projects = await getProjects("school");

  return (
    <main>
      <h1>School Projects</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}