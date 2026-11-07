import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/app/i18n'
import { headers } from 'next/headers'
import { SEO, type Lang } from '@/app/seo'

const display = Inter_Tight({ subsets: ['latin'], variable: '--font-display', weight: ['600', '700', '800'] })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })

// middleware.ts sets x-lang on the /es rewrite; everything else is the English page.
const requestLang = (): Lang => (headers().get('x-lang') === 'es' ? 'es' : 'en')

export function generateMetadata(): Metadata {
  const lang = requestLang()
  const { title, description } = SEO[lang]
  return {
    // shortcut: set NEXT_PUBLIC_SITE_URL to the real domain once deployed, or OG image links point to localhost
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title,
    description,
    alternates: {
      canonical: lang === 'es' ? '/es' : '/',
      languages: { en: '/', es: '/es', 'x-default': '/' },
    },
    openGraph: {
      title,
      description,
      images: ['/assets/user-profile.jpg'],
      type: 'profile',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: lang === 'es' ? 'en_US' : 'es_ES',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = requestLang()
  return (
    <html lang={lang} className={`scroll-smooth ${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider initialLang={lang}>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
