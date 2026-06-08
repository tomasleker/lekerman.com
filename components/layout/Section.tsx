import { cn } from '@/lib/utils'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  'aria-labelledby'?: string
}

export function Section({ id, children, className, 'aria-labelledby': labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-24 px-5 md:px-8', className)}
      aria-labelledby={labelledBy}
    >
      <div className="max-w-reading mx-auto">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  label: string
  title: string
  titleId: string
  description?: string
}

export function SectionHeader({ label, title, titleId, description }: SectionHeaderProps) {
  return (
    <AnimatedSection>
      <div className="mb-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
          {label}
        </span>
        <h2 id={titleId} className="font-display text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-text-secondary text-pretty max-w-[46ch]">{description}</p>
        )}
      </div>
    </AnimatedSection>
  )
}
