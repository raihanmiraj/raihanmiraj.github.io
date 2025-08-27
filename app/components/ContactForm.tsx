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
    try {
      const res = await fetch("/api/contacts", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ name, email, message }) 
      });
      if (res.ok) {
        setStatus("success");
        setName(""); 
        setEmail(""); 
        setMessage("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="w-full">
      {/* Compact Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/30 mb-4 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Message sent successfully!</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-2 rounded-lg border border-red-400/30 mb-4 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Failed to send. Please try again.</span>
        </div>
      )}

      {/* Compact Contact Form */}
      <form onSubmit={submit} className="space-y-4">
        {/* Name and Email Row - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Name *</label>
            <input 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name" 
              className="w-full px-3 py-2.5 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 text-sm focus:border-[#64ffda] focus:outline-none focus:ring-1 focus:ring-[#64ffda]/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Email *</label>
            <input 
              required 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" 
              className="w-full px-3 py-2.5 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 text-sm focus:border-[#64ffda] focus:outline-none focus:ring-1 focus:ring-[#64ffda]/20 transition-colors"
            />
          </div>
        </div>

        {/* Message Field - Compact */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">Message *</label>
          <textarea 
            required 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project or just say hello..." 
            rows={4} 
            className="w-full px-3 py-2.5 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 text-sm focus:border-[#64ffda] focus:outline-none focus:ring-1 focus:ring-[#64ffda]/20 transition-colors resize-none"
          />
        </div>

        {/* Centered Send Button - Compact */}
        <div className="flex justify-center pt-4">
          <button 
            disabled={status === "loading"} 
            className="bg-[#64ffda] hover:bg-[#64ffda]/90 hover:shadow-lg hover:shadow-[#64ffda]/20 hover:scale-105 text-[#111A28] font-semibold px-8 py-2.5 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2 text-sm min-w-[140px] justify-center group"
          >
            {status === "loading" ? (
              <>
                <div className="w-4 h-4 border-2 border-[#111A28]/30 border-t-[#111A28] rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Form Footer - Compact */}
        <div className="text-center pt-2">
          <p className="text-gray-400 text-xs flex items-center justify-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your information is secure
          </p>
        </div>
      </form>
    </div>
  );
}


