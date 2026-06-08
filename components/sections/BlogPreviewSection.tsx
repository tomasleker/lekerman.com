import Link from 'next/link'
import { ArrowRight, PenLine } from 'lucide-react'
import { getBlogPosts } from '@/lib/blog'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BlogCard } from '@/components/blog/BlogCard'

export async function BlogPreviewSection() {
  const posts = await getBlogPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <section id="blog" className="py-24 px-5 md:px-8" aria-labelledby="blog-heading">
      <div className="max-w-reading mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
              Insights
            </span>
            <h2
              id="blog-heading"
              className="font-display text-3xl md:text-4xl font-semibold"
            >
              Blog
            </h2>
          </div>
        </AnimatedSection>

        {recentPosts.length > 0 ? (
          <>
            <div className="grid gap-4 mb-10">
              {recentPosts.map((post, index) => (
                <AnimatedSection key={post.slug} delay={index * 100}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={300}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 font-medium"
              >
                Ver todos los artículos
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </AnimatedSection>
          </>
        ) : (
          <AnimatedSection delay={100}>
            <div className="p-8 md:p-12 rounded-2xl border border-dashed border-border bg-surface/50 text-center">
              <PenLine
                size={32}
                strokeWidth={1.5}
                className="mx-auto text-text-muted mb-4"
                aria-hidden="true"
              />
              <p className="font-display text-xl font-semibold text-text-primary mb-2">
                Próximamente
              </p>
              <p className="text-text-secondary text-sm text-pretty max-w-[36ch] mx-auto">
                Ideas, aprendizajes y perspectivas sobre emprendimiento, producto y construcción de marcas.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
