"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface SpecificDetailsCard {
  img: string;
  title?: string;
  days?: number;
  slug: string;
  destinations?: string;
  ratingnumber?: number;
  charge?: number;
  originalPrice?: number | null; // ✅ allow null too
  reviews?: number;
}

interface TravelingtoPlacesProps {
  data: SpecificDetailsCard[];
}

const AllTripsComponent: React.FC<TravelingtoPlacesProps> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi | null>(null); // ✅ type fixed
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = data.length;

  // Track carousel index change
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
    };

    api.on("select", handleSelect);
    handleSelect();

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
    setCurrentIndex(index);
  };

  const handleClick = (slug: string) => {
    // Replace with your router navigation
    console.log(`Navigate to: ${slug}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {data.map((details, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card
                className="h-full flex flex-col border border-gray-200 rounded-lg 
  hover:shadow-xl hover:border-green-500 hover:scale-[1.03] 
  transition-all duration-300 ease-in-out cursor-pointer mx-auto"
              >
                {" "}
                {/* Image Header */}
                <CardHeader className="relative p-0">
                  <div className="relative  h-48 overflow-hidden flex items-center justify-center">
                    <img
                      src={details.img}
                      alt={details.title || "place image"}
                      className="h-full w-[90%] object-cover rounded" // ✅ narrower image
                    />
                  </div>
                  <button
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Added to favorites");
                    }}
                  >
                    <Heart className="w-4 h-4 text-green-500 fill-green-500" />
                  </button>

                  {/* Pagination dots on image */}
                </CardHeader>
                {/* Content */}
                <CardContent
                  className="p-3.5"
                  onClick={() => handleClick(details.slug)}
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                    {details.title}
                  </h3>

                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xs text-gray-600">
                      {details.days} days for
                    </span>
                    {details.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${details.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-base font-semibold text-gray-900">
                      ${details.charge?.toLocaleString()}
                    </span>
                  </div>

                  {details.originalPrice && details.charge && (
                    <div className="mt-1">
                      <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">
                        -
                        {Math.round(
                          ((details.originalPrice - details.charge) /
                            details.originalPrice) *
                            100
                        )}
                        %
                      </span>
                    </div>
                  )}
                </CardContent>
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

export default AllTripsComponent;
