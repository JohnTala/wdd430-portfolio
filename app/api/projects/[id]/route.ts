// import { NextResponse } from "next/server";
// import { getProjectById } from "@/lib/projects-db";

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;

//   // Convert the id from a string to a number
//   const projectId = Number(id);

//   // Validate the id
//   if (Number.isNaN(projectId) || projectId <= 0) {
//     return NextResponse.json(
//       { error: "Invalid project id" },
//       { status: 400 }
//     );
//   }

//   // Look up the project
//   const project = getProjectById(projectId);

//   // Return 404 if not found
//   if (!project) {
//     return NextResponse.json(
//       { error: "Project not found" },
//       { status: 404 }
//     );
//   }

//   // Return the project
//   return NextResponse.json(project);
// }
import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }
  const project = await getProjectById(id);
  if (!project) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(project);
}