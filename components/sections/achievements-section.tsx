"use client"

import { SectionWrapper } from "../section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Crown, Zap, Star, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const achievements = [
  {
    title: "1st Place - CodeStorm Hackathon 2024",
    date: "March 2024",
    icon: Trophy,
    description: "Won first place among 50+ teams for building a real-time collaborative coding platform using Next.js and WebSockets.",
    link: "https://devpost.com/software/your-hack"
  },
  {
    title: "LeetCode Weekly Contest - Top 5%",
    date: "Ongoing",
    icon: Medal,
    description: "Consistently ranking in top 5% globally in LeetCode weekly contests, solving complex algorithmic problems under time pressure.",
    link: "https://leetcode.com/your-profile"
  },
  {
    title: "GitHub Star Contributor",
    date: "2024",
    icon: Star,
    description: "Recognized as a star contributor for open source projects with 500+ stars across repositories.",
    link: "https://github.com/amankr4578"
  },
  {
    title: "Top 10 HackerRank",
    date: "January 2024",
    icon: Crown,
    description: "Ranked #8 in university HackerRank contest, demonstrating strong problem-solving skills.",
    link: "https://www.hackerrank.com/your-profile"
  },
  {
    title: "AWS Educate Merit Scholarship",
    date: "June 2024",
    icon: Zap,
    description: "Selected for merit-based scholarship and cloud credits for outstanding cloud project.",
    link: "https://aws.amazon.com/education"
  },
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
