import { headers } from "next/headers";

export function getBaseUrl() {
  const hdrs = headers();
  const host = hdrs.get("x-forwarded-host") || hdrs.get("host");
  const proto = hdrs.get("x-forwarded-proto") || "http";
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  return `${proto}://${host}`;
}


