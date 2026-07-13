interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  //const data:Project[] = await res.json();
  return res.json();
}

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