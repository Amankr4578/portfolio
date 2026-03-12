"use client"

import { SectionWrapper } from "../section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Crown, Zap, Star, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const achievements = [
  {
    title: "LeetCode Contest Top 50%",
    date: "Ongoing",
    icon: Medal,
    description: "Consistently solving complex algorithmic problems in LeetCode weekly contests and ranking in top 50%.",
    link: "https://leetcode.com/amankr4578"
  },
  {
    title: "GitHub Star Contributor",
    date: "Ongoing",
    icon: Star,
    description: "Recognized as a star contributor for open source projects with 5+ stars across repositories.",
    link: "https://github.com/amankr4578"
  },
  {
    title: "Oracle Race to Certification",
    date: "Nov 2025",
    icon: Zap,
    description: "Earned Oracle Race to Certification 2025 Level 1 and Level 2 Digital Badges",
    link: "https://drive.google.com/file/d/1zDgCEnNnMZFEq_mbs1UtUi41TaMupwNU/view?usp=sharing"
  },
  {
    title: "Hack Quest CTF - Concoction ",
    date: "April 2024",
    icon: Trophy,
    description: "Won 25th place among 100+ teams for finding the bug a real-time collaborative coding platform",
    link: "https://drive.google.com/file/d/18DjPUfhYy5FK1OvKAXVuzk3zENHLPmE_/view?usp=sharing"
  }
]

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" className="max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Milestones, competitions, and recognitions.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="group relative h-full hover:shadow-xl transition-all duration-400 border-primary/20 bg-gradient-to-br from-card to-muted/30 backdrop-blur-sm overflow-hidden">
              {/* Decorative line */}
              <div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gradient-to-b from-primary/30 to-transparent" />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                      {achievement.title}
                    </CardTitle>
                    <p className="text-sm font-mono text-primary/80 mt-1">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {achievement.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all group-hover:translate-x-1"
                  asChild
                >
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                    View Details <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
