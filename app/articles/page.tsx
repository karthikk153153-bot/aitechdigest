import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllArticles, getCategories } from '@/lib/articles'
import { format } from 'date-fns'

export const dynamic = 'force-static'

async function ArticlesPage() {
  const allArticles = await getAllArticles()
  const categories = await getCategories()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Articles</h1>
          <p className="text-xl text-blue-100">
            Explore our comprehensive collection of AI and technology insights
          </p>
        </div>
      </div>

      <div className="container py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/articles" className="block py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium">
                    All Articles
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Articles Grid */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allArticles.map((article) => (
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
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                        {article.frontmatter.category}
                      </span>
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
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.frontmatter.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {allArticles.length === 0 && (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <p className="text-gray-600 text-lg">No articles found</p>
                <p className="text-gray-500 mt-2">Check back soon for new content!</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ArticlesPage
