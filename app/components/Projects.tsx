import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Project as ProjectType } from "@/app/types"
import { ProjectTechnologies } from "./ProjectTechnologies"

interface ProjectsProps {
  projects: ProjectType[];
  onProjectClick: (project: ProjectType) => void;
}

export function Projects({ projects, onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="relative z-10 py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-5xl font-extrabold text-center tracking-tight">
          Últimos Proyectos
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group flex flex-col items-center gap-8 md:gap-12 lg:gap-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2" onClick={() => onProjectClick(project)}>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 
                  className="text-3xl md:text-4xl font-bold mb-4 cursor-pointer hover:text-primary transition-colors leading-tight"
                  onClick={() => onProjectClick(project)}
                >
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <ProjectTechnologies technologies={project.technologies} />
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary border border-primary border-pink-600 text-white hover:bg-pink-700 transition-all shadow-md hover:shadow-lg rounded-full font-medium"
                  >
                    <ArrowUpRight size={22} />
                    <span>Visitar</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-pink-600 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-all rounded-full font-medium"
                  >
                    <Github size={22} />
                    <span>Ver Código</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
