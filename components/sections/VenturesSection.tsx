import { ventures } from '@/data/ventures'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const statusLabels: Record<string, { label: string; variant: 'accent' | 'success' | 'muted' | 'default' }> = {
  activo: { label: 'Activo', variant: 'success' },
  'en-desarrollo': { label: 'En desarrollo', variant: 'accent' },
  proximamente: { label: 'Próximamente', variant: 'muted' },
  adquirido: { label: 'Adquirido', variant: 'default' },
}

export function VenturesSection() {
  const featured = ventures.filter((v) => v.featured)
  const rest = ventures.filter((v) => !v.featured)

  return (
    <section id="emprendimientos" className="py-24 px-5 md:px-8" aria-labelledby="ventures-heading">
      <div className="max-w-reading mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
              Proyectos
            </span>
            <h2
              id="ventures-heading"
              className="font-display text-3xl md:text-4xl font-semibold"
            >
              Emprendimientos
            </h2>
          </div>
        </AnimatedSection>

        {featured.map((venture, i) => (
          <AnimatedSection key={venture.id} delay={i * 100} className="mb-6">
            <div
              className={cn(
                'group relative p-7 md:p-9 rounded-2xl border border-border',
                'bg-surface hover:bg-surface-hover hover:border-accent/20',
                'transition-all duration-300 hover:-translate-y-0.5',
                'cursor-default'
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="font-display text-2xl font-semibold text-text-primary">
                      {venture.name}
                    </h3>
                    <Badge variant={statusLabels[venture.status].variant}>
                      {statusLabels[venture.status].label}
                    </Badge>
                  </div>
                  <p className="text-text-secondary text-sm font-mono">
                    {venture.tagline} · {venture.year}
                  </p>
                </div>
                {venture.url && (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${venture.name}`}
                    className={cn(
                      'flex items-center gap-1.5 text-sm text-text-muted',
                      'hover:text-accent transition-colors duration-200',
                      'border border-border rounded-full px-3 py-1.5',
                      'hover:border-accent/30'
                    )}
                  >
                    Visitar sitio
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                )}
              </div>

              <p className="text-text-secondary leading-relaxed mb-5 text-pretty">
                {venture.description}
              </p>

              {venture.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {venture.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {rest.map((venture, i) => (
              <AnimatedSection key={venture.id} delay={(featured.length + i) * 100}>
                <div
                  className={cn(
                    'p-6 rounded-2xl border border-border bg-surface',
                    'hover:bg-surface-hover hover:border-border/70',
                    'transition-all duration-200'
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-body font-semibold text-text-primary">
                      {venture.name}
                    </h3>
                    <Badge variant={statusLabels[venture.status].variant}>
                      {statusLabels[venture.status].label}
                    </Badge>
                  </div>
                  <p className="text-text-muted text-sm">
                    {venture.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
