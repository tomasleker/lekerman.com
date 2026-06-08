import { Linkedin, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import type { SocialLink } from '@/types'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  Email: Mail,
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  iconSize?: number
  variant?: 'icon' | 'pill'
}

export function SocialLinks({
  links,
  className,
  iconSize = 16,
  variant = 'icon',
}: SocialLinksProps) {
  if (variant === 'pill') {
    return (
      <div className={cn('flex flex-wrap gap-3', className)}>
        {links.map((link) => {
          const Icon = iconMap[link.platform] ?? ExternalLink
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm',
                'border border-border bg-surface text-text-secondary',
                'hover:border-accent/40 hover:text-accent hover:bg-surface-hover',
                'transition-all duration-200'
              )}
            >
              <Icon size={iconSize} strokeWidth={1.5} />
              {link.platform}
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.platform] ?? ExternalLink
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-text-muted hover:text-accent transition-colors duration-200"
          >
            <Icon size={iconSize} strokeWidth={1.5} />
          </a>
        )
      })}
    </div>
  )
}
