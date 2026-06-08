import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CompanyLogoProps {
  src: string
  alt: string
  className?: string
  size?: number
}

export function CompanyLogo({
  src,
  alt,
  className,
  size = 48,
}: CompanyLogoProps) {
  return (
    <div
      className={cn(
        'shrink-0 rounded-xl overflow-hidden border border-border/60 bg-surface',
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
