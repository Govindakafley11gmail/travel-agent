"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import image from "../../image/Paro_Taktsang.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [api, setApi] = useState<any>();
const [current, setCurrent] = useState(0);

useEffect(() => {
  if (!api) return;

  setCurrent(api.selectedScrollSnap());

  api.on("select", () => {
    setCurrent(api.selectedScrollSnap());
  });
}, [api]);
  const destinations = [
    {
      title: "Paris, France",
      img: image,
    },
    {
      title: "Tokyo, Japan",
      img: image,
    },
    {
      title: "Bali, Indonesia",
      img: image,
    },
  ];
  const slides = [
    {
      image: "/image1.jpg",
      alt: "Beautiful nature scene 1",
    },
    {
      image: "/image2.jpg",
      alt: "Beautiful nature scene 2",
    },
    {
      image: "/image3.jpg",
      alt: "Beautiful nature scene 3",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative text-white px-0">
        <div className="w-full relative h-[400px] md:h-[500px]">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
                      setApi={setApi}

            orientation="vertical"
            className="w-full h-full"
          >
            <CarouselContent className=" h-[400px] md:h-[500px] p-0 ">
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className=" h-[700px] md:h-[500px] m-0 p-0"
                >
                  <div className="relative  w-full h-full overflow-hidden rounded-none">
                    <Image
                      fill
                      src={slide.image}
                      alt={slide.alt}
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute right-78 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="flex justify-center py-10 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all"
          >
            Explore Destinations
          </Button>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Popular Destinations
          </h2>
          <p className="text-gray-600 mb-10">
            Discover our most loved travel spots across the globe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <Image
                    src={dest.img}
                    alt={dest.title}
                    width={400}
                    height={250}
                    className="w-full h-52 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      {dest.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Explore & book your dream trip today
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
