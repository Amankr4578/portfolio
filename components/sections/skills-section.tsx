"use client"

import { SectionWrapper } from "../section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  Crown,
  Database,
  Cloud,
  Terminal as TerminalIcon,
  Palette,
  GitMerge,
  Brain,
  Zap,
  Search,
  Boxes,
} from "lucide-react"
import type { JSX } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: JSX.Element
}

interface SkillCategory {
  title: string
  icon: JSX.Element
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Palette className="h-7 w-7" />,
    skills: [
      { name: "C++", icon: <Code size={20} /> },
      { name: "Java", icon: <Search size={20} /> },
      { name: "JavaScript", icon: <Search size={20} /> },
      { name: "Python", icon: <Code size={20} /> },
      { name: "PHP", icon: <Code size={20} /> },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-7 w-7" />,
    skills: [
      { name: "MySQL", icon: <Database size={20} /> },
      { name: "MongoDB", icon: <Database size={20} /> },
      { name: "PostgreSQL", icon: <Database size={20} /> },
      { name: "SupaBase", icon: <Database size={20} /> },
    ],
  },
  {
    title: "Web Development",
    icon: <TerminalIcon className="h-7 w-7" />,
    skills: [
      { name: "React.js", icon: <Zap size={20} /> },
      //{ name: "Next.js", icon: <Code size={20} /> },
      { name: "HTML", icon: <Code size={20} /> },
      { name: "Tailwind CSS", icon: <Palette size={20} /> },
      { name: "Node.js", icon: <Code size={20} /> },
      { name: "Express.js", icon: <Code size={20} /> },
    ],
  },
  {
    title: "Tools",
    icon: <GitMerge className="h-7 w-7" />,
    skills: [
      { name: "Linux", icon: <TerminalIcon size={20} /> },
      { name: "Git/GitHub", icon: <GitMerge size={20} /> },
      { name: "Vercel", icon: <Cloud size={20} /> },
      { name: "VS Code", icon: <TerminalIcon size={20} /> },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Brain className="h-7 w-7" />,
    skills: [
      { name: "Team Player", icon: <Zap size={20} /> },
      { name: "Problem-Solving", icon: <Search size={20} /> },
      { name: "Adaptability", icon: <Cloud size={20} /> },
      { name: "Leadership", icon: <Crown size={20} /> },
    ],
  },
  {
    title: "Domain Skills",
    icon: <Boxes className="h-7 w-7" />,
    skills: [
      { name: "Data Structures & Algorithms", icon: <Code size={20} /> },
      { name: "Software Testing", icon: <Search size={20} /> },
      { name: "DevOps", icon: <Cloud size={20} /> },
      { name: "Cloud Computing", icon: <Zap size={20} /> },
    ],
  }
]

function getSkillPercentage(skillName: string): number {
  // Deterministic pseudo-random value between 81 and 97.
  let hash = 0
  for (let i = 0; i < skillName.length; i++) {
    hash = (hash * 31 + skillName.charCodeAt(i)) % 100000
  }

  return 81 + (hash % 17)
}

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="max-w-5xl">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Technologies and skills powering my development work.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <Card className="group h-full hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill.name}
                      className="rounded-lg bg-muted/50 group-hover:bg-muted/30 transition-colors hover:translate-x-1 p-2.5"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="flex-shrink-0 p-1 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                            {skill.icon}
                          </div>
                          <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-primary/90">
                          {getSkillPercentage(skill.name)}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 w-full rounded-full bg-primary/15 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${getSkillPercentage(skill.name)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
