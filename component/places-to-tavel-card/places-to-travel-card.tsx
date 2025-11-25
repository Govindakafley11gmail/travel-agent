"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Star,
  Heart,
  ArrowRight,
  Flame,
  Tag,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

interface SpecificDetailsCard {
  id?: number;
  img?: string;
  title?: string;
  subtitle?: string;
  durationDays?: number;
  slug: string;
  destinations?: string;
  ratingnumber?: number;
  reviews?: number;
  category?: string;
  ages?: string;
  discountPercent?: number;
  finalPrice?: number;
  originalPrice?: number;
  isTrending?: boolean;
  status?: string;
  images?: string;
}

interface TravelingtoPlacesProps {
  data: SpecificDetailsCard[];
}

const PlacesToTravelOptions: React.FC<TravelingtoPlacesProps> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(4);
  const router = useRouter();

  // Responsive slides
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 768) setSlidesToScroll(1);
      else setSlidesToScroll(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(data.length / slidesToScroll);

  // Carousel index tracking
  useEffect(() => {
    if (!api) return;

    const handleSelect = (): void => {
      const selectedIndex = Math.floor(api.selectedScrollSnap() / slidesToScroll);
      setCurrentIndex(selectedIndex);
    };

    api.on("select", handleSelect);
    handleSelect();

    return (): void => {
      api.off("select", handleSelect);
    };
  }, [api, slidesToScroll]);

  const handleDotClick = (index: number): void => {
    if (!api) return;
    api.scrollTo(index * slidesToScroll);
    setCurrentIndex(index);
  };

  const handleClick = (slug: string): void => {
    router.push(`/${slug}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          slidesToScroll,
          containScroll: "trimSnaps",
        }}
        className="w-full"
      >
        <CarouselContent className="flex gap-4">
          {data.map((details, index) => (
            <CarouselItem key={index} className="flex-none w-[350px]">
              <Card   onClick={() => handleClick(details.slug)} className="w-full h-[480px] bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col p-0 rounded-2xl">
                {/* Image Section */}
                <CardHeader className="relative p-0">
                  <Image
                    src={details.images?.at(0) || "/default-image.jpg"}
                    alt={details.title || "place image"}
                    width={288}
                    height={200}
                    className="object-cover w-full h-[220px]"
                  />

                  {/* Favorite Icon */}
                  <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200">
                    <Heart className="w-4 h-4 text-green-500 fill-green-500" />
                  </button>

                  {/* Trending Badge */}
                  {details.isTrending && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 shadow">
                      <Flame className="w-3 h-3" /> Trending
                    </div>
                  )}

                  {/* Discount Tag */}
                  {details.discountPercent !==0 && (
                    <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 shadow">
                      <Tag className="w-3 h-3" /> {details.discountPercent}% OFF
                    </div>
                  )}
                </CardHeader>

                {/* Content Section */}
                <CardContent className="p-3 flex-grow flex flex-col justify-between overflow-hidden">
                  <div>
                    {/* Category */}
                    <p className="text-xs uppercase font-semibold text-green-600 mb-1">
                      {details.category || "Travel Package"}
                    </p>

                    {/* Title */}
                    <h2
                      className="text-base font-bold text-gray-900 line-clamp-2 cursor-pointer"
                    
                    >
                      {details.title}
                    </h2>

                    {/* Subtitle */}
                    {details.subtitle && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {details.subtitle}
                      </p>
                    )}

                    {/* Info Row */}
                    <div className="flex items-center gap-3 pb-1 border-b border-gray-200 text-gray-600 mb-2">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-sm font-medium">
                          {details.durationDays || 0} days
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-sm font-medium">
                          {details.destinations || "Bhutan"}
                        </span>
                      </div>
                    </div>

                    {/* Rating & Age Group */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < (details.ratingnumber || 4)
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      {details.ages && (
                        <span className="text-xs text-gray-500 italic">
                          Ages: {details.ages}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* Footer Section */}
                <CardFooter className="p-3 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900">
                        ${details.finalPrice}
                      </span>
                      {details.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${details.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-md hover:scale-110 transition-all duration-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-8 pb-5 w-full">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentIndex
                ? "bg-green-600 w-12"
                : "bg-gray-300 w-6 hover:bg-green-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToTravelOptions;
