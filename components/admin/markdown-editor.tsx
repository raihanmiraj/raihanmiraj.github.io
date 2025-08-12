"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function MarkdownEditor({
  value,
  onChange,
  placeholder = "Write your content in Markdown...",
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  const [tab, setTab] = useState<"write" | "preview">("write")
  return (
    <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full">
      <TabsList>
        <TabsTrigger value="write">Write</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="write" className="mt-3">
        <Textarea
          rows={16}
          className="bg-[#0f172a] border-gray-700 text-white"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </TabsContent>
      <TabsContent value="preview" className="mt-3 prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{value || "*Nothing to preview*"}</ReactMarkdown>
      </TabsContent>
    </Tabs>
  )
}
