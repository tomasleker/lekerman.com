import type { BlogPost } from '@/types'
import { BlogCard } from '@/components/blog/BlogCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-4">
      {posts.map((post, index) => (
        <AnimatedSection key={post.slug} delay={index * 100}>
          <BlogCard post={post} />
        </AnimatedSection>
      ))}
    </div>
  )
}
