import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BWSC 2025 Gallery | SNU SOLO',
  description: 'Gallery of our next-generation solar car for the 2025 Bridgestone World Solar Challenge',
};

export default function Gallery2025Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            BWSC 2025: Coming Soon
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our next-generation solar car for the 2025 Bridgestone World Solar Challenge
          </p>
        </div>

        {/* Gallery Placeholder */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-16 rounded-2xl shadow-xl border border-blue-600/20 text-center">
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
                <path d="M15 8h.01"></path>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <path d="M3 14l4-4a3 3 0 0 1 3 0l7 7"></path>
                <path d="M16 13l2-2a3 3 0 0 1 3 0l2 2"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Gallery Coming Soon</h2>
            <p className="text-xl text-gray-300 mb-8">
              We are preparing a gallery of our next-generation solar car for the 2025 competition.
            </p>
            <p className="text-lg text-gray-400">
              Please check back soon to see our designs and progress for BWSC 2025.
            </p>
          </div>
        </div>

        {/* Project Goals Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-10 rounded-2xl shadow-xl border border-blue-600/20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Our BWSC 2025 Goals
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8">
            Building on our experience from BWSC 2023, we are designing a more efficient, reliable, and competitive solar car for the 2025 challenge.
          </p>
          <p className="text-lg text-center text-gray-400">
            Our team is focused on innovative aerodynamics, advanced power systems, and lightweight materials to create a world-class solar vehicle.
          </p>
        </div>
      </div>
    </div>
  );
} 