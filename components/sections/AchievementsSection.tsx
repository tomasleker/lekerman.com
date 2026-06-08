import { achievements } from '@/data/achievements'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import type { Achievement } from '@/types'

const categoryLabels: Record<Achievement['category'], string> = {
  beca: 'Becas',
  programa: 'Programas',
  competencia: 'Competencias',
  prensa: 'Prensa',
}

const categoryOrder: Achievement['category'][] = [
  'beca',
  'programa',
  'competencia',
  'prensa',
]

export function AchievementsSection() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: achievements.filter((a) => a.category === category),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section id="logros" className="py-24 px-5 md:px-8" aria-labelledby="achievements-heading">
      <div className="max-w-reading mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
              Reconocimientos
            </span>
            <h2
              id="achievements-heading"
              className="font-display text-3xl md:text-4xl font-semibold"
            >
              Logros
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {grouped.map((group, groupIndex) => (
            <AnimatedSection key={group.category} delay={groupIndex * 100}>
              <div>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
                  {group.label}
                </h3>
                <ul className="space-y-0" role="list">
                  {group.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 py-5 border-b border-border/50 last:border-0 group"
                    >
                      <div className="flex-1">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body font-medium text-text-primary hover:text-accent transition-colors duration-200"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <p className="font-body font-medium text-text-primary">
                            {item.title}
                          </p>
                        )}
                        <p className="text-sm text-text-secondary mt-0.5">
                          {item.organization}
                        </p>
                        {item.description && (
                          <p className="text-sm text-text-muted mt-2 text-pretty">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="font-mono text-xs text-text-muted shrink-0 pt-0.5">
                        {item.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
