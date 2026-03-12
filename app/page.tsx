import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section" // Added
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { GlobalBackground } from "@/components/global-background"

export default function Home() {
  return (
    <main className="flex flex-col">
      <GlobalBackground />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection /> {/* Added */}
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
