export interface ExperienceItem {
  id: string
  role: string
  company: string
  companyUrl?: string
  period: {
    start: string
    end: string | 'presente'
  }
  description: string
  tags?: string[]
  current?: boolean
}

export interface Venture {
  id: string
  name: string
  tagline: string
  description: string
  url?: string
  logoSrc?: string
  status: 'activo' | 'en-desarrollo' | 'proximamente' | 'adquirido'
  featured?: boolean
  year: string
  tags: string[]
}

export interface Achievement {
  id: string
  title: string
  organization: string
  year: string
  description?: string
  category: 'beca' | 'programa' | 'competencia' | 'prensa'
  url?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: number
  tags?: string[]
  published: boolean
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}
