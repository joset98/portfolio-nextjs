"use client"

import Image from "next/image"
import { Github, Images } from "lucide-react"
import { Project } from "@/app/types"
import { useLang } from "@/app/i18n"
import { SectionHead } from "./experience/ExperienceHistory"

export function Projects({ onProjectClick }: { onProjectClick: (project: Project) => void }) {
  const { t, projects } = useLang()
  const [lead, ...rest] = projects

  return (
    <section id="projects" className="px-4 py-16 mx-auto max-w-page sm:px-6">
      <SectionHead title={t.projectsTitle} sub={t.projectsSub} />

      {lead && (
        <article className="grid gap-6 pb-10 border-b border-foreground lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-8">
          <Shot project={lead} onClick={() => onProjectClick(lead)} priority className="aspect-[16/10]" />
          <div>
            <Meta project={lead} />
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">{lead.title}</h3>
            <p className="mt-4 text-lg leading-relaxed">{lead.description}</p>
            <Metrics project={lead} />
            <Stack items={lead.technologies} />
            <Actions project={lead} onOpen={() => onProjectClick(lead)} />
          </div>
        </article>
      )}

      <div className="grid md:grid-cols-2">
        {rest.map((p, i) => (
          <article
            key={p.id}
            className={`grid gap-5 py-8 border-b border-border sm:grid-cols-[12rem_1fr] ${i % 2 === 0 ? "md:pr-8 md:border-r" : "md:pl-8"}`}
          >
            <Shot project={p} onClick={() => onProjectClick(p)} className="aspect-[4/3]" />
            <div>
              <Meta project={p} />
              <h3 className="mt-1 font-display text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground line-clamp-3">{p.description}</p>
              <Metrics project={p} small />
              <Stack items={p.technologies.slice(0, 5)} />
              <Actions project={p} onOpen={() => onProjectClick(p)} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Shot({ project, onClick, className, priority }: { project: Project; onClick: () => void; className: string; priority?: boolean }) {
  const { t } = useLang()
  return (
    <button onClick={onClick} className={`relative block w-full overflow-hidden border border-foreground bg-paper2 group ${className}`} aria-label={`${t.gallery}: ${project.title}`}>
      <Image src={project.imageUrl} alt="" fill priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
    </button>
  )
}

function Meta({ project }: { project: Project }) {
  const { t } = useLang()
  const shots = new Set([project.imageUrl, ...(project.galleryImages ?? [])]).size
  return (
    <p className="flex gap-3 label">
      <span className="px-1.5 py-0.5 bg-foreground text-background">{project.id.replace(/-/g, "").slice(0, 4).toUpperCase()}</span>
      <span className="self-center text-muted-foreground num">{shots} {t.screens}</span>
    </p>
  )
}

function Stack({ items }: { items: string[] }) {
  return <p className="mt-3 font-sans text-xs text-muted-foreground">{items.join(" · ")}</p>
}

export function repoLinks(project: Project, t: ReturnType<typeof useLang>["t"]) {
  const two = project.liveUrl && project.liveUrl !== project.githubUrl
  return [
    project.githubUrl && { href: project.githubUrl, label: two ? t.codeApi : t.code },
    two && { href: project.liveUrl, label: t.codeWeb },
  ].filter(Boolean) as { href: string; label: string }[]
}

function Actions({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t } = useLang()
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 font-sans text-sm font-semibold">
      <button onClick={onOpen} className="inline-flex items-center gap-1.5 underline">
        <Images size={15} aria-hidden /> {t.gallery}
      </button>
      {repoLinks(project, t).map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline">
          <Github size={15} aria-hidden /> {l.label}
        </a>
      ))}
    </div>
  )
}

function Metrics({ project, small }: { project: Project; small?: boolean }) {
  if (!project.metrics?.length) return null
  return (
    <dl className="grid grid-cols-3 gap-3 mt-4 border-t border-border pt-3">
      {project.metrics.map((m) => (
        <div key={m.label} className="flex flex-col-reverse justify-end">
          <dt className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</dt>
          <dd className={`font-display font-bold leading-none num ${small ? "text-lg" : "text-2xl"}`}>{m.value}</dd>
        </div>
      ))}
    </dl>
  )
}
