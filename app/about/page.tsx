import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tech Radar</h1>
          <p className="text-xl text-blue-100">
            Tech Radar - Testing automation and deployment systems
          </p>
        </div>
      </div>

      <div className="container max-w-4xl py-12 flex-1">
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Who We Are</h2>
            <p className="text-gray-700">
              Tech Radar is a testing platform for automation and deployment systems. We are testing AI-powered content creation, deployment pipelines, and autonomous website management.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 text-center">
            <p className="text-xl font-semibold text-blue-900 mb-2">Testing Automation Systems</p>
            <p className="text-gray-700">We are developing and testing autonomous content generation, automated deployment pipelines, and intelligent website management systems.</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">What We Test</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>AI-Powered Tools:</strong> The latest in AI writing, image generation, and automation
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Productivity Software:</strong> Notes, calendars, task management, and more
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Developer Tools:</strong> Code editors, APIs, databases, and development platforms
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Business Software:</strong> CRM, marketing, finance, and SaaS solutions
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>SaaS Comparisons:</strong> Side-by-side feature and pricing breakdowns
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Approach</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Thorough Testing:</strong> We test tools extensively before reviewing
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Transparent Pros/Cons:</strong> We clearly state what's good and what's not
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Real-World Use Cases:</strong> We review tools based on actual usage scenarios
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Regular Updates:</strong> We keep our reviews current with the latest features
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <strong>No Sponsored Content:</strong> We don't get paid to recommend products
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <strong>User-Focused:</strong> Our reviews are written for real users, not marketers
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <strong>Comprehensive:</strong> We cover features, pricing, and alternatives
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <strong>Updated Regularly:</strong> We refresh our content as tools evolve
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
