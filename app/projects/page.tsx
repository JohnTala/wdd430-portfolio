import { getProjects } from "@/lib/projects-db";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <h1>Projects Overview</h1>

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