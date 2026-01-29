import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Project as ProjectType } from "@/app/types"

interface ProjectsProps {
  projects: ProjectType[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative z-10 py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-5xl font-bold text-center">Ultimos Proyectos</h2>

        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}>
            <div className="w-full md:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-600/10 text-pink-600 border border-pink-600/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-2 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-colors rounded-full">
                  <ArrowUpRight size={25} />
                  <span className="mr-2">Visitar</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-colors rounded-full"
                >
                  <Github size={25} />
                  <span className="mr-2">Ver Código</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}