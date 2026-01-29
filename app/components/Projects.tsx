import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Project as ProjectType } from "@/app/types"
import { ProjectTechnologies } from "./ProjectTechnologies"

interface ProjectsProps {
  projects: ProjectType[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative z-10 py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-5xl font-bold text-center">Ultimos Proyectos</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <ProjectTechnologies technologies={project.technologies} />
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-2 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-colors rounded-full"
                  >
                    <ArrowUpRight size={25} />
                    <span className="mr-2">Visitar</span>
                  </a>
                  <a
                    href={project.githubUrl}
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
      </div>
    </section>
  )
}