import { NextResponse } from 'next/server';
import {  getAllProjects } from '@/lib/projects-db';



export  async function GET(request: Request) {
    //get the parameters from url
    const{ searchParams } = new URL(request.url);

    //Read the optional type parameter
    const type = searchParams.get('type');

    //Get the projects from the database
    const projects = getAllProjects(type);
  
    //Return the projects as a JSON response
    console.log('Projects API called with type:', type);
    console.log('Projects returned:', projects);
    return NextResponse.json(projects);
}