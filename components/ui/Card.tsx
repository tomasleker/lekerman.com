import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-2xl border border-border bg-surface',
        hover && 'hover:bg-surface-hover hover:border-border/70 transition-all duration-200',
        className
      )}
    >
      {children}
    </div>
  )
}
