"use client"

import { motion } from "framer-motion"
import { Experience as ExperienceType } from "@/app/types"

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experiencia" className="relative z-10 py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-5xl font-bold text-center">Experiencia</h2>
        <p className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground">
          A lo largo de mi carrera, he tenido el privilegio de trabajar en diversos proyectos que me han permitido crecer como desarrollador.
        </p>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 gap-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-start md:items-center">
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`p-6 bg-card border border-border rounded-lg ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}
                  >
                    <div className="flex flex-col text-left">
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
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"
                ></motion.div>

                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}