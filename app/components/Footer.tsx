"use client"

import { CONTACT, useLang } from "@/app/i18n"

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="px-4 mx-auto max-w-page sm:px-6">
      <div className="flex flex-col gap-3 py-6 mt-10 border-t border-foreground sm:flex-row sm:justify-between label text-muted-foreground">
        <span>© {new Date().getFullYear()} Jose Tovar. {t.rights}</span>
        <span className="flex gap-5">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href={`mailto:${CONTACT.email}`} className="hover:underline">Email</a>
        </span>
      </div>
    </footer>
  )
}
