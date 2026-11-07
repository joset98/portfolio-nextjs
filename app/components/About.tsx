"use client"

import { useLang } from "@/app/i18n"
import { SectionHead } from "./experience/ExperienceHistory"

export function AboutSection() {
  const { t } = useLang()

  return (
    <section id="about-me" className="px-4 py-16 mx-auto max-w-page sm:px-6">
      <SectionHead title={t.profileTitle} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-0">
        <div className="lg:pr-8 lg:border-r lg:border-border">
          {t.profile.map((p) => (
            <p key={p} className="max-w-[60ch] text-xl leading-relaxed sm:text-2xl font-display">{p}</p>
          ))}
        </div>
        <dl className="lg:pl-8">
          {t.brings.map((b) => (
            <div key={b.h} className="py-4 border-b border-border first:pt-0">
              <dt className="font-sans font-bold">{b.h}</dt>
              <dd className="mt-1 leading-relaxed text-muted-foreground">{b.p}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
