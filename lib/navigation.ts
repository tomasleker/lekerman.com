export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí', id: 'sobre-mi' },
  { href: '#experiencia', label: 'Experiencia', id: 'experiencia' },
  { href: '#emprendimientos', label: 'Proyectos', id: 'emprendimientos' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
] as const

export const navSectionIds = navLinks.map((link) => link.id)
