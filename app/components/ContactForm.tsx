"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/contacts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message }) });
    if (res.ok) {
      setStatus("success");
      setName(""); setEmail(""); setMessage("");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3 w-full">
      {status === "success" && <div className="text-green-400 text-sm">Message sent!</div>}
      {status === "error" && <div className="text-red-400 text-sm">Failed to send. Try again.</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" className="px-3 py-2 rounded bg-gray-800 outline-none" />
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your Email" className="px-3 py-2 rounded bg-gray-800 outline-none" />
      </div>
      <textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="Your Message" rows={5} className="w-full px-3 py-2 rounded bg-gray-800 outline-none" />
      <button disabled={status === "loading"} className=" md:text-md text-sm font-medium md:px-5 px-3 py-2 md:py-3 rounded-md bg-[#0A69DC]  border border-[#0A69DC]">
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}


