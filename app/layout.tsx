import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LangProvider } from '@/app/i18n'

const display = Inter_Tight({ subsets: ['latin'], variable: '--font-display', weight: ['600', '700', '800'] })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  // shortcut: set NEXT_PUBLIC_SITE_URL to the real domain once deployed, or OG image links point to localhost
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Jose Tovar · Fullstack Software Engineer',
  description: 'Fullstack Software Engineer con 6+ años: Node.js, NestJS, React, Next.js. -30% tiempos de carga, +15% fiabilidad.',
  openGraph: {
    title: 'Jose Tovar · Fullstack Software Engineer',
    description: '6+ años construyendo APIs NestJS y frontends Next.js con impacto medido: -30% tiempos de carga, -25% bundle.',
    images: ['/assets/user-profile.jpg'],
    type: 'profile',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
