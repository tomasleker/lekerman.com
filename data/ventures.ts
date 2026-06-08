import type { Venture } from '@/types'

export const ventures: Venture[] = [
  {
    id: 'kokora-matcha',
    name: 'Kokora Matcha',
    tagline: 'Matcha premium para Latinoamérica',
    description:
      'Marca de matcha ceremonial y premium que lleva la cultura japonesa del matcha al estilo de vida latinoamericano. Producto, marca y comunidad construidos desde cero.',
    url: 'https://kokoramatcha.com',
    logoSrc: '/logos/kokora-matcha.png',
    status: 'activo',
    featured: true,
    year: '2025',
    tags: ['CPG', 'E-commerce', 'Branding', 'LATAM'],
  },
  {
    id: 'proyecto-futuro',
    name: 'Próximo proyecto',
    tagline: 'En desarrollo',
    description: 'Nuevo emprendimiento en construcción.',
    status: 'proximamente',
    featured: false,
    year: '2025',
    tags: [],
  },
]
