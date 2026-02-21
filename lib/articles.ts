import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface Article {
  slug: string
  frontmatter: {
    title: string
    description: string
    date: string
    author: string
    category: string
    tags: string[]
    featured?: boolean
    seoTitle?: string
    seoDescription?: string
  }
  content: string
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    const fileNames = fs.readdirSync(articlesDirectory)
    const allArticlesData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          frontmatter: data as Article['frontmatter'],
          content,
        }
      })
      .sort((a, b) => {
        if (a.frontmatter.date < b.frontmatter.date) {
          return 1
        } else {
          return -1
        }
      })

    return allArticlesData
  } catch (error) {
    console.error('Error reading articles:', error)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as Article['frontmatter'],
      content,
    }
  } catch (error) {
    console.error('Error reading article:', error)
    return null
  }
}

export async function getFeaturedArticles(): Promise<Article[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter(article => article.frontmatter.featured).slice(0, 3)
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter(article =>
    article.frontmatter.category.toLowerCase() === category.toLowerCase()
  )
}

export async function getCategories(): Promise<string[]> {
  const allArticles = await getAllArticles()
  const categories = new Set(allArticles.map(article => article.frontmatter.category))
  return Array.from(categories).sort()
}
