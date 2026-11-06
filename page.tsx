"use client"

import { Suspense } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Project } from "./app/types"
import { Footer } from "./app/components/Footer"
import { Header } from "./app/components/Header"
import { SkillsSection } from "./app/components/Skills"
import { Projects } from "./app/components/Projects"
import { ProjectModal } from "./app/components/ProjectModal"
import projectData from "./app/data/projects.json"
import { HeroSection } from "./app/components/Hero"
import { AboutSection } from "./app/components/About"
import { ContactSection } from "./app/components/Contact"
import { ExperienceSection } from "./app/components/experience/ExperienceHistory"

// Only the modal reads ?project=, so only it bails out of static rendering; the rest of the page ships as HTML.
function ProjectRoute() {
  const router = useRouter();
  const pathname = usePathname();
  const projectId = useSearchParams().get('project');
  const project = projectId ? projectData.find(p => p.id === projectId) ?? null : null;
  return <ProjectModal project={project} onClose={() => router.push(pathname, { scroll: false })} />
}

export default function Portfolio() {
  const router = useRouter();
  const pathname = usePathname();

  const handleProjectClick = (project: Project) => {
    router.push(`${pathname}?project=${encodeURIComponent(project.id)}`, { scroll: false });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <Projects onProjectClick={handleProjectClick} />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ProjectRoute />
      </Suspense>
    </div>
  )
}
