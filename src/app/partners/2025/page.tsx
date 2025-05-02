import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2025 BWSC Partners | SNU SOLO',
  description: 'Our partners for the 2025 Bridgestone World Solar Challenge',
};

export default function Partners2025Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            2025 BWSC Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our partners for the upcoming Bridgestone World Solar Challenge 2025.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-16 rounded-2xl shadow-xl border border-blue-600/20 mb-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-blue-300"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Coming Soon</h2>
            <p className="text-xl text-gray-300 mb-8">
              We are currently in the process of establishing partnerships for the 2025 Bridgestone World Solar Challenge.
            </p>
            <p className="text-lg text-gray-400">
              Please check back later for updates on our 2025 BWSC Partners.
            </p>
          </div>
        </div>

        {/* Become a Partner Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-10 rounded-2xl shadow-xl border border-blue-600/20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Become a Partner
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8">
            Join us in our mission to advance solar energy technology and compete in the Bridgestone World Solar Challenge 2025.
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
  );
} 