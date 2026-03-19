import { ResumeSection } from "@/components/sections/resume-section"
import { GlobalBackground } from "@/components/global-background"

export default function ResumePage() {
  return (
    <main className="flex flex-col">
      <GlobalBackground />
      <ResumeSection />
    </main>
  )
}
