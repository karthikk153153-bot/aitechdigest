import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Tech Digest - Latest AI & Technology News, Reviews & Guides',
  description: 'Your trusted source for AI news, technology trends, software reviews, and expert guides. Stay updated with the latest in artificial intelligence and tech.',
  keywords: 'AI news, technology news, software reviews, AI tools, tech guides, artificial intelligence, tech trends',
  openGraph: {
    title: 'AI Tech Digest - Latest AI & Technology News',
    description: 'Your trusted source for AI news, technology trends, and software reviews.',
    type: 'website',
    url: 'https://aidealradar.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tech Digest - Latest AI & Technology News',
    description: 'Your trusted source for AI news, technology trends, and software reviews.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aidealradar.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Tech Digest",
              "url": "https://aidealradar.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aidealradar.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
