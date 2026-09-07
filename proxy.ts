import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("portfolio_session")?.value;
  const secret = process.env.JWT_SECRET;
  if (!token || !secret || secret.length < 32) return NextResponse.redirect(new URL("/login", request.url));
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    if (payload.role !== "admin") throw new Error("Invalid role");
    return NextResponse.next();
  } catch { return NextResponse.redirect(new URL("/login", request.url)); }
}
export const config = { matcher: ["/dashboard/:path*"] };
