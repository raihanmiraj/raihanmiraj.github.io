import { connectToDatabase } from "@/lib/db";
import { RateLimit } from "@/models/RateLimit";

export async function rateLimit(key: string, limit: number, windowMs: number) {
  await connectToDatabase();
  const now = new Date();
  const current = await RateLimit.findOne({ key });
  if (!current || current.expiresAt <= now) {
    await RateLimit.findOneAndUpdate({ key }, { count: 1, expiresAt: new Date(Date.now() + windowMs) }, { upsert: true });
    return { allowed: true, remaining: limit - 1 };
  }
  if (current.count >= limit) return { allowed: false, remaining: 0 };
  current.count += 1; await current.save();
  return { allowed: true, remaining: Math.max(0, limit - current.count) };
}
