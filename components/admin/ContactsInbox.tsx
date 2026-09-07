"use client";
import { useState } from "react";
import {
  contactTopics,
  topicLabel,
  type ContactMessage,
} from "@/data/contact-topics";
import { ContactActions } from "./ContactActions";

export function ContactsInbox({ items }: { items: ContactMessage[] }) {
  const [topic, setTopic] = useState("all");
  const [read, setRead] = useState("all");
  const filtered = items.filter(
    (item) =>
      (topic === "all" || item.topic === topic) &&
      (read === "all" || item.read === (read === "read")),
  );
  return (
    <>
      <div className="list-tools">
        <label>
          Topic{" "}
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          >
            <option value="all">All topics</option>
            {contactTopics.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Status{" "}
          <select
            value={read}
            onChange={(event) => setRead(event.target.value)}
          >
            <option value="all">All messages</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </label>
      </div>
      <p className="small-note" role="status">
        {filtered.length} {filtered.length === 1 ? "message" : "messages"}
      </p>
      <div className="message-list">
        {filtered.map((item) => (
          <article
            className={item.read ? "message-card read" : "message-card"}
            key={item._id}
          >
            <div className="message-head">
              <div>
                <span className="tag">{topicLabel(item.topic)}</span>
                <h2>{item.name}</h2>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </div>
              <time dateTime={item.createdAt}>
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                  timeZone: "UTC",
                }).format(new Date(item.createdAt))}
              </time>
            </div>
            <p>{item.message}</p>
            <ContactActions id={item._id} read={item.read} />
          </article>
        ))}
        {!filtered.length && (
          <div className="empty">No messages match these filters.</div>
        )}
      </div>
    </>
  );
}
