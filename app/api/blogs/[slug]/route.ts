import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Blog } from "@/models/Blog";

export const revalidate = 60;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  await connectToDatabase();
  const { slug } = await params;
  const blog = await Blog.findOneAndUpdate({ slug }, { $inc: { viewCount: 1 } }, { new: true }).lean();
  if (!blog) return new NextResponse("Not found", { status: 404 });
  return NextResponse.json(blog);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const { slug } = await params;
  const body = await req.json();
  const updated = await Blog.findOneAndUpdate({ slug }, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const { slug } = await params;
  await Blog.findOneAndDelete({ slug });
  return new NextResponse(null, { status: 204 });
}


