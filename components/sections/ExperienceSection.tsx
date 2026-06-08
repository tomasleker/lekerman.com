import { experienceGroups } from '@/data/experience'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { CompanyLogo } from '@/components/ui/CompanyLogo'
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

        <div className="space-y-16">
          {experienceGroups.map((group, groupIndex) => (
            <AnimatedSection key={group.id} delay={groupIndex * 100}>
              <article className="relative">
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-border/60">
                  {group.companyLogo && (
                    <CompanyLogo
                      src={group.companyLogo}
                      alt={`Logo de ${group.company}`}
                      size={52}
                    />
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {group.companyUrl ? (
                        <a
                          href={group.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-xl font-semibold text-text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-1.5"
                        >
                          {group.company}
                          <ExternalLink size={14} strokeWidth={1.5} />
                        </a>
                      ) : (
                        <h3 className="font-display text-xl font-semibold text-text-primary">
                          {group.company}
                        </h3>
                      )}
                      {group.roles.some((role) => role.current) && (
                        <Badge variant="accent">Rol actual</Badge>
                      )}
                    </div>

                    {group.subtitle && (
                      <p className="text-sm text-text-muted mb-1">{group.subtitle}</p>
                    )}

                    <p className="font-mono text-xs text-text-muted">
                      {group.period.start} – {group.period.end}
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div
                    className="absolute left-[0.625rem] top-2 bottom-2 w-px bg-border"
                    aria-hidden="true"
                  />

                  <div className="space-y-10 pl-10">
                    {group.roles.map((role, roleIndex) => (
                      <div key={role.id} className="relative group">
                        <div
                          className={`absolute -left-[2.5rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-200 ${
                            role.current
                              ? 'bg-accent border-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.15)]'
                              : 'bg-background border-border group-hover:border-accent'
                          }`}
                          aria-hidden="true"
                        />

                        <span className="font-mono text-xs text-text-muted mb-2 block">
                          {role.period.start} – {role.period.end}
                          {role.current && (
                            <span className="ml-2 text-accent font-medium">● En curso</span>
                          )}
                        </span>

                        <h4 className="font-body font-semibold text-base md:text-lg text-text-primary mb-2 text-pretty">
                          {role.role}
                        </h4>

                        <p className="text-text-secondary text-sm leading-relaxed mb-3 text-pretty">
                          {role.description}
                        </p>

                        {role.tags && role.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {role.tags.map((tag) => (
                              <Badge key={`${role.id}-${tag}`} variant="muted">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {roleIndex < group.roles.length - 1 && (
                          <div className="mt-8 border-t border-border/30 md:hidden" aria-hidden="true" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
