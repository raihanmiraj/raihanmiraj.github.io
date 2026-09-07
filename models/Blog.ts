import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document { title: string; slug: string; content: unknown; status: "draft" | "published"; published?: boolean; featured?: boolean; }

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, default: "" },
    image: String, coverImage: String, coverImageAlt: String, socialImage: String,
    content: { type: Schema.Types.Mixed, required: true },
    contentFormat: { type: String, enum: ["editorjs", "legacy-html", "markdown"], default: "editorjs" },
    tags: [String], seoTitle: String, metaDescription: String,
    seoKeywords: [{ type: String }],
    canonicalUrl: String, featured: { type: Boolean, default: false },
    status: { type: String, enum: ["draft", "published"], default: "draft", index: true },
    published: { type: Boolean, default: undefined }, publishedAt: Date,
    viewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

BlogSchema.index({ status: 1, publishedAt: -1 });
BlogSchema.index({ status: 1, featured: 1 });

export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);


