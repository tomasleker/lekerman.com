import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'success' | 'muted'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface border border-border text-text-secondary',
    accent: 'bg-accent/10 border border-accent/20 text-accent',
    success: 'bg-green-500/10 border border-green-500/20 text-green-400',
    muted: 'bg-surface text-text-muted',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
