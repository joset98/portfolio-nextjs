import type { Metadata } from 'next'
import { Bodoni_Moda, Libre_Franklin, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LangProvider } from '@/app/i18n'

const display = Bodoni_Moda({ subsets: ['latin'], variable: '--font-display', weight: ['500', '700', '800'] })
const sans = Libre_Franklin({ subsets: ['latin'], variable: '--font-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Jose Tovar · Fullstack Software Engineer',
  description: 'Fullstack Software Engineer con 6+ años: Node.js, NestJS, React, Next.js. -30% tiempos de carga, +15% fiabilidad.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${display.variable} ${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
