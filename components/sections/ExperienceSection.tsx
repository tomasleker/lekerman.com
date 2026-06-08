import { experience } from '@/data/experience'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { ExternalLink } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-5 md:px-8" aria-labelledby="experience-heading">
      <div className="max-w-reading mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
              Trayectoria
            </span>
            <h2
              id="experience-heading"
              className="font-display text-3xl md:text-4xl font-semibold"
            >
              Experiencia
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div
            className="absolute left-0 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-12 pl-8">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 100}>
                <div className="relative group">
                  <div
                    className={`absolute -left-[2.25rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ${
                      item.current
                        ? 'bg-accent border-accent'
                        : 'bg-background border-border group-hover:border-accent'
                    }`}
                    aria-hidden="true"
                  />

                  <span className="font-mono text-xs text-text-muted mb-2 block">
                    {item.period.start} – {item.period.end}
                    {item.current && (
                      <span className="ml-2 text-accent">● En curso</span>
                    )}
                  </span>

                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="font-body font-semibold text-lg text-text-primary">
                      {item.role}
                    </h3>
                    <span className="text-text-muted">·</span>
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-1 text-sm"
                      >
                        {item.company}
                        <ExternalLink size={12} strokeWidth={1.5} />
                      </a>
                    ) : (
                      <span className="text-text-secondary text-sm">
                        {item.company}
                      </span>
                    )}
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-3 text-pretty">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="muted">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
