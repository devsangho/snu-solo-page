import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | SNU SOLO',
  description: 'Latest news and updates from Seoul National University Solar Car Team',
};

export default function NewsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest updates from SNU SOLO
          </p>
        </div>

        {/* Latest News Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full max-w-xs"></div>
            <h2 className="text-3xl font-bold px-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Latest Updates
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full max-w-xs"></div>
          </div>
          
          {/* News Item Placeholder */}
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-10 rounded-2xl shadow-xl border border-blue-600/20 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">BWSC 2023 Completion</h3>
            <p className="text-xl text-gray-300 mb-8">
              SNU SOLO successfully participated in the 2023 Bridgestone World Solar Challenge with our first solar car &ldquo;dokkaebi&rdquo;.
            </p>
            <p className="text-lg text-gray-400">
              October 25, 2023
            </p>
          </div>

          {/* News Item Placeholder */}
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-10 rounded-2xl shadow-xl border border-blue-600/20 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">BWSC 2025 Preparation Begins</h3>
            <p className="text-xl text-gray-300 mb-8">
              Our team has started the design phase for our next-generation solar car for the 2025 Bridgestone World Solar Challenge.
            </p>
            <p className="text-lg text-gray-400">
              February 15, 2024
            </p>
          </div>

          {/* More News Coming Soon */}
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-10 rounded-2xl shadow-xl border border-blue-600/20 text-center mb-20">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">More Updates Coming Soon</h3>
            <p className="text-xl text-gray-300">
              Stay tuned for more updates on our progress and achievements.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-10 rounded-2xl shadow-xl border border-blue-600/20">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-center text-gray-300 mb-8">
              Follow our journey as we design, build, and race our solar cars in the Bridgestone World Solar Challenge.
            </p>
            <div className="flex justify-center">
              <a 
                href="/about/contact"
                className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-lg font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 