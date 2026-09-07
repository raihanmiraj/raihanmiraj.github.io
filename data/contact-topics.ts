export const contactTopics = [
  { value: "ai-saas", label: "AI / SaaS opportunity" },
  { value: "software", label: "Software project" },
  { value: "freelance", label: "Freelance / collaboration" },
  { value: "music", label: "Music collaboration" },
  { value: "automotive", label: "Bikes / cars" },
  { value: "general", label: "General" },
] as const;
export type ContactTopic = (typeof contactTopics)[number]["value"];
export const topicValues = contactTopics.map((t) => t.value);
export function isContactTopic(value: unknown): value is ContactTopic {
  return contactTopics.some((t) => t.value === value);
}
export function topicLabel(value: unknown) {
  return contactTopics.find((t) => t.value === value)?.label || "General";
}
export type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
  topic: ContactTopic;
  read: boolean;
  createdAt: string;
};
export function normalizeContactTopic<T extends { topic?: unknown }>(
  message: T,
): Omit<T, "topic"> & { topic: ContactTopic } {
  return {
    ...message,
    topic: isContactTopic(message.topic) ? message.topic : "general",
  };
}
