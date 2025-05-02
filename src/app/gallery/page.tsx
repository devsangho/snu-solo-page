import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Car Gallery | SNU SOLO',
  description: 'Gallery of SNU SOLO solar cars for BWSC competitions',
};

export default function GalleryPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Car Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our solar cars for the Bridgestone World Solar Challenge.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* BWSC 2025 Card */}
          <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-xl border border-blue-600/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 transition-transform duration-500 group-hover:scale-110">
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8">
                <h2 className="text-3xl font-bold mb-3 text-white">BWSC 2025</h2>
                <p className="text-gray-300 mb-6 text-center">
                  Our next-generation solar car for the 2025 competition
                </p>
                <Link 
                  href="/gallery/2025"
                  className="inline-block bg-blue-600/80 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-sm"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>

          {/* BWSC 2023 Card */}
          <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-xl border border-blue-600/20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-blue-900 transition-transform duration-500 group-hover:scale-110">
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8">
                <h2 className="text-3xl font-bold mb-3 text-white">BWSC 2023</h2>
                <p className="text-gray-300 mb-6 text-center">
                  Our first solar car &ldquo;dokkaebi&rdquo; for the 2023 competition
                </p>
                <Link 
                  href="/gallery/2023"
                  className="inline-block bg-blue-600/80 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-sm"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Description */}
        <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-10 rounded-2xl shadow-xl border border-blue-600/20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Our Solar Cars
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8">
            SNU SOLO designs and builds advanced solar cars to compete in the Bridgestone World Solar Challenge, pushing the boundaries of solar energy technology.
          </p>
          <p className="text-lg text-center text-gray-400">
            Each vehicle represents thousands of hours of engineering, design, and testing by dedicated students from Seoul National University.
          </p>
        </div>
      </div>
    </div>
  );
} 