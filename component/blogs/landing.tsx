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
import { CalendarDays } from "lucide-react";

interface Slide {
    category: string;
    title: string;
    description: string;
    subContent?: string;
    image: string;
}
export interface BlogItem {
  id: number;
  blog_id: number;
  title: string;
  link: string;
  content: string;
  images: string[];
  subcontents?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CategoryData {
  id: number;
  category: string;
  is_published: boolean;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  items: BlogItem[];
}

export interface BlogResponseData {
  success: boolean;
  message: string;
  data: CategoryData[];
}


const ArtCarousel = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [slides, setSlides] = React.useState<Slide[]>([]);
    const [loading, setLoading] = React.useState(true);

    // Fetch slides
    React.useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await apiClient.get<BlogResponseData>(
                    getApiEndpoint.getBlogs("Main")
                );


                const categories: CategoryData[] = response.data.data;

                const mappedSlides: Slide[] = categories.flatMap((cat) =>
                    cat.items.map((item: BlogItem) => ({
                        category: cat.category,
                        title: item.title,
                        description: item.content,
                        subContent: item.subcontents?.join(" "),
                        image:
                            item.images?.length > 0
                                ? item.images[0]
                                : "/Beutiful Dzong.jpg",
                    }))
                );

                setSlides(mappedSlides);
            } catch (err) {
                console.error("Failed to fetch slides:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSlides();
    }, []);

    // Carousel scroll listener
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
                                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-xl">
                                        {slide.category}
                                    </span>

                                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                                        {slide.title}
                                    </h2>

                                    {slide.description && (
                                        <p className="text-gray-600">
                                            {slide.description}
                                        </p>
                                    )}

                                    {slide.subContent && (
                                        <p className="text-gray-600 my-2">
                                            {slide.subContent}
                                        </p>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="relative w-full md:w-1/2 h-[400px]">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        unoptimized
                                        className="object-cover rounded-sm shadow-lg"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation */}
                {/* <div className="hidden md:flex justify-between mt-10">
                    <CarouselPrevious />
                    <CarouselNext />
                </div> */}

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className={`h-2.5 w-2.5 rounded-full transition-all ${
                                current === i
                                    ? "bg-green-600 w-4"
                                    : "bg-gray-300 w-4 hover:bg-green-400"
                            }`}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
};

export default ArtCarousel;
