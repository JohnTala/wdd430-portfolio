import { getProjects } from "@/lib/projects-db";

export default async function OpenSourcePage() {
  const projects = await getProjects("opensource");

  return (
    <main>
      <h1>Open Source Projects</h1>

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