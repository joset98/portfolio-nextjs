import { Download, ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about-me" className="relative z-10 py-16 bg-background">
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
              <h3 className="mb-2 text-4xl font-bold text-primary">15+</h3>
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
  )
}