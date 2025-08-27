import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[]; // tags array
  coverImage?: string;
  featured?: boolean;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    liveUrl: { type: String },
    githubUrl: { type: String },
    technologies: [{ type: String, index: true }],
    coverImage: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);


