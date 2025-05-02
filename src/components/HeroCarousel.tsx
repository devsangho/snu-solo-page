'use client';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Slide {
  id: number;
  title: string;
  description?: string;
  imageSrc: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative h-[70vh] w-full">
              {/* Placeholder for image (would be better with actual images) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h1>
                    {slide.description && (
                      <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                        팀 소개 보기
                      </Button>
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                        파트너 되기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        <div className="text-sm text-white mr-2">Previous slide</div>
        <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8" />
        <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8" />
        <div className="text-sm text-white ml-2">Next slide</div>
      </div>
    </Carousel>
  );
} 