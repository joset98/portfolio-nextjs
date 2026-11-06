"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowUpRight, Copy, Check, Linkedin, Mail } from "lucide-react"
import { CONTACT, useLang } from "@/app/i18n"

// Counts a figure like "−30%" up from 0 once on mount; the server HTML already holds the final value.
function useCountIn(text: string, enabled: boolean) {
  const [shown, setShown] = useState(text)
  useEffect(() => {
    const m = text.match(/\d+(?:[.,]\d+)?/)
    if (!enabled || !m || matchMedia("(prefers-reduced-motion: reduce)").matches) return setShown(text)
    const target = parseInt(m[0].replace(/[.,]/g, ""), 10) // figures are integers; . and , are thousands separators
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / 900, 1)
      const n = Math.round(target * (1 - (1 - p) ** 3))
      setShown(text.replace(m[0], String(p < 1 ? n : m[0])))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, enabled])
  return shown
}

// All our deltas are improvements, so color follows "good", the arrow follows the sign.
export function Delta({ value, dir, good = true, countIn = false, className = "" }: { value: string; dir: "up" | "down"; good?: boolean; countIn?: boolean; className?: string }) {
  const { t } = useLang()
  const final = value.replace(/^[+−-]/, "")
  const shown = useCountIn(final, countIn)
  return (
    <span className={`num font-sans font-bold whitespace-nowrap ${good ? "text-gain" : "text-loss"} ${className}`}>
      <span aria-hidden>{dir === "up" ? "▲" : "▼"} </span>
      <span className="sr-only">{dir === "up" ? t.up : t.down} {final}</span>
      <span aria-hidden>{shown}</span>
    </span>
  )
}

export function CopyEmail({ className = "" }: { className?: string }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${CONTACT.email}`
    }
  }
  return (
    <button onClick={copy} className={className} aria-live="polite">
      {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
      {copied ? t.copied : t.copy}
    </button>
  )
}

export function HeroSection() {
  const { t, indicators, skills } = useLang()
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t.emailSubject)}`
  const ticker = [...(skills.Frontend ?? []).slice(0, 3), ...(skills.Backend ?? []).slice(0, 2), "PostgreSQL", "Flutter", "Jest", "Cypress"]

  return (
    <section id="top" className="px-4 mx-auto max-w-page sm:px-6">
      <p className="flex gap-x-4 gap-y-1 py-2 overflow-hidden border-b border-foreground label whitespace-nowrap">
        <span className="text-muted-foreground">{t.tradesIn}</span>
        {ticker.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </p>

      <div className="grid gap-8 py-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-0">
        <article className="lg:pr-8 lg:border-r lg:border-border">
          <h2 className="font-display font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.4rem,5.4vw,4.75rem)]">
            {t.headline}
          </h2>
          <div className="grid grid-cols-[auto_1fr] items-start gap-4 mt-6 sm:gap-6">
            <Image
              src="/assets/user-profile.jpg"
              alt="Jose Miguel Tovar"
              width={112}
              height={140}
              priority
              className="object-cover w-16 h-20 sm:w-28 sm:h-36 grayscale contrast-125"
            />
            <div>
              <p className="max-w-[60ch] text-lg leading-relaxed sm:text-xl first-letter:font-display first-letter:text-[3.4em] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-2 first-letter:font-bold">
                {t.lede}
              </p>
              <p className="mt-4 label text-muted-foreground">{t.byline}</p>
            </div>
          </div>
        </article>

        <aside className="flex flex-col gap-8 lg:pl-8">
          <div>
            <h3 className="pb-2 border-b-2 border-foreground label">{t.indicatorsTitle}</h3>
            <table className="w-full font-sans text-sm">
              <thead className="sr-only">
                <tr><th>{t.colIndicator}</th><th>{t.colChange}</th><th>{t.colSource}</th></tr>
              </thead>
              <tbody>
                {indicators.map((r) => (
                  <tr key={r.name} className="border-b border-border">
                    <td className="py-2 pr-2">{r.name}</td>
                    <td className="py-2 pr-2 text-right"><Delta value={r.value} dir={r.dir} countIn /></td>
                    <td className="py-2 text-xs text-right text-muted-foreground">{r.src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="flex items-baseline gap-2 pt-3">
              <span className="font-display text-4xl font-bold num">6+</span>
              <span className="label text-muted-foreground">{t.yearsLabel}</span>
            </p>
          </div>

          <div className="p-5 border-2 border-foreground">
            <h3 className="font-display text-2xl font-bold leading-tight">{t.deskTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.deskBody}</p>
            <a href={mailto} className="w-full mt-4 btn-ink">
              <Mail size={16} aria-hidden /> {t.writeEmail}
            </a>
            <p className="mt-3 font-sans text-sm break-all num">{CONTACT.email}</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <CopyEmail className="btn-line !px-3 !py-2" />
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn-line !px-3 !py-2">
                <Linkedin size={16} aria-hidden /> LinkedIn <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
