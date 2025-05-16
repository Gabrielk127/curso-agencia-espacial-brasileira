"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

interface CarouselCard {
  image: string;
  title: string;
}

interface MultiCardCarouselProps {
  cards: CarouselCard[];
  className?: string;
  autoplaySpeed?: number;
}

export default function MultiCardCarousel({
  cards,
  className,
  autoplaySpeed = 5000,
}: MultiCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");

  // Determine how many cards to show based on screen size
  const cardsToShow = isDesktop ? 3 : isTablet ? 2 : 1;

  // Calculate the maximum index
  const maxIndex = Math.max(0, cards.length - cardsToShow);

  // Handle autoplay
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [isAutoplay, maxIndex, autoplaySpeed]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  // Navigation functions
  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const goToPrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;

    // Minimum swipe distance (px)
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  // Get visible cards based on current index
  //   const getVisibleCards = () => {
  //     return cards.slice(currentIndex, currentIndex + cardsToShow);
  //   };

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4`}
              style={{ flex: `0 0 ${100 / cardsToShow}%` }}
            >
              <div className="h-full rounded-lg overflow-hidden shadow-lg relative group">
                {/* Background image with overlay */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-blue-900/30">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 z-10 transition-all"
        aria-label="Previous slide"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 z-10 transition-all"
        aria-label="Next slide"
        disabled={currentIndex >= maxIndex}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoplay(false);
              setCurrentIndex(index);
              setTimeout(() => setIsAutoplay(true), 5000);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-600 w-8" : "bg-blue-200 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
