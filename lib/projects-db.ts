import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

const PROJECTS_PER_PAGE = 5;

export async function getProjects(
  type?: string | null
): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT *
      FROM projects
      WHERE type = ${type}
      ORDER BY id
    `;

    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    ORDER BY id
  `;

  return rows;
}

export async function getProjectById(
  id: number
): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE id = ${id}
  `;

  return rows[0] ?? null;
}

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const safeQuery = query.trim().slice(0, 100);
  const search = `%${safeQuery}%`;
  const page = Math.max(1, currentPage);
  const offset = (page - 1) * PROJECTS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE
      title ILIKE ${search}
      OR description ILIKE ${search}
    ORDER BY id
    LIMIT ${PROJECTS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows;
}

export async function fetchProjectsPages(
  query: string
): Promise<number> {
  const safeQuery = query.trim().slice(0, 100);
  const search = `%${safeQuery}%`;

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE
      title ILIKE ${search}
      OR description ILIKE ${search}
  `;

  const totalProjects = Number(rows[0]?.count ?? 0);

  return Math.max(1, Math.ceil(totalProjects / PROJECTS_PER_PAGE));
}