'use client'

import { ArrowRight, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-20 pb-16 px-5 md:px-8"
      aria-label="Presentación"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-reading mx-auto w-full">
        <AnimatedSection delay={0}>
          <div className="flex items-center gap-1.5 text-text-muted text-sm font-mono mb-8">
            <MapPin size={13} strokeWidth={1.5} />
            <span>{profile.location}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] text-balance mb-6">
            {profile.firstName}{' '}
            <span className="text-accent">{profile.name.split(' ')[1]}</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-text-secondary font-body font-light mb-4 text-pretty">
            {profile.tagline}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-[52ch] mb-10 text-pretty">
            {profile.bio}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                document
                  .getElementById('contacto')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span>Conectar</span>
              <ArrowRight size={15} className="ml-2" strokeWidth={2} />
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() =>
                document
                  .getElementById('sobre-mi')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Conocer más
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <SocialLinks links={socialLinks} iconSize={18} />
        </AnimatedSection>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted animate-bounce"
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-border" />
      </div>
    </section>
  )
}
