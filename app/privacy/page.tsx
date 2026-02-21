import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - AI Tech Digest',
  description: 'Learn how AI Tech Digest protects your privacy and handles your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us
          </p>
        </div>
      </div>

      <div className="container max-w-4xl py-12 flex-1">
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            AI Tech Digest ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and inform you of your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Data We Collect</h2>

          <h3 className="text-xl font-semibold text-blue-800 mb-3">Information You Provide</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Contact information (name, email) when you reach out to us</li>
            <li>Any information you voluntarily provide through forms or communications</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mb-3">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>IP address and browser type</li>
            <li>Operating system and device information</li>
            <li>Referring website and pages visited</li>
            <li>Time and date of visits</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">How We Use Your Data</h2>
          <p className="text-gray-700 mb-4">We use your personal data to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Provide and maintain our website</li>
            <li>Respond to your inquiries and provide support</li>
            <li>Analyze usage patterns to improve our content</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-6">
            We may use third-party services to help operate our website, including analytics, advertising, and payment processing. These services may have access to your data and are governed by their own privacy policies:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Google Analytics:</strong> For website analytics and usage insights</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements</li>
            <li><strong>Other advertising networks:</strong> For ad delivery and tracking</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Remember your preferences</li>
            <li>Understand how you use our website</li>
            <li>Provide personalized content and ads</li>
            <li>Analyze website performance</li>
          </ul>
          <p className="text-gray-700 mb-6">
            You can control cookies through your browser settings. Please note that disabling cookies may affect your experience on our website.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policy of any website you visit.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Advertising and Affiliates</h2>
          <p className="text-gray-700 mb-6">
            We participate in affiliate marketing programs and display advertisements from third-party networks. We may earn commissions when you make purchases through our affiliate links. These relationships do not influence our editorial content or reviews.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Data Retention</h2>
          <p className="text-gray-700 mb-6">
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Privacy Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 mb-6">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If we discover that we have collected such data, we will take steps to delete it.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">International Data Transfers</h2>
          <p className="text-gray-700 mb-6">
            Your information may be transferred to and processed in countries other than where you reside. We take appropriate safeguards to protect your personal data in accordance with this privacy policy and applicable laws.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
