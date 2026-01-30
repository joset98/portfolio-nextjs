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
      <section id="experience" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-5xl font-bold text-center">Experiencia</h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground">
            A lo largo de mi carrera, he tenido el privilegio de trabajar en diversos proyectos que me han permitido crecer como desarrollador.
          </p>

          <div className="relative">
            {/* Línea central vertical */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-3/4 h-full w-px bg-primary origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <div className="grid grid-cols-1 gap-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between">
                  {index % 2 !== 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative md:w-5/12 p-6 bg-card border border-border rounded-lg md:mr-8 w-full"
                    >
                      <div className="flex flex-col">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold">{exp.company}</h3>
                          <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        </div>
                        <h4 className="mb-2 font-medium">{exp.role}</h4>
                        <ul className="pl-5 mt-2 space-y-2 text-sm list-disc text-muted-foreground">
                          {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-600/10 text-pink-600 border border-pink-600/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : <div className="hidden md:block w-5/12"></div>}

                  {/* circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary/50"
                  ></motion.div>

                  {index % 2 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative md:w-5/12 p-6 bg-card border border-border rounded-lg md:ml-8 w-full"
                    >
                      <div className="flex flex-col">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold">{exp.company}</h3>
                          <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        </div>
                        <h4 className="mb-2 font-medium">{exp.role}</h4>
                        <ul className="pl-5 mt-2 space-y-2 text-sm list-disc text-muted-foreground">
                          {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-600/10 text-pink-600 border border-pink-600/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : <div className="hidden md:block w-5/12"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects projects={projects} onProjectClick={handleProjectClick}/>

      {/* Skills Section */}
      <SkillsSection skills={skills}/>

      {/* About Me Section */}
      <AboutSection />

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-5xl font-bold text-center">Contacto</h2>
          <p className="max-w-xl mx-auto text-center text-gray-600 mb-12">
            ¿Tienes alguna pregunta o quieres trabajar juntos? No dudes en contactarme.
          </p>

          <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-inputBackground border border-inputBorder focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-inputBackground border border-inputBorder focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-inputBorder focus:border-primary outline-none transition-colors resize-none bg-inputBackground"
                ></textarea>
              </div>
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="flex justify-center items-center gap-2 px-8 py-3 text-white bg-primary bg-pink-600 rounded-full hover:bg-pink-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? 'Enviando...' : (
                    <>
                      <ArrowRight />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
                {formStatus === 'success' && (
                  <p className="mt-4 text-green-500">¡Mensaje enviado con éxito! Gracias por contactarme.</p>
                )}
                {formStatus === 'error' && (
                  <p className="mt-4 text-red-500">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  )
}
