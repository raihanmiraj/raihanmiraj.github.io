import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Blog } from "@/models/Blog";

export const revalidate = 60; // ISR for GET

export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean();
  return NextResponse.json(blogs);
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const body = await req.json();
  const created = await Blog.create(body);
  return NextResponse.json(created, { status: 201 });
}


