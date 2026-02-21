import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getArticlesByCategory, getAllArticles, getCategories } from '@/lib/articles'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }))
}

async function CategoryPage({ params }: { params: { category: string } }) {
  const categories = await getCategories()
  const matchedCategory = categories.find(
    cat => cat.toLowerCase().replace(/\s+/g, '-') === params.category
  )

  if (!matchedCategory) {
    notFound()
  }

  const articles = await getArticlesByCategory(matchedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/articles" className="text-blue-200 hover:text-white transition-colors">
              ← Back to Articles
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {matchedCategory}
          </h1>
          <p className="text-xl text-blue-100">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'} in this category
          </p>
        </div>
      </div>

      <div className="container max-w-6xl py-12 flex-1">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200"
              >
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-gray-500">
                      {format(new Date(article.frontmatter.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {article.frontmatter.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-gray-600 text-lg">No articles found in this category</p>
            <p className="text-gray-500 mt-2">Check back soon!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default CategoryPage
