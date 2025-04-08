"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, FileText, Sun, Moon } from "lucide-react"

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
            <a href="#inicio" className="text-muted-foreground hover:text-primary">
              Inicio              
            </a>
            <a href="#experiencia" className="text-muted-foreground hover:text-primary">
              Experiencia
            </a>
            <a href="#proyectos" className="text-muted-foreground hover:text-primary">
              Proyectos
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary">
              Skills
            </a>
            <a href="#sobre-mi" className="text-muted-foreground hover:text-primary">
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
            <button className="px-4 py-2 text-primary-foreground bg-primary rounded-full">Contáctame</button>
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
        <button className="px-6 py-3 mb-12 text-white bg-pink-600 rounded-full">Contáctame</button>
        <div className="flex space-x-6">
          <a href="#" className="text-pink-600 hover:text-pink-700">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-700">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-700">
            <FileText size={24} />
            <span className="sr-only">Resume</span>
          </a>
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

