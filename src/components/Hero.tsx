import HeroCarousel from './HeroCarousel';

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "Welcome to SNU SOLO",
      imageSrc: "/hero-1.jpg",
    },
    {
      id: 2,
      title: "Welcome to SNU SOLO",
      imageSrc: "/hero-2.jpg",
    },
    {
      id: 3,
      title: "Welcome to SNU SOLO",
      imageSrc: "/hero-3.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Hero Carousel */}
      <HeroCarousel slides={slides} />

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Introduction</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">We are SNU SOLO</h3>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6 text-center">
            We are the Seoul National University Solar Car Team. Found in 2022, we are a non-profit organization with the common goal of designing and building an efficient solar car. With the team being entirely run by undergraduates, our members are rewarded with the unique opportunity to gain real-world engineering, designing and project management experience.
          </p>
        </div>
      </div>
    </section>
  );
} 