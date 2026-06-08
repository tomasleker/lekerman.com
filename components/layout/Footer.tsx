import { socialLinks } from '@/data/social'
import { SocialLinks } from '@/components/ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-content mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-text-muted font-mono">
            © {year} Tomás Lekerman. Hecho con cuidado en Buenos Aires.
          </p>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </footer>
  )
}
