import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

export const runtime = 'edge'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()
  const baseUrl = 'https://aidealradar.vercel.app'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.frontmatter.date),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
