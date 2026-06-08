import { profile } from '@/data/profile'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/layout/Section'

export function AboutSection() {
  const bioParagraphs = profile.longBio
    .trim()
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <section id="sobre-mi" className="py-24 px-5 md:px-8 bg-surface/40" aria-labelledby="about-heading">
      <div className="max-w-reading mx-auto">
        <SectionHeader
          label="Historia"
          title="Sobre mí"
          titleId="about-heading"
        />

        <div className="space-y-6 mb-16">
          {bioParagraphs.map((paragraph, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <p className="text-text-secondary leading-relaxed text-pretty">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="mb-12">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-5">
              Formación
            </h3>
            <ul className="space-y-4" role="list">
              {profile.studies.map((study) => (
                <li
                  key={study.institution}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-4 border-b border-border/50 last:border-0"
                >
                  <div>
                    <p className="font-body font-medium text-text-primary">
                      {study.degree}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {study.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-text-muted shrink-0">
                    {study.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div>
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-5">
              Intereses
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <Badge key={interest} variant="default">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
