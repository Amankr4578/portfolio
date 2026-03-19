"use client"

import Image from "next/image"
import { SectionWrapper } from "@/components/section-wrapper"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            View and download a full version of my resume. Click below to open the resume preview popup.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="h-4 w-4" /> View Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] sm:w-[95vw] md:w-[90vw] max-w-3xl max-h-[90vh] p-0 flex flex-col">
              <DialogHeader className="p-4 sm:p-6 pb-0 border-b">
                <DialogTitle className="mb-1">Resume Preview</DialogTitle>
                <DialogDescription>
                  You can download the resume as PDF or image below.
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 w-full overflow-y-auto rounded-lg">
                <div className="relative w-full bg-background flex items-center justify-center p-2 sm:p-4">
                  <Image
                    src="/logos/resume.jpg"
                    alt="Resume preview"
                    width={850}
                    height={1100}
                    className="w-full h-auto object-contain max-w-2xl"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="secondary" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </a>
                </Button>
                <Button asChild>
                  <a href="/logos/resume.jpg" target="_blank" rel="noopener noreferrer" download>
                    <Download className="mr-2 h-4 w-4" /> Download JPG
                  </a>
                </Button>
              </div>

              <DialogFooter className="mt-6 justify-end">
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
