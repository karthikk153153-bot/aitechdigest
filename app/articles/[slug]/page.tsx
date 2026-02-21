import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.frontmatter.seoTitle || article.frontmatter.title,
    description: article.frontmatter.seoDescription || article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: 'article',
      publishedTime: article.frontmatter.date,
      authors: [article.frontmatter.author],
      tags: article.frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.frontmatter.title,
      description: article.frontmatter.description,
    },
  }
}

async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <article className="flex-1 bg-white">
        {/* Article Header */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-16">
          <div className="container max-w-4xl">
            <div className="mb-6">
              <Link
                href="/articles"
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Articles
              </Link>
            </div>

            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              {article.frontmatter.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {article.frontmatter.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-blue-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {article.frontmatter.author}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {format(new Date(article.frontmatter.date), 'MMMM d, yyyy')}
              </div>
            </div>

            {article.frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {article.frontmatter.tags.map((tag) => (
                  <span key={tag} className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="container max-w-4xl py-12">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={article.content} />
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Share this article</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.frontmatter.title)}&url=${encodeURIComponent(`https://aidealradar.vercel.app/articles/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://aidealradar.vercel.app/articles/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://aidealradar.vercel.app/articles/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.frontmatter.title,
            "description": article.frontmatter.description,
            "author": {
              "@type": "Person",
              "name": article.frontmatter.author,
            },
            "datePublished": article.frontmatter.date,
            "dateModified": article.frontmatter.date,
            "url": `https://aidealradar.vercel.app/articles/${article.slug}`,
            "publisher": {
              "@type": "Organization",
              "name": "AI Tech Digest",
              "logo": {
                "@type": "ImageObject",
                "url": "https://aidealradar.vercel.app/logo.png",
              },
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://aidealradar.vercel.app/articles/${article.slug}`,
            },
          }),
        }}
      />

      <Footer />
    </div>
  )
}

export default ArticlePage
