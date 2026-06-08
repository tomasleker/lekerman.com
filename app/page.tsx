import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { VenturesSection } from '@/components/sections/VenturesSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { StructuredData } from '@/components/seo/StructuredData'

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <div className="divide-y divide-border/30">
        <AboutSection />
        <ExperienceSection />
        <VenturesSection />
        <AchievementsSection />
        <BlogPreviewSection />
        <ContactSection />
      </div>
    </>
  )
}
