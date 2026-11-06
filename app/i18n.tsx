"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { Experience, Project, Skills } from "@/app/types"
import experienceEs from "@/app/data/experience.json"
import projectsEs from "@/app/data/projects.json"
import skillsEs from "@/app/data/skills.json"
import en from "@/app/data/en.json"

export type Lang = "es" | "en"

export const CONTACT = {
  email: "jtovar26455462@gmail.com",
  linkedin: "https://www.linkedin.com/in/jose-miguel-tovar/",
  github: "https://github.com/joset98",
  cv: "/assets/cv/cv Jose Tovar.pdf",
}

// Indicator table: every figure comes from experience.json.
const indicators = {
  es: [
    { name: "Tiempo de carga", value: "−30%", dir: "down", src: "Gamifica" },
    { name: "Tamaño del bundle", value: "−25%", dir: "down", src: "Azordev" },
    { name: "Aparición de bugs", value: "−20%", dir: "down", src: "Azordev" },
    { name: "Fiabilidad (tests)", value: "+15%", dir: "up", src: "Azordev" },
    { name: "Velocidad de respuesta", value: "+25%", dir: "up", src: "Gamifica" },
    { name: "Usuarios módulo social", value: "2.000+", dir: "up", src: "Gamifica" },
  ],
  en: [
    { name: "Load time", value: "−30%", dir: "down", src: "Gamifica" },
    { name: "Bundle size", value: "−25%", dir: "down", src: "Azordev" },
    { name: "Bug occurrence", value: "−20%", dir: "down", src: "Azordev" },
    { name: "Reliability (tests)", value: "+15%", dir: "up", src: "Azordev" },
    { name: "Response speed", value: "+25%", dir: "up", src: "Gamifica" },
    { name: "Social module users", value: "2,000+", dir: "up", src: "Gamifica" },
  ],
} as const

