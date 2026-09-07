// Non-mutating API smoke checks. The development server must already be running.
import assert from "node:assert/strict";
const origin = "http://localhost:3000";
async function main() {
  const projectsResponse = await fetch(origin + "/api/projects");
  assert.equal(projectsResponse.status, 200);
  const projects = (await projectsResponse.json()) as {
    title: string;
    slug: string;
    liveUrl: string;
    published: boolean;
    coverImage?: string;
  }[];
  const expected = [
    "lupofy",
    "dokaneasy",
    "fabtrixbd",
    "webwatchly",
    "kbixy",
    "leaselocals",
  ];
  assert.deepEqual(
    projects.slice(0, 6).map((project) => project.slug),
    expected,
  );
  for (const slug of expected) {
    assert.equal(
      projects.find((project) => project.slug === slug)?.liveUrl,
      `https://${slug}.com`,
    );
  }
  assert.ok(projects.every((project) => project.published));
  assert.equal(
    projects.find((project) => project.slug === "lupofy")?.coverImage,
    "https://nexiby.com/wp-content/uploads/2026/05/Dribbble-Shot-lupofy-scaled.png",
  );
  assert.equal(
    projects.find((project) => project.slug === "kbixy")?.coverImage,
    "https://kbixy.com/assets/images/dashboard.png",
  );
  console.log(
    "PASS: six priority projects, order, live links, and supplied screenshots are served by MongoDB.",
  );
  for (const cookie of ["", "portfolio_session=not-a-valid-jwt"]) {
    const response = await fetch(origin + "/api/contacts", {
      headers: { cookie },
    });
    assert.equal(response.status, 401);
  }
  console.log("PASS: contact listing rejects absent and invalid sessions.");
  for (const topic of ["unknown-topic", { $ne: "" }]) {
    const response = await fetch(origin + "/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Validation test",
        email: "test@example.com",
        message: "This invalid payload must never be persisted.",
        topic,
      }),
    });
    assert.equal(response.status, 400);
  }
  console.log("PASS: invalid contact topics are rejected before persistence.");
  const projectWrite = await fetch(origin + "/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });
  assert.equal(projectWrite.status, 401);
  const blogWrite = await fetch(origin + "/api/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });
  assert.equal(blogWrite.status, 401);
  console.log(
    "PASS: project and blog creation remain admin-protected. No records were written.",
  );
}
main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Smoke checks failed");
  process.exitCode = 1;
});
