// Plain module (no "use client") so both the server layout and the client provider can read it.
export type Lang = "es" | "en"

export const SEO = {
  es: {
    title: "Jose Tovar · Fullstack Software Engineer",
    description: "Fullstack Software Engineer con 6+ años en Node.js, NestJS, React y Next.js. -30% tiempos de carga, -25% bundle, +15% fiabilidad con tests.",
  },
  en: {
    title: "Jose Tovar · Fullstack Software Engineer",
    description: "Fullstack Software Engineer with 6+ years in Node.js, NestJS, React and Next.js. 30% faster load times, 25% smaller bundles, 15% more reliable with tests.",
  },
} as const

// Saved choice wins; otherwise the first of es/en the browser lists; otherwise English (crawlers send no header).
export function pickLang(cookie: string | undefined, acceptLanguage: string | null): Lang {
  if (cookie === "es" || cookie === "en") return cookie
  const m = acceptLanguage?.toLowerCase().match(/\b(es|en)\b/)
  return (m?.[1] as Lang) ?? "en"
}
