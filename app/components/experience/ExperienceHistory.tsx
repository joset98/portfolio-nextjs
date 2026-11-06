"use client"

import { ChevronDown } from "lucide-react"
import { useLang } from "@/app/i18n"
import { Delta } from "../Hero"

export function ExperienceSection() {
  const { t, experience } = useLang()

  return (
    <section id="experience" className="px-4 py-16 mx-auto max-w-page sm:px-6">
      <SectionHead title={t.experienceTitle} sub={t.experienceSub} />

      <div className="hidden md:grid grid-cols-[14rem_1fr_1fr_12rem_1.5rem] gap-4 pb-2 border-b-2 border-foreground label text-muted-foreground">
        <span>{t.colPeriod}</span><span>{t.colCompany}</span><span>{t.colRole}</span><span className="text-right">{t.colKey}</span><span />
      </div>

      {experience.map((job) => (
        <details key={job.company} className="border-b border-foreground group">
          <summary className="grid grid-cols-[1fr_auto] md:grid-cols-[14rem_1fr_1fr_12rem_1.5rem] gap-x-4 gap-y-1 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-paper2">
            <span className="order-3 col-span-2 text-sm md:order-none md:col-span-1 font-sans text-muted-foreground">{job.duration}</span>
            <span className="font-display text-2xl font-bold leading-tight">{job.company}</span>
            <span className="order-2 col-span-2 md:order-none md:col-span-1 self-center">{job.role}</span>
            <span className="self-center text-right">
              <Delta value={job.highlight.value} dir={job.highlight.dir} className="text-lg" />
              <span className="block text-xs text-muted-foreground font-sans">{job.highlight.label}</span>
            </span>
            <ChevronDown aria-hidden size={18} className="hidden self-center transition-transform md:block group-open:rotate-180" />
          </summary>
          <div className="grid gap-6 pb-8 md:grid-cols-[14rem_1fr] md:gap-4">
            <span className="hidden md:block" />
            <div>
              <ul className="max-w-[70ch] space-y-2 leading-relaxed">
                {job.description.map((d) => (
                  <li key={d} className="pl-4 -indent-4 before:content-['—_']">{d}</li>
                ))}
              </ul>
              <p className="mt-4 font-sans text-sm text-muted-foreground">{job.technologies.join(" · ")}</p>
            </div>
          </div>
        </details>
      ))}
    </section>
  )
}

export function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-1 pt-3 mb-6 rule-double md:flex-row md:items-baseline md:justify-between">
      <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{title}</h2>
      {sub && <p className="text-muted-foreground md:max-w-[40ch] md:text-right">{sub}</p>}
    </div>
  )
}
