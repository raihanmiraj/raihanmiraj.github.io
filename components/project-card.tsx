import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

type ProjectCardProps = {
  title?: string
  description?: string
  tags?: string[]
  href?: string
  gradientFrom?: string
  gradientTo?: string
}

export default function ProjectCard({
  title = "Project Title",
  description = "Short project description goes here.",
  tags = ["React", "API", "UI"],
  href = "#",
  gradientFrom = "from-blue-600",
  gradientTo = "to-[#0A69DC]",
}: ProjectCardProps) {
  return (
    <Card className="bg-[#111A28] border-none overflow-hidden hover:scale-[1.02] transition-transform">
      <div className={`h-44 bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-400 space-y-4">
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
              {t}
            </span>
          ))}
        </div>
        <a
          className="inline-flex items-center text-[#0A69DC] font-medium hover:underline"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          View Details <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  )
}
