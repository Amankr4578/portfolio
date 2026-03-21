"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, School, Award } from "lucide-react"
import Image from "next/image"
import { SectionWrapper } from "../section-wrapper"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2023 – 2027 (Expected)",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    institution: "Saraswati Shishu Vidya Mandir",
    degree: "10th & 12th (PCM Stream)",
    duration: "2020 – 2022",
    icon: <School className="h-6 w-6" />,
  },
]

const certificates = [
  {
    title: "Oracle Java Certified",
    issuer: "Oracle",
    date: "Issued November 2025",
    logo: "/logos/aws.svg",
    link: "https://www.credly.com/badges/your-badge-id",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Issued February 2024",
    logo: "/logos/azure.svg",
    link: "https://www.credly.com/badges/your-badge-id",
  },
  // Add more certificates as needed
]

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="max-w-5xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">CS undergraduate, Web Developer, and code explorer.</p>
          {false && (
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="mt-6 group relative overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Award className="h-4 w-4" />
                    View Certificates
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[600px] max-h-[90vh] flex flex-col p-0 sm:p-0">
                <DialogHeader className="p-4 sm:p-6 pb-0 sm:pb-0">
                  <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Certifications
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground mt-2">
                    View my professional certifications and achievements
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 sm:gap-4 p-4 sm:p-6 overflow-y-auto">
                  {certificates.map((cert, index) => (
                    <motion.a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4">
                          <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                            <Image
                              src={cert.logo}
                              alt={`${cert.issuer} logo`}
                              fill
                              className="object-contain p-1.5 sm:p-2"
                              sizes="(max-width: 640px) 40px, 48px"
                            />
                          </div>
                          <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                            <CardTitle className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors truncate">
                              {cert.title}
                            </CardTitle>
                            <p className="text-xs sm:text-sm text-muted-foreground truncate">{cert.issuer}</p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">{cert.date}</p>
                          </div>
                          <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="M7 7h10v10" />
                              <path d="M7 17 17 7" />
                            </svg>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-primary/20 bg-gradient-to-br from-card to-muted/30 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-base">Brief Personal Intro</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I am Aman, a Computer Science undergraduate who enjoys building practical, clean, and scalable digital products. I focus on writing thoughtful code that solves real user problems.
                  </p>
                </CardHeader>
              </Card>
              <Card className="border-primary/20 bg-gradient-to-br from-card to-muted/30 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-base">Academic Background & Career Goals</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    My academic foundation in computer science supports my growth in full-stack development, cloud, and system design. My goal is to become a product-focused software engineer who builds reliable systems at scale.
                  </p>
                </CardHeader>
              </Card>
              <Card className="border-primary/20 bg-gradient-to-br from-card to-muted/30 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-base">Unique Qualities & Interests</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I am a fast learner who adapts quickly to new technologies, enjoys collaborative teamwork, and stays calm while debugging complex issues. I am especially interested in web architecture, automation, and impactful UI experiences.
                  </p>
                </CardHeader>
              </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold">{item.institution}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.degree}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.duration}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
    </SectionWrapper>
  )
}
