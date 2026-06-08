import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, PenLine } from 'lucide-react'
import { getBlogPosts } from '@/lib/blog'
import { BlogList } from '@/components/blog/BlogList'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Ideas, aprendizajes y perspectivas de Tomás Lekerman sobre emprendimiento, producto y construcción de marcas.',
  alternates: {
    canonical: 'https://lekerman.com/blog',
  },
  openGraph: {
    title: 'Blog — Tomás Lekerman',
    description:
      'Ideas, aprendizajes y perspectivas sobre emprendimiento, producto y construcción de marcas.',
    url: 'https://lekerman.com/blog',
  },
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="py-24 px-5 md:px-8 pt-32">
      <div className="max-w-reading mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Volver al inicio
        </Link>

        <div className="mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
            Insights
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">
            Blog
          </h1>
        </div>

        {posts.length > 0 ? (
          <BlogList posts={posts} />
        ) : (
          <div className="p-12 rounded-2xl border border-dashed border-border bg-surface/50 text-center">
            <PenLine
              size={40}
              strokeWidth={1.5}
              className="mx-auto text-text-muted mb-4"
              aria-hidden="true"
            />
            <p className="font-display text-2xl font-semibold text-text-primary mb-3">
              Próximamente
            </p>
            <p className="text-text-secondary text-pretty max-w-[40ch] mx-auto">
              Estoy preparando artículos sobre emprendimiento, producto y las lecciones de construir Kokora Matcha.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
