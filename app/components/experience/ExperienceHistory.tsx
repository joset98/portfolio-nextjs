"use client"

import { motion } from "framer-motion"
import { Experience as ExperienceType } from "@/app/types"
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceProps {
  experience: ExperienceType[];
}

export function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="relative z-10 py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-5xl font-bold text-center">Experiencia</h2>
        <p className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground">
          A lo largo de mi carrera, he tenido el privilegio de trabajar en diversos proyectos que me han permitido crecer como desarrollador.
        </p>

        <div className="relative">
          {/* Vertical center line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 gap-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between">
                {
                  index % 2 !== 0 ?
                    (<ExperienceCard experience={exp} isToRight={index % 2 !== 0} />)
                    : <div className="hidden md:block flex-1"></div>
                }

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary/50"
                ></motion.div>

                <div className="hidden md:block flex-1"></div>
                {
                  index % 2 === 0 ?
                    (<ExperienceCard experience={exp} isToRight={index % 2 !== 0} />)
                    : <div className="hidden md:block flex-1"></div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}