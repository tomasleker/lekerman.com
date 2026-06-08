import Link from 'next/link'
import { Clock } from 'lucide-react'
import type { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group block p-6 rounded-2xl border border-border bg-surface',
        'hover:bg-surface-hover hover:border-accent/20 transition-all duration-200',
        className
      )}
    >
      <time
        dateTime={post.date}
        className="font-mono text-xs text-text-muted"
      >
        {formatDate(post.date)}
      </time>
      <h3 className="font-display text-xl font-semibold text-text-primary mt-2 mb-2 group-hover:text-accent transition-colors duration-200">
        {post.title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4 text-pretty line-clamp-2">
        {post.description}
      </p>
      <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
        <Clock size={12} strokeWidth={1.5} />
        <span>{post.readingTime} min de lectura</span>
      </div>
    </Link>
  )
}
