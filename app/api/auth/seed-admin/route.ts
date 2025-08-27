import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { name, email, password } = await req.json();
  const exists = await User.findOne({ email });
  if (exists) return NextResponse.json({ error: "User exists" }, { status: 400 });
  const passwordHash = await hashPassword(password);
  const user = await User.create({ name: name || "Admin", email, passwordHash, role: "admin" });
  return NextResponse.json({ id: user._id });
}


