import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const body = await req.json();
  const updated = await Project.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();
  await Project.findByIdAndDelete(params.id);
  return new NextResponse(null, { status: 204 });
}


