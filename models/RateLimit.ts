import mongoose, { Schema } from "mongoose";

const RateLimitSchema = new Schema({
  key: { type: String, required: true, unique: true },
  count: { type: Number, default: 1 },
  expiresAt: { type: Date, required: true, expires: 0 },
});
export const RateLimit = mongoose.models.RateLimit || mongoose.model("RateLimit", RateLimitSchema);
