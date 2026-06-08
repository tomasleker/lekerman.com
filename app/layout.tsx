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
    default: 'Tomás Eitan Lekerman — Operaciones · E-commerce · Producto',
    template: '%s | Tomás Eitan Lekerman',
  },
  description:
    'Tomás Eitan Lekerman — Especialista en operaciones y logística en PedidosYa. Apasionado por el e-commerce, la tecnología y el producto. Buenos Aires, Argentina.',
  keywords: [
    'Tomás Eitan Lekerman',
    'Tomás Lekerman',
    'Lekerman',
    'PedidosYa',
    'operaciones logísticas',
    'e-commerce Argentina',
    'producto',
    'Kokora Matcha',
  ],
  authors: [{ name: 'Tomás Eitan Lekerman', url: 'https://lekerman.com' }],
  creator: 'Tomás Eitan Lekerman',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://lekerman.com',
    siteName: 'Tomás Eitan Lekerman',
    title: 'Tomás Eitan Lekerman — Operaciones · E-commerce · Producto',
    description:
      'Especialista en operaciones y logística en PedidosYa. E-commerce, tecnología y producto. Buenos Aires, Argentina.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Tomás Eitan Lekerman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomás Eitan Lekerman — Operaciones · E-commerce · Producto',
    description: 'Operaciones, e-commerce y producto. Basado en Buenos Aires.',
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
