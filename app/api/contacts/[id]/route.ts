import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { verifyAdminRequest } from "@/lib/api-auth";
import { Contact } from "@/models/Contact";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  const { id } = await params; if (!/^[a-f\d]{24}$/i.test(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  const body = await req.json().catch(() => null); if (!body || typeof body.read !== "boolean") return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  await connectToDatabase(); const updated = await Contact.findByIdAndUpdate(id, { read: body.read }, { returnDocument: "after" });
  return updated ? NextResponse.json(updated) : NextResponse.json({ error: "Message not found" }, { status: 404 });
}
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  const { id } = await params; if (!/^[a-f\d]{24}$/i.test(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  await connectToDatabase(); const deleted = await Contact.findByIdAndDelete(id);
  return deleted ? new NextResponse(null, { status: 204 }) : NextResponse.json({ error: "Message not found" }, { status: 404 });
}
