import { Separator } from "@/components/ui/separator"

export default function SectionLabel({ text = "Section" }: { text?: string }) {
  return (
    <div className="flex items-center">
      <Separator className="hidden md:block w-10 bg-[#0A69DC] mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold">{text}</h2>
    </div>
  )
}
