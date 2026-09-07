import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document { title: string; slug: string; summary: string; description: string; published: boolean; featured: boolean; sortOrder: number; }

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, sparse: true, index: true },
    subtitle: String,
    summary: { type: String, default: "" },
    description: { type: String, required: true }, type: String, company: String, role: String,
    ownership: { type: String, enum: ["company", "personal", "client", "university"], default: "client" },
    status: { type: String, enum: ["live", "development", "completed", "archived"], default: "completed" },
    published: { type: Boolean, default: false, index: true },
    sortOrder: { type: Number, default: 0, index: true },
    liveUrl: { type: String },
    githubUrl: { type: String },
    technologies: [{ type: String, index: true }],
    coverImage: String, coverImageAlt: String,
    gallery: [{ url: String, alt: String, caption: String }], videos: [String], highlights: [String], responsibilities: [String],
    seoTitle: String, metaDescription: String, startedAt: Date, completedAt: Date,
    featured: { type: Boolean, default: false },
  },
  { timestamps: true, strict: true }
);

ProjectSchema.index({ published: 1, featured: 1, sortOrder: 1 });

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);


