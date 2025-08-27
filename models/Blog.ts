import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  image?: string;
  content: string; // markdown or rich text
  metaDescription?: string;
  seoKeywords?: string[];
  published: boolean;
  viewCount: number;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    image: { type: String },
    content: { type: String, required: true },
    metaDescription: { type: String },
    seoKeywords: [{ type: String }],
    published: { type: Boolean, default: true },
    viewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);


