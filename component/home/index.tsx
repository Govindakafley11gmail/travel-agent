"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import StatsSection from "../stats/statsSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { BookingForm } from "../booking-alert/booking-alert";

export default function HomePage() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [openBooking, setOpenBooking] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      image: "/Beautiful Dzong.jpg",
      alt: "Beautiful nature scene 1",
      title: "Explore majestic ",
      subtitle: " mountain ranges",
      tagline: "EXPLORE BHUTAN",
    },
    {
      image: "/Beautiful Valley.jpg",
      alt: "Beautiful nature scene 2",
      title: "Discover hidden",
      subtitle: "cultural treasures",
      tagline: "EXPERIENCE CULTURE",
    },
    {
      image: "/Green Paddy field.jpg",
      alt: "Beautiful nature scene 3",
      title: "Journey through",
      subtitle: "ancient monasteries",
      tagline: "SPIRITUAL ADVENTURE",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative text-white px-0">
        <div className="w-full relative min-h-[60vh] md:h-screen">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 5000 })]}
            setApi={setApi}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="min-h-[60vh] md:h-screen p-0 m-0">
                  <div className="relative w-full h-full">
                    {/* Background Image */}
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={index === 0}
                      quality={90}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

                    {/* Content Overlay - Centered */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 xl:px-32">
                      {/* Tagline */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-6xl tracking-widest text-white"
                      >
                        {slide.tagline}
                      </motion.p>

                      {/* Main Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-7xl font-bold leading-tight mt-2"
                      >
                        {slide.title}
                        <br />
                        {slide.subtitle}
                      </motion.h1>

                      {/* Book Now Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6"
                      >
                        <Button
                          size="lg"
                          className="bg-green-600 hover:bg-white hover:text-gray-900 text-white font-semibold rounded-md px-6 md:px-8 transition-all group"
                          onClick={() => setOpenBooking(true)}
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Dots */}
            <div
              className="
                absolute 
                bottom-7 md:bottom-7 lg:bottom-1/2
                left-1/2 md:left-1/2 lg:left-[90%]
                -translate-x-1/2 md:-translate-x-1/2 lg:translate-x-0
                flex md:flex-row lg:flex-col gap-3 z-40
              "
            >
              {slides.map((_, index) => {
                const isActive = current === index;
                return (
                  <button
                    key={index}
                    className={`
                      relative w-4 h-4 rounded-full
                      border transition-all duration-300
                      ${isActive
                        ? "border-2 border-green-400 bg-transparent scale-125 shadow-md"
                        : "border border-white/50 bg-dotcolor hover:border-white/80 hover:scale-110"
                      }
                    `}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 m-auto w-1 h-1 bg-green-500 rounded-full shadow-sm" />
                    )}
                  </button>
                );
              })}
            </div>
          </Carousel>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Booking Dialog */}
      <Dialog open={openBooking} onOpenChange={setOpenBooking}>
        <DialogContent className="max-w-md rounded-2xl p-6 bg-white">
          <VisuallyHidden>
            <DialogTitle>Booking Form</DialogTitle>
          </VisuallyHidden>
          <BookingForm onClose={() => setOpenBooking(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
