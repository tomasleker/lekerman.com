import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { fontDisplay, fontBody, fontMono } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lekerman.com'),
  title: {
    default: 'Tomás Lekerman — Fundador & Emprendedor',
    template: '%s | Tomás Lekerman',
  },
  description:
    'Tomás Lekerman — Fundador de Kokora Matcha. Emprendedor, builder y operador basado en Buenos Aires, Argentina.',
  keywords: [
    'Tomás Lekerman',
    'Lekerman',
    'Kokora Matcha',
    'emprendedor Argentina',
    'founder Buenos Aires',
    'startup LATAM',
  ],
  authors: [{ name: 'Tomás Lekerman', url: 'https://lekerman.com' }],
  creator: 'Tomás Lekerman',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://lekerman.com',
    siteName: 'Tomás Lekerman',
    title: 'Tomás Lekerman — Fundador & Emprendedor',
    description:
      'Fundador de Kokora Matcha. Emprendedor y builder basado en Buenos Aires, Argentina.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Tomás Lekerman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomás Lekerman — Fundador & Emprendedor',
    description: 'Fundador de Kokora Matcha. Builder basado en Buenos Aires.',
    creator: '@tomaslekerman',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lekerman.com',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        fontDisplay.variable,
        fontBody.variable,
        fontMono.variable
      )}
    >
      <body className="min-h-screen bg-background font-body text-text-primary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="lekerman-theme"
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded-md focus:text-sm focus:font-medium"
          >
            Saltar al contenido principal
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
