import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Blog } from "@/models/Blog";
import { getBlog } from "@/lib/data";
import { verifyAdminRequest } from "@/lib/api-auth";
import { blogInput } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  return blog ? NextResponse.json(blog) : NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  const parsed = blogInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid article", issues: parsed.error.flatten() }, { status: 400 });
  await connectToDatabase();
  const { slug } = await params;
  const match = /^[a-f\d]{24}$/i.test(slug) ? { _id: slug } : { slug };
  const existing = await Blog.findOne(match);
  if (!existing) return NextResponse.json({ error: "Article not found" }, { status: 404 });
  const publishing = parsed.data.status === "published" && existing.status !== "published";
  const updated = await Blog.findOneAndUpdate(match, { ...parsed.data, published: parsed.data.status === "published", ...(publishing ? { publishedAt: new Date() } : {}) }, { returnDocument: "after", runValidators: true });
  revalidatePath("/"); revalidatePath("/blogs"); revalidatePath(`/blogs/${updated!.slug}`); return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  await connectToDatabase();
  const { slug } = await params;
  const match = /^[a-f\d]{24}$/i.test(slug) ? { _id: slug } : { slug };
  const deleted = await Blog.findOneAndDelete(match);
  if (!deleted) return NextResponse.json({ error: "Article not found" }, { status: 404 });
  revalidatePath("/"); revalidatePath("/blogs");
  return new NextResponse(null, { status: 204 });
}


