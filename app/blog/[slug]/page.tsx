import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Clock } from 'lucide-react'
import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { profile } from '@/data/profile'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://lekerman.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://lekerman.com/blog/${slug}`,
      authors: [profile.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

function BlogPostingSchema({
  title,
  description,
  date,
  slug,
}: {
  title: string
  description: string
  date: string
  slug: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: profile.name,
      url: 'https://lekerman.com',
    },
    publisher: {
      '@type': 'Person',
      name: profile.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lekerman.com/blog/${slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post || !post.published) notFound()

  return (
    <>
      <BlogPostingSchema
        title={post.title}
        description={post.description}
        date={post.date}
        slug={slug}
      />
      <article className="py-24 px-5 md:px-8 pt-32">
        <div className="max-w-reading mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-200 mb-12"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Volver al blog
          </Link>

          <header className="mb-12">
            <time
              dateTime={post.date}
              className="font-mono text-xs text-text-muted"
            >
              {formatDate(post.date)}
            </time>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-4 text-balance">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary text-pretty">
              {post.description}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono mt-6">
              <Clock size={12} strokeWidth={1.5} />
              <span>{post.readingTime} min de lectura</span>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none dark:prose-invert
              prose-headings:font-display prose-headings:font-semibold
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-code:font-mono prose-code:text-accent
              prose-pre:bg-surface prose-pre:border prose-pre:border-border
              prose-blockquote:border-accent prose-blockquote:text-text-secondary
              prose-strong:text-text-primary"
          >
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </>
  )
}
