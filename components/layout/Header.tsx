'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { navLinks, navSectionIds } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(navSectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function handleNavClick() {
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || mobileOpen
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-content mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-display font-semibold text-sm tracking-wide hover:text-accent transition-colors duration-200"
              aria-label="Tomás Eitan Lekerman — Inicio"
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
                  className={cn(
                    'text-sm transition-colors duration-200 font-body relative',
                    activeSection === link.id
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <ThemeToggle />
              <a
                href="#contacto"
                className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full border border-border hover:border-accent/50 hover:text-accent transition-all duration-200"
              >
                Contactar
              </a>
              <button
                type="button"
                className="md:hidden p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileOpen((open) => !open)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileOpen ? (
                  <X size={20} strokeWidth={1.5} />
                ) : (
                  <Menu size={20} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          />
          <nav
            className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 px-5 py-6"
            aria-label="Navegación mobile"
          >
            <ul className="space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      'flex items-center justify-between py-3 text-base font-medium border-b border-border/40 last:border-0 transition-colors',
                      activeSection === link.id
                        ? 'text-accent'
                        : 'text-text-primary hover:text-accent'
                    )}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="mt-6 flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-full border border-border hover:border-accent/50 hover:text-accent transition-all duration-200"
            >
              Contactar
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
