import "server-only";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";

export const AUTH_COOKIE = "portfolio_session";
export type Session = { sub: string; email: string; role: "admin" };

function secret() {
  const value = process.env.JWT_SECRET;
  if (!value || value.length < 32) throw new Error("JWT_SECRET must be at least 32 characters");
  return new TextEncoder().encode(value);
}

export async function signSession(payload: Session) {
  return new SignJWT({ email: payload.email, role: payload.role })
    .setProtectedHeader({ alg: "HS256" }).setSubject(payload.sub)
    .setIssuedAt().setExpirationTime("7d").sign(secret());
}

export async function verifySession(token?: string): Promise<Session | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    if (payload.role !== "admin" || !payload.sub || typeof payload.email !== "string") return null;
    return { sub: payload.sub, email: payload.email, role: "admin" };
  } catch { return null; }
}

export async function getCurrentUser() {
  return verifySession((await cookies()).get(AUTH_COOKIE)?.value);
}
export async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}
export const hashPassword = (value: string) => bcrypt.hash(value, 12);
export const comparePassword = (value: string, hash: string) => bcrypt.compare(value, hash);


