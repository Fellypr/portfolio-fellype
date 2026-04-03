import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperiencesSection } from "@/components/experiences-section"
import { ProjectsSection } from "@/components/projects-section"
import { CoursesSection } from "@/components/courses-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Project } from "@/lib/types"
import projectsData from "@/public/data/projects.json"

const projects: Project[] = projectsData

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection projects={projects} />
        <CoursesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
