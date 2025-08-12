export async function POST(request: Request) {
  const body = await request.json()
  // Simulate processing server-side (no env vars used)
  console.log("Contact form submission:", body)
  return Response.json({ ok: true })
}
