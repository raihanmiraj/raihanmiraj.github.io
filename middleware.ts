import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED_PREFIX = "/dashboard";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith(PROTECTED_PREFIX)) {
    const token = req.cookies.get("token")?.value;
    const secret = (process.env.JWT_SECRET || "").trim();
    let isAdmin = false;
    if (token && secret) {
      try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
        isAdmin = (payload as any).role === "admin";
      } catch {
        isAdmin = false;
      }
    }
    if (!isAdmin) {
      const url = new URL("/", req.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};


