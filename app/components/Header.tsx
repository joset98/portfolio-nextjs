"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Download } from "lucide-react"
import { CONTACT, useLang } from "@/app/i18n"

export function Header() {
  const { setTheme, resolvedTheme } = useTheme()
  const { lang, setLang, t } = useLang()
  const dark = resolvedTheme === "dark"
  const links = [
    ["#experience", t.nav.experience],
    ["#projects", t.nav.projects],
    ["#skills", t.nav.stack],
    ["#about-me", t.nav.profile],
    ["#contact", t.nav.contact],
  ]

  return (
    <header className="px-4 mx-auto max-w-page sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4 pt-6 pb-4">
        <a href="#top" className="no-underline">
          <h1 className="font-display font-extrabold leading-none tracking-[-0.03em] text-[clamp(2rem,5vw,3rem)]">Jose Tovar</h1>
          <p className="mt-2 font-sans text-sm text-muted-foreground">{t.tagline}</p>
        </a>
        <div className="flex items-center gap-1 label">
          <button onClick={() => setLang(lang === "es" ? "en" : "es")} className="px-2 py-1 hover:underline" lang={lang === "es" ? "en" : "es"}>
            {t.langSwitch}
          </button>
          <span aria-hidden className="text-border">|</span>
          <button
            onClick={() => setTheme(dark ? "light" : "dark")}
            className="inline-flex items-center gap-1.5 px-2 py-1 hover:underline"
          >
            {dark ? <Sun size={13} aria-hidden /> : <Moon size={13} aria-hidden />}
            {dark ? t.themeLight : t.themeDark}
          </button>
        </div>
      </div>

      <nav aria-label="Secciones" className="flex items-center justify-between gap-4 py-2 border-y border-foreground">
        <ul className="flex gap-5 overflow-x-auto label">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="whitespace-nowrap hover:underline">{label}</a>
            </li>
          ))}
        </ul>
        <a href={CONTACT.cv} download="CV - Jose Tovar.pdf" className="inline-flex items-center gap-1.5 shrink-0 label hover:underline">
          <Download size={13} aria-hidden /> {t.cv}
        </a>
      </nav>
    </header>
  )
}
