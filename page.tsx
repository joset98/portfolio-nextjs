"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, FileText, Sun, Moon, ArrowRight } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Update class when darkMode changes
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="flex justify-between px-6 py-2 text-primary-foreground rounded-full bg-primary bg-pink-600">
              <div className="pr-2">
                <ArrowRight />
              </div>
              Contáctame
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
        <h2 className="mb-2 text-2xl font-medium">Hey, Soy Jose</h2>
        <h1 className="mb-6 text-5xl font-bold tracking-tight">DESARROLLADOR WEB</h1>
        <p className="max-w-lg mb-8 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <button className="flex justify-between px-6 py-3 mb-12 text-white rounded-full bg-primary bg-pink-600">
          <div className="pr-2">
            <ArrowRight />
          </div>
          Contáctame
        </button>
        <div className="flex space-x-6">
          <a href="#" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700">
            <FileText size={24} />
            <span className="sr-only">Resume</span>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Experiencia</h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          <div className="relative">
            {/* Línea central vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary"></div>

            <div className="grid grid-cols-1 gap-8">
              {/* Primer item */}
              <div className="relative flex items-center justify-between">
                <div className="hidden md:block w-5/12"></div>
                {/* circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary/50"></div>
                <div className="relative md:w-5/12 p-6 bg-card border border-border rounded-lg md:ml-8">
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">Nexus Technologies</h3>
                      <span className="text-sm text-muted-foreground">09/11/2022 - 12/12/2023</span>
                    </div>
                    <h4 className="mb-2 font-medium">Desarrollador Web</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Segundo item */}
              <div className="relative flex items-center justify-between">
                <div className="relative md:w-5/12 p-6 bg-card border border-border rounded-lg md:mr-8">
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">Tech Solutions</h3>
                      <span className="text-sm text-muted-foreground">03/08/2021 - 08/11/2022</span>
                    </div>
                    <h4 className="mb-2 font-medium">Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary/50"></div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              {/* Tercer item */}
              <div className="relative flex items-center justify-between">
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary/50"></div>
                <div className="relative md:w-5/12 p-6 bg-card border border-border rounded-lg md:ml-8">
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">Digital Innovations</h3>
                      <span className="text-sm text-muted-foreground">01/03/2020 - 02/08/2021</span>
                    </div>
                    <h4 className="mb-2 font-medium">Web Developer Jr</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cuarto item */}
              <div className="relative flex items-center justify-between">
                <div className="relative md:w-5/12 p-6 bg-card border border-border rounded-lg md:mr-8">
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">StartUp Hub</h3>
                      <span className="text-sm text-muted-foreground">06/01/2019 - 12/02/2020</span>
                    </div>
                    <h4 className="mb-2 font-medium">Desarrollador Trainee</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary/50"></div>
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Ultimos Proyectos</h2>

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
                <a href="#" className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-full">
                  <span className="mr-2">Visitar</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-pink-600 text-pink-600 rounded-full"
                >
                  <span className="mr-2">Ver Código</span>
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
                <a href="#" className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-full">
                  <span className="mr-2">Visitar</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-pink-600 text-pink-600 rounded-full"
                >
                  <span className="mr-2">Ver Código</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Frontend Skills */}
            <div className="p-6 border border-pink-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-pink-600">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  HTML5
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  CSS3
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  React.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Next.js
                </li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="p-6 border border-pink-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-pink-600">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Express
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  REST APIs
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="p-6 border border-pink-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-pink-600">Herramientas</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Git
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  GitHub
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  VS Code
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Figma
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Postman
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="p-6 border border-pink-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-pink-600">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Trabajo en equipo
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Comunicación
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Resolución de problemas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Adaptabilidad
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  Proactividad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Sobre mí</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 text-white bg-pink-600 rounded-full">Descargar CV</button>
                <button className="px-6 py-3 text-pink-600 border border-pink-600 rounded-full">Contactar</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-pink-100 rounded-lg">
                <h3 className="text-3xl font-bold text-pink-600 mb-2">2+</h3>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div className="p-6 border border-pink-100 rounded-lg">
                <h3 className="text-3xl font-bold text-pink-600 mb-2">10+</h3>
                <p className="text-gray-600">Proyectos completados</p>
              </div>
              <div className="p-6 border border-pink-100 rounded-lg">
                <h3 className="text-3xl font-bold text-pink-600 mb-2">15+</h3>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
              <div className="p-6 border border-pink-100 rounded-lg">
                <h3 className="text-3xl font-bold text-pink-600 mb-2">5+</h3>
                <p className="text-gray-600">Certificaciones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative z-10 py-16 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">Contacto</h2>
          <p className="max-w-xl mx-auto text-center text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <form className="max-w-xl mx-auto">
            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Mensaje"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-600 focus:ring-1 focus:ring-pink-600 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
                >
                  Contáctame
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-pink-600 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold">JoseT</h2>
            <div className="flex space-x-6">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <FileText size={24} />
                <span className="sr-only">Resume</span>
              </a>
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

