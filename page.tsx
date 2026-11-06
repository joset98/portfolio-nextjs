"use client"

import { useEffect, useState } from "react"
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

export default function Portfolio() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const projectId = searchParams.get('project');
    setSelectedProject(projectId ? projectData.find(p => p.id === projectId) ?? null : null);
  }, [searchParams]);

  const handleProjectClick = (project: Project) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('project', project.id);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCloseModal = () => {
    router.push(pathname, { scroll: false });
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
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  )
}
