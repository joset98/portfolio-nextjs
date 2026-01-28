"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, FileText, Sun, Moon, ArrowRight, ArrowUpRight, Download } from "lucide-react"
import projectData from "./app/data/projects.json"
import experienceData from "./app/data/experience.json"
import skillsData from "./app/data/skills.json";


type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
};

type Skills = {
  [category: string]: string[];
};

export default function Portfolio() {
  const { setTheme, resolvedTheme } = useTheme();
  const [experience, setExperience] = useState<Experience[]>(experienceData || [])
  const [projects, setProjects] = useState<Project[]>(projectData || [])
  const [skills, setSkills] = useState<Skills | null>(skillsData || null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStatus === 'loading') return;

    setFormStatus("loading");
    // Simulate API call
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
      <header className="relative z-10 w-full bg-background border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="text-xl font-bold text-primary">JoseT</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-muted-foreground hover:text-primary font-bold">
              Inicio
            </a>
            <a href="#experiencia" className="text-muted-foreground hover:text-primary font-bold">
              Experiencia
            </a>
            <a href="#proyectos" className="text-muted-foreground hover:text-primary font-bold">
              Proyectos
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary font-bold">
              Skills
            </a>
            <a href="#sobre-mi" className="text-muted-foreground hover:text-primary font-bold">
              Sobre mí
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="px-6 py-2 text-white rounded-full bg-primary bg-pink-600 hover:bg-pink-700 transition-colors">
              <a className="flex justify-between gap-2" href="#contact">
                <div>
                  <ArrowRight />
                </div>
                Contáctame
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 text-center bg-background">
        <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src="assets/user-profile.jpg"
            alt="Jose"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Hey, Soy Jose</h2>
        <h1 className="mb-6 text-5xl font-black tracking-tight uppercase">Fullstack Engineer</h1>
        <p className="max-w-lg mb-8 text-gray-600">
          Ingeniero de Software Fullstack con +4 años de experiencia optimizando soluciones web. Experto en el stack Node.js/React/PHP, he logrado reducir tiempos de carga en un 30% y elevar la fiabilidad del sistema en un 15% mediante ingeniería de calidad.
        </p>
        <button className="px-6 py-3 mb-12 text-white rounded-full bg-primary bg-pink-600 hover:bg-pink-700 transition-colors">
          <a className="flex justify-between gap-2" href="#contact">
            <div>
              <ArrowRight />
            </div>
            Contáctame
          </a>
        </button>
        <div className="flex space-x-6">
          <div className="shadow-md bg-socialBtnBg rounded p-1">
            <a href="#" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700 hover:opacity-75 transition-opacity shadow-primary-500">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          <div className="shadow-md bg-socialBtnBg rounded p-1">
            <a href="#" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700 hover:opacity-75 transition-opacity">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <div className="shadow-md bg-socialBtnBg rounded p-1">
            <a href="#" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700 hover:opacity-75 transition-opacity">
              <FileText size={24} />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="relative z-10 py-16 bg-background">
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
      <section id="proyectos" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-5xl font-bold text-center">Ultimos Proyectos</h2>

          {/* First Project */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1VowrrelEJvIlK2CU1tLluQdL5Aq4P.png"
                alt="Landing Page Company Yourle"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Landing Page Company Yourle</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-3 px-6 py-2 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-colors rounded-full">
                  <ArrowUpRight size={25} />
                  <span className="mr-2">Visitar</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-colors rounded-full"
                >
                  <Github size={25} />
                  <span className="mr-2">
                    Ver Código
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1VowrrelEJvIlK2CU1tLluQdL5Aq4P.png"
                alt="Landing Page Company Yourle"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Landing Page Company Yourle</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-3 px-6 py-2 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-colors rounded-full">
                  <ArrowUpRight size={25} />
                  <span className="mr-2">Visitar</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-colors rounded-full"
                >
                  <Github size={25} />
                  <span className="mr-2">
                    Ver Código
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-5xl font-bold text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills && Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="p-6 bg-card border border-pink-100 rounded-lg transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-5xl font-bold text-center">Sobre mí</h2>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Resumen Profesional</h3>
              <p className="text-muted-foreground">
                Soy un Ingeniero de Software Fullstack apasionado por construir soluciones web escalables y de alto rendimiento. Con más de 4 años de experiencia, me especializo en el ecosistema de Node.js, React y PHP, liderando proyectos desde la arquitectura inicial hasta la gestión avanzada de bases de datos.
              </p>
              <h3 className="pt-4 text-2xl font-bold text-primary">Lo que aporto a los proyectos</h3>
              <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                <li><span className="font-semibold">Optimización de Performance:</span> He logrado reducir los tiempos de carga en un 30% mediante la refactorización de lógica y optimización de renderizado.</li>
                <li><span className="font-semibold">Ingeniería de Calidad:</span> Incremento la fiabilidad de los sistemas en un 15% implementando estrategias de testing automatizado (Unit/E2E) con Jest y Cypress.</li>
                <li><span className="font-semibold">Modernización Arquitectónica:</span> Experto en migrar sistemas heredados hacia arquitecturas modernas basadas en Next.js, mejorando la mantenibilidad y la experiencia del usuario.</li>
              </ul>
              <div className="flex gap-4 pt-4">
                <a href="/cv-jose-tovar.pdf" download className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary bg-pink-600 hover:bg-pink-700 transition-colors rounded-full">
                  <Download size={20} />
                  <span>Descargar CV</span>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 text-primary text-pink-600 border border-primary border-pink-600 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <ArrowRight size={20} />
                  <span>Contactar</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 text-center border rounded-lg border-border">
                <h3 className="mb-2 text-4xl font-bold text-primary">4+</h3>
                <p className="text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="p-6 text-center border rounded-lg border-border">
                <h3 className="mb-2 text-4xl font-bold text-primary">5+</h3>
                <p className="text-muted-foreground">Proyectos completados</p>
              </div>
              <div className="col-span-2 p-6 text-center border rounded-lg border-border">
                <h3 className="mb-2 text-4xl font-bold text-primary">100%</h3>
                <p className="text-muted-foreground">Ownership y Compromiso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <footer className="relative z-10 bg-primary text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold">JoseT</h2>
            <div className="flex space-x-6">
              <div className="shadow-md bg-white rounded p-1">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Github size={24} className="text-primary" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
              <div className="shadow-md bg-white rounded p-1">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Linkedin size={24} className="text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
              <div className="shadow-md bg-white rounded p-1">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <FileText size={24} className="text-primary" />
                  <span className="sr-only">Resume</span>
                </a>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Copyright © {new Date().getFullYear()} JoseT. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
