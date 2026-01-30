import { Github, Linkedin, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-primary text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">JoseT</h2>
          <div className="flex space-x-6">
            <div className="shadow-md bg-white rounded p-1">
              <a href="https://github.com/joset98" className="hover:opacity-75 transition-opacity">
                <Github size={24} className="text-primary" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <div className="shadow-md bg-white rounded p-1">
              <a href="https://www.linkedin.com/in/jose-miguel-tovar/" className="hover:opacity-75 transition-opacity">
                <Linkedin size={24} className="text-primary" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="shadow-md bg-white rounded p-1">
              <a
                href="/assets/cv/cv Jose Tovar.pdf"
                download="CV - Jose Tovar.pdf"
                className="hover:opacity-75 transition-opacity"
              >
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
  )
}
