import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { readingTime } from '@/lib/utils'
import type { BlogPost } from '@/types'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const filePath = path.join(CONTENT_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(raw)

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        published: (data.published as boolean) ?? false,
        readingTime: readingTime(content),
      } satisfies BlogPost
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export async function getBlogPost(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    published: (data.published as boolean) ?? false,
    readingTime: readingTime(content),
    content,
  }
}
