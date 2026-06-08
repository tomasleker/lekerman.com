import type { ExperienceGroup } from '@/types'

export const experienceGroups: ExperienceGroup[] = [
  {
    id: 'pedidosya',
    company: 'PedidosYa',
    companyUrl: 'https://www.pedidosya.com',
    companyLogo: '/logos/pedidosya.png',
    subtitle: 'Delivery Hero · Jornada completa',
    period: { start: 'oct. 2022', end: 'presente' },
    roles: [
      {
        id: 'pedidosya-logistics-specialist',
        role: 'Regional Logistics Operational Excellence Specialist',
        period: { start: 'ene. 2026', end: 'presente' },
        description:
          'Líder de equipo con manejo de e-commerce de la empresa, sumado a las responsabilidades del rol anterior. Enfoque en excelencia operativa logística regional.',
        tags: ['Liderazgo', 'E-commerce', 'Logística', 'LATAM'],
        current: true,
      },
      {
        id: 'pedidosya-logistics-sr-analyst',
        role: 'Regional Logistics Operational Excellence Sr. Analyst',
        period: { start: 'ene. 2025', end: 'mar. 2026' },
        description:
          'Lideré la implementación de un WMS para optimizar la operación logística en 15 países de LATAM. Desarrollé mejoras en procesos logísticos, gestioné presupuestos de equipamiento para repartidores y coordiné compras internacionales. Colaboré con Producto de Delivery Hero para optimizar sistemas y definir roadmaps.',
        tags: ['WMS', 'Mejora continua', 'Operaciones', 'Delivery Hero'],
      },
      {
        id: 'pedidosya-partner-ops',
        role: 'Partner Operations Sr. Analyst',
        period: { start: 'ago. 2024', end: 'mar. 2025' },
        description:
          'Project manager de la migración de proveedor de SIMs en múltiples mercados. Responsable de la estrategia de POS y colaborador en análisis de KPIs e iniciativas de optimización para el equipo de supply.',
        tags: ['Project Management', 'Supply', 'KPIs', 'Estrategia'],
      },
      {
        id: 'pedidosya-longtail',
        role: 'Longtail Performance Analyst',
        period: { start: 'oct. 2023', end: 'ago. 2024' },
        description:
          'Análisis de KPIs y métricas operativas, seguimiento de OKRs y desarrollo de tableros de control. Optimización de procesos con pruebas A/B y asesoramiento a partners para mejorar su calidad operativa.',
        tags: ['OKRs', 'Analytics', 'A/B Testing', 'Dashboards'],
      },
      {
        id: 'pedidosya-performance-advisor',
        role: 'Performance Advisor',
        period: { start: 'oct. 2022', end: 'oct. 2023' },
        description:
          'Análisis de KPIs de performance de partners asociados a PedidosYa. Asesoramiento personalizado para optimizar operación y procesos, desarrollo de tableros y proyectos de mejora continua con enfoque en calidad y experiencia del usuario.',
        tags: ['Performance', 'Partners', 'Mejora continua', 'Data'],
      },
    ],
  },
  {
    id: 'kokora-matcha',
    company: 'Kokora Matcha',
    companyUrl: 'https://kokoramatcha.com',
    companyLogo: '/logos/kokora-matcha.png',
    subtitle: 'Emprendimiento · CPG & E-commerce',
    period: { start: '2025', end: 'presente' },
    roles: [
      {
        id: 'kokora-matcha-founder',
        role: 'Fundador & CEO',
        period: { start: '2025', end: 'presente' },
        description:
          'Fundé y lidero Kokora Matcha, una marca de matcha premium orientada al mercado latinoamericano. Responsable de estrategia, producto, marca, operaciones y growth.',
        tags: ['Emprendimiento', 'Branding', 'E-commerce', 'CPG'],
      },
    ],
  },
]
