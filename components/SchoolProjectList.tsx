import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {

  // Remove after testing
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const projects = await getProjects("school");

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  );
}