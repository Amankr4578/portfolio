"use client"

import { SectionWrapper } from "../section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, GraduationCap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const certifications = [
  {
    title: "Oracle Certified Professional Java SE 17 Developer",
    issuer: "Oracle",
    date: "Issued November 2025",
    logo: "/logos/aws.svg",
    link: "https://drive.google.com/file/d/15DcRo8rC7-V6j3Wt__baJscBmUzsmHZw/view",
    description: "Professional certification validating core Java skills"
  },
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    date: "Issued February 2026",
    logo: "/public/aws-logo.svg",
    link: "https://www.credly.com/badges/e0a634cf-0741-4077-83ca-778316f146e4/print",
    description: "Foundational MongoDb Certification"
  },
  {
    title: "CS50 - Python ",
    issuer: "Harvard University",
    date: "Issued 2026",
    logo: "/public/aws-logo.svg",
    link: "https://certificates.cs50.io/23d52fe1-af8e-42ff-abdf-dced63eb8c24.pdf?size=letter",
    description: "Foundational Python Certification"
  },
  {
    title: "Oracle Certified Professional Oracle Linux 8 System Administrator",
    issuer: "Oracle",
    date: "Issued December 2025",
    logo: "/public/cncf-logo.svg",
    link: "https://drive.google.com/file/d/1Uwq3ihxUi5ZyZRf9QyUmoLBqyFPLf4Q7/view",
    description: "Professional Linux Certification"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Issued April 2025",
    logo: "/public/cncf-logo.svg",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S143730155104239448",
    description: "Foundational Cloud Certification"
  },
  {
    title: "DSA Training",
    issuer: "Programming Pathshala",
    date: "Issued August 2025",
    logo: "/public/cncf-logo.svg",
    link: "https://certificates.programmingpathshala.com/v2/doc?id=1b4ede7bb48456e0e3f6ffb7b93cdd1415c6480aa4142b50d7ac9113266b559a",
    description: "Foundational DSA Certification"
  }
]

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="max-w-5xl">
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
          Certifications
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Professional validations of my technical skills and knowledge.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group h-full hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-3">
                <div className="relative h-16 w-16 mx-auto mb-4 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl blur-sm group-hover:opacity-100 opacity-50 transition-opacity" />
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    fill
                    className="object-contain p-2 relative z-10"
                    sizes="64px"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-center group-hover:text-primary transition-colors truncate">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div className="flex items-center gap-2 justify-center mb-3">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <Badge variant="secondary">{cert.issuer}</Badge>
                </div>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {cert.description}
                </p>
                <p className="text-xs text-muted-foreground/70 text-center font-mono">
                  {cert.date}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary/90 group-hover:text-primary-foreground transition-all justify-center gap-1.5"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Verify Certificate <ExternalLink className="h-3 w-3" />
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
