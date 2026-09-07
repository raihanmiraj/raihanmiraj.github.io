import assert from "node:assert/strict";
import { test } from "node:test";
import { contactInput } from "../lib/validation";
import { Contact } from "../models/Contact";
import {
  contactTopics,
  normalizeContactTopic,
  topicLabel,
} from "../data/contact-topics";
import { photos, videos, capabilities, profile } from "../data/profile";

const message = {
  name: "Test Visitor",
  email: "test@example.com",
  message: "A test message long enough for validation.",
};
test("all six contact topics pass validation and survive model construction", async () => {
  for (const { value } of contactTopics) {
    const parsed = contactInput.parse({ ...message, topic: value });
    const document = new Contact(parsed);
    assert.equal(document.topic, value);
    await document.validate();
  }
});
test("legacy messages default to General without a database migration", () => {
  assert.equal(contactInput.parse(message).topic, "general");
  assert.equal(new Contact(message).topic, "general");
  assert.equal(normalizeContactTopic({ topic: undefined }).topic, "general");
  assert.equal(
    normalizeContactTopic({ topic: "old-unknown" }).topic,
    "general",
  );
  assert.equal(topicLabel(undefined), "General");
});
test("unknown topics, mass-assignment fields, and honeypots cannot bypass validation", async () => {
  assert.equal(
    contactInput.safeParse({ ...message, topic: "admin" }).success,
    false,
  );
  assert.equal(
    contactInput.safeParse({ ...message, website: "spam" }).success,
    false,
  );
  const parsed = contactInput.parse({
    ...message,
    read: true,
    _id: "injected",
  });
  assert.equal("read" in parsed, false);
  assert.equal("_id" in parsed, false);
  await assert.rejects(
    new Contact({ ...message, topic: "admin" }).validate(),
    /topic/,
  );
});
test("complete media registry has six unique photos and eight unique videos", () => {
  assert.equal(photos.length, 6);
  assert.equal(new Set(photos.map((photo) => photo.id)).size, 6);
  assert.equal(videos.length, 8);
  assert.equal(new Set(videos.map((video) => video.youtubeId)).size, 8);
  for (const photo of photos) {
    assert.ok(photo.alt && photo.caption && photo.position);
    assert.equal(new URL(photo.url).hostname, "cdn.raihanmiraj.com");
  }
  for (const video of videos) {
    const url = new URL(video.url);
    assert.ok(url.pathname.includes(video.youtubeId));
    assert.match(video.youtubeId, /^[\w-]{11}$/);
    assert.ok(["music", "road", "travel"].includes(video.category));
  }
});
test("skills and profile facts stay represented without invented proficiency scores", () => {
  const skills = capabilities.flatMap((group) => [...group.skills]);
  for (const skill of [
    "TypeScript",
    "OpenAI Whisper",
    "LangChain",
    "React Native",
    "Redis",
    "Prisma",
    "PHPStorm",
    "DeepSeek",
    "Java",
    "C++",
    "VPS management",
  ])
    assert.ok(skills.includes(skill as (typeof skills)[number]));
  assert.equal(profile.startYear, 2020);
  assert.equal(profile.music.guitarYears, 11);
  assert.equal(profile.music.keyboardYears, 6);
  assert.deepEqual(profile.music.daws, [
    "FL Studio",
    "GarageBand",
    "Logic Pro",
  ]);
  assert.equal(profile.education.status, "Completed");
});
