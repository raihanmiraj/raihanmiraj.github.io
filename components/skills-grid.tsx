"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code2,
  SquareStack,
  Rocket,
  Wrench,
  Database,
  Server,
  Boxes,
  Cpu,
  ShieldCheck,
  Braces,
  Palette,
} from "lucide-react"

type Skill = {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
  icon: React.ReactNode
  group: "Web" | "Programming" | "Tools" | "Other"
}

const ALL_SKILLS: Skill[] = [
  // Web
  { name: "JavaScript", level: "Advanced", icon: <Braces className="h-7 w-7" />, group: "Web" },
  { name: "React", level: "Advanced", icon: <SquareStack className="h-7 w-7" />, group: "Web" },
  { name: "Next.js", level: "Advanced", icon: <Rocket className="h-7 w-7" />, group: "Web" },
  { name: "Laravel", level: "Intermediate", icon: <Server className="h-7 w-7" />, group: "Web" },
  { name: "Tailwind CSS", level: "Advanced", icon: <Palette className="h-7 w-7" />, group: "Web" },

  // Programming
  { name: "Node.js", level: "Intermediate", icon: <Cpu className="h-7 w-7" />, group: "Programming" },
  { name: "Express.js", level: "Intermediate", icon: <Boxes className="h-7 w-7" />, group: "Programming" },
  { name: "MongoDB", level: "Intermediate", icon: <Database className="h-7 w-7" />, group: "Programming" },
  { name: "MySQL", level: "Intermediate", icon: <Database className="h-7 w-7" />, group: "Programming" },
  { name: "PHP", level: "Intermediate", icon: <Code2 className="h-7 w-7" />, group: "Programming" },

  // Tools
  { name: "GitHub", level: "Advanced", icon: <ShieldCheck className="h-7 w-7" />, group: "Tools" },
  { name: "Firebase", level: "Intermediate", icon: <ShieldCheck className="h-7 w-7" />, group: "Tools" },
  { name: "Docker", level: "Intermediate", icon: <Wrench className="h-7 w-7" />, group: "Tools" },
  { name: "Figma", level: "Intermediate", icon: <Palette className="h-7 w-7" />, group: "Tools" },

  // Other
  { name: "React Native (Expo)", level: "Intermediate", icon: <SquareStack className="h-7 w-7" />, group: "Other" },
  { name: "PostgreSQL", level: "Intermediate", icon: <Database className="h-7 w-7" />, group: "Other" },
]

const FILTERS: Array<Skill["group"]> = ["Web", "Programming", "Tools", "Other"]

export default function SkillsGrid() {
  const [active, setActive] = useState<Skill["group"] | "All">("All")

  const filtered = useMemo(() => {
    if (active === "All") return ALL_SKILLS
    return ALL_SKILLS.filter((s) => s.group === active)
  }, [active])

  return (
    <div className="space-y-6">
      {/* Filters like the old layout */}
      <div className="flex gap-3 justify-center md:justify-start flex-wrap">
        <Button
          variant={active === "All" ? "default" : "outline"}
          onClick={() => setActive("All")}
          className={active === "All" ? "bg-[#0A69DC]" : "border-[#0A69DC] text-white hover:bg-[#0A69DC]/10"}
        >
          All
        </Button>
        {FILTERS.map((f) => (
          <Button
            key={f}
            variant={active === f ? "default" : "outline"}
            onClick={() => setActive(f)}
            className={active === f ? "bg-[#0A69DC]" : "border-[#0A69DC] text-white hover:bg-[#0A69DC]/10"}
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-3 md:gap-5">
        {filtered.map((skill) => (
          <Card
            key={skill.name}
            className="bg-transparent border border-[#0A69DC40] hover:shadow-lg hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="text-[#0A69DC]">{skill.icon}</div>
              <div className="text-right space-y-1">
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <Badge variant="secondary" className="bg-gray-800 text-white">
                  {skill.level}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
