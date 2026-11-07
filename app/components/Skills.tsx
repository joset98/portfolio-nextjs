"use client"

import { useLang } from "@/app/i18n"
import { SectionHead } from "./experience/ExperienceHistory"

export function SkillsSection() {
  const { t, skills } = useLang()

  return (
    <section id="skills" className="px-4 py-16 mx-auto max-w-page sm:px-6">
      <SectionHead title={t.stackTitle} />
      <div className="grid border-t-2 border-foreground sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="py-4 border-b border-border sm:pr-5 lg:border-b-0 lg:border-r lg:pl-5 lg:first:pl-0 lg:last:border-r-0">
            <h3 className="pb-2 mb-2 border-b border-foreground label">
              {category} <span className="text-muted-foreground num">({items.length})</span>
            </h3>
            <ul className="font-sans text-sm">
              {items.map((s) => (
                <li key={s} className="py-1.5 border-b border-dotted border-border last:border-0">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