const dict = {
  es: {
    edition: "Edición Fullstack",
    tagline: "Fullstack Software Engineer · Node.js · NestJS · React · Next.js",
    nav: { experience: "Historial", projects: "Cartera", stack: "Stack", profile: "Perfil", contact: "Contacto" },
    cv: "CV",
    themeDark: "Edición nocturna",
    themeLight: "Edición diurna",
    langSwitch: "English",
    tradesIn: "Cotiza en",
    headline: "Ingeniero fullstack recorta un 30% los tiempos de carga y eleva un 15% la fiabilidad",
    lede: "Seis años construyendo sistemas de punta a punta: APIs en NestJS y Node.js, frontends en Next.js y React, y apps móviles en Flutter. Resultados medidos, no promesas.",
    byline: "Por Jose Miguel Tovar · Software Engineer en Azordev",
    indicatorsTitle: "Indicadores clave",
    colIndicator: "Indicador",
    colChange: "Var.",
    colSource: "Fuente",
    yearsLabel: "años de experiencia",
    deskTitle: "¿Tienes una posición abierta?",
    deskBody: "Email directo o LinkedIn. Sin formularios.",
    writeEmail: "Escribir a Jose",
    copy: "Copiar email",
    copied: "Copiado",
    emailSubject: "Oportunidad para Jose Tovar",
    experienceTitle: "Historial de cotización",
    experienceSub: "Cada puesto, con su indicador principal. Despliega para ver el detalle.",
    colPeriod: "Periodo",
    colCompany: "Empresa",
    colRole: "Cargo",
    colKey: "Indicador",
    projectsTitle: "Cartera de proyectos",
    projectsSub: "Sistemas completos construidos de la base de datos a la interfaz.",
    gallery: "Ver capturas",
    code: "Código",
    codeApi: "Código API",
    codeWeb: "Código web",
    screens: "capturas",
    stackTitle: "Composición del índice",
    profileTitle: "Perfil",
    profile: [
      "Soy un Ingeniero de Software Fullstack apasionado por construir soluciones web escalables y de alto rendimiento. Con más de 6 años de experiencia, me especializo en el ecosistema de Node.js, React y PHP, liderando proyectos desde la arquitectura inicial hasta la gestión avanzada de bases de datos.",
    ],
    brings: [
      { h: "Optimización de performance", p: "He reducido los tiempos de carga en un 30% refactorizando lógica y optimizando el renderizado." },
      { h: "Ingeniería de calidad", p: "Incremento la fiabilidad de los sistemas en un 15% con testing automatizado (unit/E2E) en Jest y Cypress." },
      { h: "Modernización arquitectónica", p: "Migro sistemas heredados hacia arquitecturas modernas en Next.js, mejorando la mantenibilidad y la experiencia de usuario." },
    ],
    closeTitle: "Abre una posición",
    closeBody: "Busco equipos que valoren el impacto medible. Escríbeme o conectemos en LinkedIn.",
    downloadCv: "Descargar CV",
    close: "Cerrar",
    prev: "Imagen anterior",
    next: "Siguiente imagen",
    description: "Descripción",
    technologies: "Tecnologías",
    rights: "Todos los derechos reservados.",
    up: "sube",
    down: "baja",
  },
  en: {
    edition: "Fullstack Edition",
    tagline: "Fullstack Software Engineer · Node.js · NestJS · React · Next.js",
    nav: { experience: "Track record", projects: "Holdings", stack: "Stack", profile: "Profile", contact: "Contact" },
    cv: "CV",
    themeDark: "Night edition",
    themeLight: "Day edition",
    langSwitch: "Español",
    tradesIn: "Trades in",
    headline: "Fullstack engineer cuts load times 30% and lifts reliability 15%",
    lede: "Six years building end-to-end systems: APIs in NestJS and Node.js, frontends in Next.js and React, and mobile apps in Flutter. Measured results, not promises.",
    byline: "By Jose Miguel Tovar · Software Engineer at Azordev",
    indicatorsTitle: "Key indicators",
    colIndicator: "Indicator",
    colChange: "Chg.",
    colSource: "Source",
    yearsLabel: "years of experience",
    deskTitle: "Have an open role?",
    deskBody: "Direct email or LinkedIn. No forms.",
    writeEmail: "Email Jose",
    copy: "Copy email",
    copied: "Copied",
    emailSubject: "Opportunity for Jose Tovar",
    experienceTitle: "Track record",
    experienceSub: "Each role with its headline indicator. Expand for detail.",
    colPeriod: "Period",
    colCompany: "Company",
    colRole: "Role",
    colKey: "Indicator",
    projectsTitle: "Project holdings",
    projectsSub: "Complete systems built from the database to the interface.",
    gallery: "View screens",
    code: "Code",
    codeApi: "API code",
    codeWeb: "Web code",
    screens: "screens",
    stackTitle: "Index composition",
    profileTitle: "Profile",
    profile: [
      "I'm a Fullstack Software Engineer who loves building scalable, high-performance web solutions. With 6+ years of experience, I specialize in the Node.js, React and PHP ecosystem, leading projects from initial architecture to advanced database management.",
    ],
    brings: [
      { h: "Performance optimization", p: "I've cut load times by 30% by refactoring logic and optimizing rendering." },
      { h: "Quality engineering", p: "I raise system reliability by 15% with automated testing (unit/E2E) in Jest and Cypress." },
      { h: "Architectural modernization", p: "I migrate legacy systems to modern Next.js architectures, improving maintainability and user experience." },
    ],
    closeTitle: "Open a position",
    closeBody: "I'm looking for teams that value measurable impact. Email me or connect on LinkedIn.",
    downloadCv: "Download CV",
    close: "Close",
    prev: "Previous image",
    next: "Next image",
    description: "Description",
    technologies: "Technologies",
    rights: "All rights reserved.",
    up: "up",
    down: "down",
  },
}

function localize(lang: Lang) {
  const experience = experienceEs as Experience[]
  const projects = projectsEs as Project[]
  const skills = skillsEs as Skills
  if (lang === "es") return { experience, projects, skills }
  const items = en.skillItems as Record<string, string>
  return {
    experience: experience.map((e, i) => {
      const o = en.experience[i]
      return o ? { ...e, duration: o.duration, description: o.description, highlight: { ...e.highlight, label: o.highlight } } : e
    }),
    projects: projects.map((p) => ({ ...p, ...(en.projects as Record<string, Partial<Project>>)[p.id] })),
    skills: Object.fromEntries(
      Object.entries(skills).map(([k, v]) => [(en.skills as Record<string, string>)[k] ?? k, v.map((s) => items[s] ?? s)])
    ),
  }
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void }
const LangCtx = createContext<Ctx>({ lang: "es", setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang")
      if (saved === "es" || saved === "en") setLang(saved)
      else if (navigator.language.toLowerCase().startsWith("en")) setLang("en")
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem("lang", lang) } catch {}
  }, [lang])

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export function useLang() {
  const { lang, setLang } = useContext(LangCtx)
  const data = useMemo(() => localize(lang), [lang])
  return { lang, setLang, t: dict[lang], indicators: indicators[lang], ...data }
}
