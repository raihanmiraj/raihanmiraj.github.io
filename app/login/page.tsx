"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Login failed");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <main className="bg-[#111A28] text-white min-h-screen flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="bg-gray-800 p-6 rounded w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        {error ? <div className="text-red-400 text-sm">{error}</div> : null}
        <div className="space-y-2">
          <label className="block text-sm">Email</label>
          <input className="w-full px-3 py-2 rounded bg-gray-900 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <label className="block text-sm">Password</label>
          <input type="password" className="w-full px-3 py-2 rounded bg-gray-900 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button disabled={loading} className="w-full py-2 bg-[#0A69DC] rounded font-medium">{loading ? "Logging in..." : "Login"}</button>
      </form>
    </main>
  );
}


