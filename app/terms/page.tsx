import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - AI Tech Digest',
  description: 'Terms and conditions for using AI Tech Digest website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our website
          </p>
        </div>
      </div>

      <div className="container max-w-4xl py-12 flex-1">
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing or using AI Tech Digest ("we," "our," or "us"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of AI Tech Digest or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-gray-700 mb-6">
            You may not reproduce, distribute, modify, create derivative works, publicly display, or perform any content without our express written permission, except as permitted by copyright law.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Use License</h2>
          <p className="text-gray-700 mb-4">Permission is granted to temporarily download one copy of the materials on AI Tech Digest for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or mirror the materials on any other server</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">User Content</h2>
          <p className="text-gray-700 mb-4">
            By submitting any content to AI Tech Digest (including comments, feedback, or other communications), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, reproduce, and distribute such content for any purpose.
          </p>
          <p className="text-gray-700 mb-6">
            You represent and warrant that you own or have the necessary rights to any content you submit and that it does not violate any third-party rights or applicable laws.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            The materials on AI Tech Digest are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Limitations of Liability</h2>
          <p className="text-gray-700 mb-6">
            In no event shall AI Tech Digest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if AI Tech Digest or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Accuracy of Materials</h2>
          <p className="text-gray-700 mb-6">
            The materials appearing on AI Tech Digest could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials at any time without notice.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">External Links</h2>
          <p className="text-gray-700 mb-6">
            AI Tech Digest may contain links to external websites that are not provided or maintained by or in any way affiliated with AI Tech Digest. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Affiliate Links</h2>
          <p className="text-gray-700 mb-6">
            Some links on our website may be affiliate links. This means that if you click on the link and make a purchase, we may receive a commission at no additional cost to you. We only promote products and services that we believe will provide value to our readers. Affiliate relationships do not influence our editorial content or reviews.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            Your use of AI Tech Digest is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the website and informs users of our data collection practices.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Modifications</h2>
          <p className="text-gray-700 mb-6">
            AI Tech Digest may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>Email:</strong> contact@aidealradar.vercel.app
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
