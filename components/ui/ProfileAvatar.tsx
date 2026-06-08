import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProfileAvatarProps {
  name: string
  initials: string
  photoSrc?: string
  className?: string
}

export function ProfileAvatar({
  name,
  initials,
  photoSrc,
  className,
}: ProfileAvatarProps) {
  if (photoSrc) {
    return (
      <div
        className={cn(
          'relative shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden',
          'border border-border shadow-lg shadow-accent/5',
          className
        )}
      >
        <Image
          src={photoSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 112px, 128px"
          priority
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-2xl',
        'bg-gradient-to-br from-accent/25 via-surface to-background',
        'border border-border/80 shadow-lg shadow-accent/5',
        'flex items-center justify-center',
        className
      )}
      aria-hidden="true"
    >
      <span className="font-display text-3xl md:text-4xl font-semibold text-accent tracking-tight">
        {initials}
      </span>
    </div>
  )
}
