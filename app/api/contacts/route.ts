import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/models/Contact";

export const revalidate = 60;

export async function GET() {
  await connectToDatabase();
  const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
  return NextResponse.json(contacts);
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const body = await req.json();
  const created = await Contact.create(body);
  return NextResponse.json(created, { status: 201 });
}


