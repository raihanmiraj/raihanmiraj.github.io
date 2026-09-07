import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Blog } from "@/models/Blog";
import { getBlogs } from "@/lib/data";
import { verifyAdminRequest } from "@/lib/api-auth";
import { blogInput } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function GET() {
  return NextResponse.json(await getBlogs());
}

export async function POST(req: NextRequest) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  const parsed = blogInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid article", issues: parsed.error.flatten() }, { status: 400 });
  await connectToDatabase();
  try {
    const data = { ...parsed.data, published: parsed.data.status === "published", publishedAt: parsed.data.status === "published" ? new Date() : undefined };
    const created = await Blog.create(data); revalidatePath("/"); revalidatePath("/blogs");
    return NextResponse.json(created, { status: 201 });
  } catch (error) { return NextResponse.json({ error: (error as { code?: number }).code === 11000 ? "Slug already exists" : "Could not create article" }, { status: 400 }); }
}


