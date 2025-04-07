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

    </div>
  )
}

