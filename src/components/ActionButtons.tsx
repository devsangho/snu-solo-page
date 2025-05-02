import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ActionButtons() {
  return (
    <section className="py-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/about/history">
            <Button 
              size="lg" 
              className="bg-blue-700 text-white hover:bg-blue-600 font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn About Us
            </Button>
          </Link>
          <Link href="/partners">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-900/20 font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Become a Partner
            </Button>
          </Link>
        </div>
        
        {/* Partner Organizations */}
        <div className="mt-12">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-8 font-semibold text-center">
            Partner Organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {['Seoul National University', 'College of Engineering', 'SNU', 'Solar Energy', 'BWSC'].map((name, index) => (
              <div 
                key={index}
                className="bg-blue-900/20 backdrop-blur-sm h-20 w-48 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 hover:bg-blue-800/20 transition-all duration-300 border border-blue-500/20"
              >
                <div className="text-blue-300 text-lg font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 