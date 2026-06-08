import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social'
import { SocialLinks } from '@/components/ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-content mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-text-primary font-medium mb-1">
              {profile.name}
            </p>
            <p className="text-xs text-text-muted font-mono mb-2">
              {profile.tagline}
            </p>
            <p className="text-sm text-text-muted font-mono">
              © {year} · Hecho con cuidado en Buenos Aires
            </p>
          </div>
          <SocialLinks links={socialLinks} variant="pill" iconSize={15} />
        </div>
      </div>
    </footer>
  )
}
