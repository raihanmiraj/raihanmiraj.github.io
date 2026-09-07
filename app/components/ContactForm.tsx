"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  contactTopics,
  isContactTopic,
  type ContactTopic,
} from "@/data/contact-topics";
import { profile } from "@/data/profile";

export default function ContactForm() {
  const params = useSearchParams();
  const requested = params.get("topic");
  const initialTopic = isContactTopic(requested) ? requested : "ai-saas";
  return <TopicForm key={initialTopic} initialTopic={initialTopic} />;
}

function TopicForm({ initialTopic }: { initialTopic: ContactTopic }) {
  const [topic, setTopic] = useState<ContactTopic>(initialTopic);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Could not send your message.");
      form.reset();
      setStatus("success");
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Could not send your message.",
      );
      setStatus("error");
    }
  }
  const paths = [
    {
      label: "Engineering",
      value: "ai-saas",
      description: "AI, SaaS & software",
    },
    { label: "Music", value: "music", description: "Playing & recording" },
    { label: "Road", value: "automotive", description: "Bikes, cars & travel" },
  ] as const;
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-label="Send a message"
    >
      <div className="contact-paths" aria-label="Conversation paths">
        {paths.map((path) => (
          <button
            key={path.value}
            type="button"
            onClick={() => setTopic(path.value)}
            aria-pressed={
              path.value === topic ||
              (path.value === "ai-saas" &&
                ["software", "freelance"].includes(topic))
            }
          >
            <strong>{path.label}</strong>
            <span>{path.description}</span>
          </button>
        ))}
      </div>
      <label>
        What’s on your mind?
        <select
          name="topic"
          value={topic}
          onChange={(event) => {
            if (isContactTopic(event.target.value))
              setTopic(event.target.value);
          }}
        >
          {contactTopics.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <div className="form-row">
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            autoComplete="email"
            type="email"
            required
            maxLength={160}
          />
        </label>
      </div>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={4000}
          rows={5}
          placeholder={
            topic === "music"
              ? "A song, a session, or an idea to record…"
              : topic === "automotive"
                ? "Tell me what’s on your mind — bikes, cars, or the next road trip."
                : "Tell me about the product, team, or problem you’re working on."
          }
        />
      </label>
      <div className="form-action">
        <button className="button" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message ↗"}
        </button>
        <p role="status">
          {status === "success" ? (
            "Thanks — your message is in my inbox."
          ) : status === "error" ? (
            error
          ) : (
            <>
              Prefer email?{" "}
              <a href={`mailto:${profile.email}`}>Write directly ↗</a>
            </>
          )}
        </p>
      </div>
    </form>
  );
}
