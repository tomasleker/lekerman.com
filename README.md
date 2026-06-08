# lekerman.com

Sitio web personal de Tomás Lekerman — producción-ready para Vercel.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v3
- next-themes (dark/light mode)

## Desarrollo local

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de Resend para el formulario de contacto |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (opcional) |

## Subir a GitHub

El repositorio local ya está inicializado en la rama `main`. Para crear el remoto y subir el código:

```bash
# Opción A — con GitHub CLI (recomendado)
gh auth login
gh repo create lekerman.com --public --source=. --remote=origin --push

# Opción B — manual
# 1. Creá el repo vacío en https://github.com/new?name=lekerman.com
# 2. Luego:
git remote add origin https://github.com/tomasleker/lekerman.com.git
git push -u origin main
```

## Deploy en Vercel

1. Conectá el repositorio en [vercel.com](https://vercel.com)
2. Configurá `RESEND_API_KEY` en Environment Variables
3. Apuntá el dominio `lekerman.com` a Vercel

## Estructura

- `app/` — Rutas y layouts de Next.js
- `components/` — Componentes React
- `content/blog/` — Posts MDX
- `data/` — Datos centralizados del perfil
- `lib/` — Utilidades y helpers

## Blog

Para publicar un artículo, creá un archivo `.mdx` en `content/blog/` con `published: true` en el frontmatter.
