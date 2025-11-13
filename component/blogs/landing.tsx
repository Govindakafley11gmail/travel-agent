"use client";

import * as React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";
import { BookingType } from "../dashboard/dashboard/booking";

interface Slide {
    category: string;
    title: string;
    description: string;
    image: string;
}

const ArtCarousel = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [slides, setSlides] = React.useState<Slide[]>([]);
    const [loading, setLoading] = React.useState(true);

    // Fetch slides from your API
    React.useEffect(() => {
        const fetchSlides = async () => {
            try {
                // Call the API
                const response = await apiClient.get(getApiEndpoint.getBlogs("main"));

                // Assuming your API response is { data: [...] }
                const data = response.data.data;
                console.log(data)
                // Map API data to Slide[]
                const mappedSlides: Slide[] = data.map((item: any) => ({
                    category: item.category || "Content",
                    title: item.title,
                    description: item.content,
                    image: item.images && item.images.length > 0 ? item.images[0] : "/Beutiful Dzong.jpg", // first image or fallback
                }));
                console.log(mappedSlides)

                // Update component state
                setSlides(mappedSlides);
            } catch (err) {
                console.error("Failed to fetch slides:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSlides();
    }, []);


    // Carousel select listener
    React.useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    if (loading) {
        return <div className="text-center py-20">Loading slides...</div>;
    }

    return (
        <div className="w-full bg-gray-50 py-20 px-6 md:px-16 rounded-2xl">
            <Carousel setApi={setApi} className="w-full max-w-7xl mx-auto">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                                {/* Text Section */}
                                <div className="md:w-1/2 space-y-6">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                                        {slide.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">{slide.description}</p>
                                </div>

                                {/* Image Section */}
                                <div className="relative w-full md:w-1/2 h-[400px]">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        unoptimized // disables Next.js image optimization
                                        className="object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Buttons */}
                <div className="hidden md:flex justify-between mt-10">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className={`h-2.5 w-2.5 rounded-full transition-all ${current === i ? "bg-purple-600 w-4" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
};

export default ArtCarousel;
