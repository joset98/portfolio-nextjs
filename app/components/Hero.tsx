import Image from "next/image"
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react"

export function HeroSection() {
  return (
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
          <a href="https://github.com/joset98" target="_blank" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700 hover:opacity-75 transition-opacity shadow-primary-500">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        <div className="shadow-md bg-socialBtnBg rounded p-1">
          <a href="https://www.linkedin.com/in/jose-miguel-tovar/" target="_blank" className="text-primary hover:text-primary text-pink-600 hover:text-pink-700 hover:opacity-75 transition-opacity">
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
  )
}
