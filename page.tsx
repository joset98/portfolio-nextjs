"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, FileText, Sun, Moon, ArrowRight, ArrowUpRight, Download } from "lucide-react"
import { Experience, Project, Skills } from "./app/types"
import { Footer } from "./app/components/Footer"
import { Header } from "./app/components/Header"
import { SkillsSection } from "./app/components/Skills"
import { Projects } from "./app/components/Projects"
import { ProjectModal } from "./app/components/ProjectModal"
import projectData from "./app/data/projects.json"
import experienceData from "./app/data/experience.json"
import skillsData from "./app/data/skills.json";
import { HeroSection } from "./app/components/Hero"
import { AboutSection } from "./app/components/About"
import { ContactSection } from "./app/components/Contact"
import { ExperienceSection } from "./app/components/experience/ExperienceHistory"

export default function Portfolio() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [experience, setExperience] = useState<Experience[]>(experienceData || [])
  const [projects, setProjects] = useState<Project[]>(projectData || [])
  const [skills, setSkills] = useState<Skills | null>(skillsData || null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      const projectToShow = projectData.find(p => p.id === projectId);
      setSelectedProject(projectToShow || null);
    } else {
      setSelectedProject(null);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectClick = (project: Project) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('project', project.id);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCloseModal = () => {
    router.push(pathname, { scroll: false });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStatus === 'loading') return;

    setFormStatus("loading");
    
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000); // Reset after 5 seconds
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-full border-r border-pink-100/10"></div>
          ))}
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px border-t border-pink-100/10"
              style={{ top: `${i * 5}vh` }}
            ></div>
          ))}
      </div>

      {/* Code Decorations */}
      <div className="absolute left-20 top-1/4 text-pink-100/10 text-6xl">{"{"}</div>
      <div className="absolute right-20 top-1/4 text-pink-100/10 text-6xl">{"}"}</div>
      <div className="absolute left-1/3 top-1/2 text-pink-100/10 text-6xl">{"{"}</div>
      <div className="absolute right-1/3 bottom-1/4 text-pink-100/10 text-6xl">{"}"}</div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Experience Section */}
      <ExperienceSection experience={experience} />

      {/* Projects Section */}
      <Projects projects={projects} onProjectClick={handleProjectClick}/>

      {/* Skills Section */}
      <SkillsSection skills={skills}/>

      {/* About Me Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer/>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  )
}
