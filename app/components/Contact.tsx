"use client"

import { ArrowUpRight, Download, Linkedin } from "lucide-react"
import { CONTACT, useLang } from "@/app/i18n"
import { CopyEmail } from "./Hero"

export function ContactSection() {
  const { t, mailto } = useLang()

  return (
    <section id="contact" className="px-4 mx-auto max-w-page sm:px-6">
      <div className="py-16 text-center bg-foreground text-background sm:py-24 px-4">
        <h2 className="font-display font-bold tracking-[-0.02em] text-[clamp(2.5rem,7vw,5.5rem)] leading-none">{t.closeTitle}</h2>
        <p className="max-w-[48ch] mx-auto mt-5 text-lg opacity-80">{t.closeBody}</p>
        <a href={mailto} className="inline-block mt-8 font-display font-bold underline break-all text-[clamp(1.25rem,3.4vw,2.5rem)] decoration-2 hover:opacity-80">
          {CONTACT.email}
        </a>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <CopyEmail className="btn-line !border-background hover:!bg-background hover:!text-foreground" />
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn-line !border-background hover:!bg-background hover:!text-foreground">
            <Linkedin size={16} aria-hidden /> LinkedIn <ArrowUpRight size={14} aria-hidden />
          </a>
          <a href={CONTACT.cv} download="CV - Jose Tovar.pdf" className="btn-line !border-background hover:!bg-background hover:!text-foreground">
            <Download size={16} aria-hidden /> {t.downloadCv}
          </a>
        </div>
      </div>
    </section>
  )
}
