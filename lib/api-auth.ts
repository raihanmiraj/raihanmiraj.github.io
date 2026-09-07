import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, verifySession } from "@/lib/auth";

export async function verifyAdminRequest(request: NextRequest) {
  const user = await verifySession(request.cookies.get(AUTH_COOKIE)?.value);
  return user ? null : NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
