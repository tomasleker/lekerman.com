import { Linkedin, Instagram, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import type { SocialLink } from '@/types'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  Instagram: Instagram,
  Email: Mail,
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  iconSize?: number
}

export function SocialLinks({ links, className, iconSize = 16 }: SocialLinksProps) {
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
