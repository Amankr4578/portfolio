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
    title: "Oracle Certified Professional: Java SE Programmer",
    issuer: "Oracle",
    date: "Issued November 2024",
    logo: "/logos/aws.svg", // Reuse existing, replace with actual
    link: "https://www.credly.com/badges/your-oracle-badge",
    description: "Professional certification validating core Java skills"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Issued February 2024",
    logo: "/public/aws-logo.svg",
    link: "https://www.credly.com/badges/your-azure-badge",
    description: "Foundational Azure cloud knowledge certification"
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Issued August 2024",
    logo: "/public/aws-logo.svg",
    link: "https://www.credly.com/badges/your-aws-badge",
    description: "Develop and deploy applications on AWS"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "Issued May 2024",
    logo: "/public/cncf-logo.svg",
    link: "https://www.cncf.io/certification/cka/",
    description: "Hands-on Kubernetes cluster administration"
  },
  // Add more as needed
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
