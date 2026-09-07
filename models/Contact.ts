import mongoose, { Schema, Document, Model } from "mongoose";
import { topicValues, type ContactTopic } from "@/data/contact-topics";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  topic: ContactTopic;
  read: boolean;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    topic: { type: String, enum: topicValues, default: "general" },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

ContactSchema.index({ read: 1, createdAt: -1 });

export const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);


