import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Contact } from "@/models/Contact";
import { getContacts } from "@/lib/data";
import { verifyAdminRequest } from "@/lib/api-auth";
import { contactInput } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";

export async function GET(req: NextRequest) {
  const denied = await verifyAdminRequest(req); if (denied) return denied;
  return NextResponse.json(await getContacts());
}

export async function POST(req: NextRequest) {
  const parsed = contactInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ success: true }, { status: 201 });
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  if (!(await rateLimit(`contact:${ip}`, 4, 60 * 60_000)).allowed)
    return NextResponse.json({ error: "Too many messages. Please email directly." }, { status: 429 });
  await connectToDatabase();
  await Contact.create({ name: parsed.data.name, email: parsed.data.email.toLowerCase(), message: parsed.data.message, topic: parsed.data.topic });
  return NextResponse.json({ success: true }, { status: 201 });
}


