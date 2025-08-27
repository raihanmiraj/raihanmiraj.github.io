import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { comparePassword, signJwt } from "@/lib/auth";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const token = signJwt({ sub: user._id.toString(), role: user.role, email: user.email });
  const res = NextResponse.json({ success: true });
  res.cookies.set("token", token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/" });
  return res;
}


