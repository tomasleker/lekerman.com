import { profile } from '@/data/profile'
import { socialLinks } from '@/data/social'

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: 'https://lekerman.com',
    sameAs: socialLinks.map((l) => l.url),
    jobTitle: 'Regional Logistics Operational Excellence Specialist',
    worksFor: {
      '@type': 'Organization',
      name: 'PedidosYa',
      url: 'https://www.pedidosya.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Buenos Aires',
      addressCountry: 'AR',
    },
    description: profile.bio,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tomás Lekerman',
    url: 'https://lekerman.com',
    description: profile.bio,
    author: {
      '@type': 'Person',
      name: profile.name,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
