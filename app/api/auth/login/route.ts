import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User, IUser } from "@/models/User";
import { AUTH_COOKIE, comparePassword, signSession } from "@/lib/auth";
import { loginInput } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  const parsed = loginInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const { email, password } = parsed.data;
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  if (!(await rateLimit(`login:${ip}:${email.toLowerCase()}`, 6, 15 * 60_000)).allowed)
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  await connectToDatabase();
  const user = await User.findOne({ email }) as IUser | null;
  if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  if (user.role !== "admin") return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const token = await signSession({ sub: user._id.toString(), role: "admin", email: user.email });
  const res = NextResponse.json({ success: true });
  res.cookies.set(AUTH_COOKIE, token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}


