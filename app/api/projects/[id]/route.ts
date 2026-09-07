import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";
import { verifyAdminRequest } from "@/lib/api-auth";
import { projectInput } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  const parsed = projectInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid project", issues: parsed.error.flatten() }, { status: 400 });
  await connectToDatabase();
  const { id } = await params;
  if (!/^[a-f\d]{24}$/i.test(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  try {
    const updated = await Project.findByIdAndUpdate(id, parsed.data, { returnDocument: "after", runValidators: true });
    if (!updated) return NextResponse.json({ error: "Project not found" }, { status: 404 });
    revalidatePath("/"); revalidatePath("/projects"); revalidatePath(`/projects/${updated.slug}`); return NextResponse.json(updated);
  } catch { return NextResponse.json({ error: "Could not update project" }, { status: 400 }); }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  await connectToDatabase();
  const { id } = await params;
  if (!/^[a-f\d]{24}$/i.test(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  const deleted = await Project.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ error: "Project not found" }, { status: 404 });
  revalidatePath("/"); revalidatePath("/projects");
  return new NextResponse(null, { status: 204 });
}


