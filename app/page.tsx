import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllArticles, getFeaturedArticles, getCategories } from '@/lib/articles'
import { format } from 'date-fns'

async function Home() {
  const featuredArticles = await getFeaturedArticles()
  const recentArticles = (await getAllArticles()).slice(0, 12)
  const categories = await getCategories()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              AI & Technology News
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert insights, reviews, and guides on the latest AI tools and technology trends
            </p>
            <Link
              href="/articles"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Explore Articles →
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-16 flex-1">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <svg className="w-8 h-8 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                        {article.frontmatter.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {format(new Date(article.frontmatter.date), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.frontmatter.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {article.frontmatter.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <svg className="w-8 h-8 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border border-gray-200 hover:border-blue-500 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              Latest Articles
            </h2>
            <Link
              href="/articles"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
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
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Home
