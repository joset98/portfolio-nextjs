"use client"

import { motion } from "framer-motion"
import { Experience as ExperienceType } from "@/app/types"

interface ExperienceProps {
  experience: ExperienceType;
  isToRight: boolean;
}

export function ExperienceCard({ experience, isToRight }: ExperienceProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: isToRight ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`relative md:w-5/12 p-6 bg-card border border-border rounded-lg ${isToRight ? 'md:mr-8' : 'md:ml-8'} w-full`}>
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <h3 className="font-bold">{experience.company}</h3>
            <span className="text-sm text-muted-foreground">{experience.duration}</span>
          </div>
          <h4 className="mb-2 font-medium">{experience.role}</h4>
          <ul className="pl-5 mt-2 space-y-2 text-sm list-disc text-muted-foreground">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-600/10 text-pink-600 border border-pink-600/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}
