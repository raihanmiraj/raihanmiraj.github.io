import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";
import { getProjects } from "@/lib/data";
import { verifyAdminRequest } from "@/lib/api-auth";
import { projectInput } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function GET() {
  return NextResponse.json(await getProjects());
}

export async function POST(req: NextRequest) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  const parsed = projectInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid project", issues: parsed.error.flatten() }, { status: 400 });
  await connectToDatabase();
  try {
    const created = await Project.create(parsed.data); revalidatePath("/"); revalidatePath("/projects");
    return NextResponse.json(created, { status: 201 });
  } catch (error) { return NextResponse.json({ error: (error as { code?: number }).code === 11000 ? "Slug already exists" : "Could not create project" }, { status: 400 }); }
}


