'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#emprendimientos', label: 'Proyectos' },
  { href: '#logros', label: 'Logros' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-display font-semibold text-sm tracking-wide hover:text-accent transition-colors duration-200"
            aria-label="Tomás Lekerman — Inicio"
          >
            TL
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full border border-border hover:border-accent/50 hover:text-accent transition-all duration-200"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
