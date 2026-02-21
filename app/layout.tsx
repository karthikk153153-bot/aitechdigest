import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Radar - This is Testing',
  description: 'Tech Radar - Testing automation and deployment systems.',
  keywords: 'tech radar, technology news, testing, automation, deployment, AI tools',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Tech Radar - This is Testing',
    description: 'Tech Radar - Testing automation and deployment systems.',
    type: 'website',
    url: 'https://aidealradar.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Radar - This is Testing',
    description: 'Tech Radar - Testing automation and deployment systems.',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://aidealradar.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tech Radar - This is Testing",
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
