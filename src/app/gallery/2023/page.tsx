import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BWSC 2023 Gallery | SNU SOLO',
  description: 'Gallery of our first solar car "dokkaebi" for the 2023 Bridgestone World Solar Challenge',
};

export default function Gallery2023Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            BWSC 2023: Dokkaebi
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our first solar car for the 2023 Bridgestone World Solar Challenge
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
              We are preparing a gallery of our first solar car &ldquo;dokkaebi&rdquo; from the 2023 competition.
            </p>
            <p className="text-lg text-gray-400">
              Please check back soon to see images and details of our journey during BWSC 2023.
            </p>
          </div>
        </div>

        {/* Car Specs Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Dokkaebi Specifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Dimensions</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Length: 5.0 meters</li>
                <li>Width: 1.8 meters</li>
                <li>Height: 1.1 meters</li>
                <li>Weight: Approximately 250 kg</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Solar Array</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Cell Type: High-efficiency silicon solar cells</li>
                <li>Area: 4 square meters</li>
                <li>Power Output: Approximately 1.2 kW (peak)</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Battery</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Type: Lithium-ion</li>
                <li>Capacity: 5 kWh</li>
                <li>Management: Custom Battery Management System (BMS)</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Motor</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Type: Brushless DC electric motor</li>
                <li>Power: 3 kW nominal, 5 kW peak</li>
                <li>Efficiency: &gt;95%</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Chassis & Body</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Chassis: Carbon fiber monocoque</li>
                <li>Body: Carbon fiber composite</li>
                <li>Drag Coefficient: Approximately 0.16</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Performance</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Top Speed: 110 km/h</li>
                <li>Cruising Speed: 80-90 km/h</li>
                <li>Energy Consumption: 1.5 kWh per 100 km at cruising speed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BWSC 2023 Experience */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-10 rounded-2xl shadow-xl border border-blue-600/20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Our BWSC 2023 Journey
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8">
            The 2023 Bridgestone World Solar Challenge marked SNU SOLO&apos;s first international competition. Despite challenges, our team gained valuable experience that will propel us forward to BWSC 2025.
          </p>
          <p className="text-lg text-center text-gray-400">
            Our journey across the Australian Outback taught us invaluable lessons about solar car design, team management, and international collaboration that form the foundation of our future success.
          </p>
        </div>
      </div>
    </div>
  );
} 