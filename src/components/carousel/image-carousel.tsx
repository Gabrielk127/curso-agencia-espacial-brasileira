"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoplaySpeed?: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  autoplaySpeed = 5000,
  className,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle autoplay
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [isAutoplay, images.length, autoplaySpeed]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  // Navigation functions
  const goToNext = () => {
    setIsAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const goToPrevious = () => {
    setIsAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoplay(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
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

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      {/* Main carousel */}
      <div
        className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              {/* Background image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70">
                <Image
                  src={images[currentIndex].src || "/placeholder.svg"}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover mix-blend-overlay"
                  fill
                />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-5xl px-6 md:px-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6">
                      {images[currentIndex].title}
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-200 mb-4 md:mb-8">
                      {images[currentIndex].subtitle}
                    </h3>
                    <p className="text-sm md:text-lg text-white max-w-2xl mx-auto">
                      {images[currentIndex].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 md:p-3 z-10 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 md:p-3 z-10 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-8" : "bg-white/50 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
