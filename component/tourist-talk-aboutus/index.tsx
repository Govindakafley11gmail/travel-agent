"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback, useRef } from "react";
import apiClient from "@/app/api/apiClient";
import { apiBaseUrl, getApiEndpoint } from "@/app/api";

export default function TouristTalkAboutUs() {


  const [api, setApi] = useState<CarouselApi | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [currentSnap, setCurrentSnap] = useState(0);
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [review, setReviews] = useState();
  const [testimonials, setTestimonials] = useState([
 { name: "John Doe", email: "Venice, Italy", comment: "Our trip to Lumora Tours and Travel was amazing! Lumora Tours and Travel organized everything perfectly, from the hotels to the sightseeing spots. I was very impressed and will definitely return!", createdAt: "Jun 25 24", rating: 5 },
]);
  // Update slidesPerView based on = viewport
  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) setSlidesPerView(1);
    else if (width < 1024) setSlidesPerView(2);
    else setSlidesPerView(3);
  }, []);
 useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getUserReview()); // ✅ call backend API
        setTestimonials(response.data.response); // Adjust this based on your response shape (e.g., response.data.data)
      } catch (err: any) {
      }
    };

    fetchReviews();
  }, []);
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [updateSlidesPerView]);

useEffect(() => {
  if (!api) return;

  const onSelect = () => setCurrentSnap(api.selectedScrollSnap());

  onSelect(); // set initial snap
  api.on("select", onSelect);

  // Cleanup: make sure it returns void
  return () => {
    if (api) api.off("select", onSelect);
  };
}, [api]);

  // Scroll to specific snap
  const goToSnap = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <p className="text-green-600 text-sm mb-2 font-sans">SHARED EXPERIENCES</p>
            <h2 className="text-3xl md:text-xl font-bold text-gray-900">What clients say about us?</h2>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="text-right">
              <p className="text-2xl font-extrabold text-gray-900">+2K</p>
              <p className="text-sm text-gray-600">Tour bookings</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-gray-900">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-sm text-gray-600 ml-1">(+0.5K reviews)</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials?.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full bg-white shadow-sm border rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={`/placeholder-user-${(i % 6) + 1}.jpg`} alt={t.name} />
                          <AvatarFallback>{t.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">{t.name}</p>
                          <p className="text-sm text-gray-500">{t.email}</p>
                        </div>
                      </div>
                      <span className="text-4xl text-gray-200 select-none">”</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.comment}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                    {/* <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs font-medium">{t.createdAt}</Badge> */}
                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs font-medium">
  {new Date(t.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
</Badge>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

     
        </Carousel>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {api?.scrollSnapList().map((_, i) => (
            <button
              key={i}
              onClick={() => goToSnap(i)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                i === currentSnap ? "bg-green-600 w-12" : "bg-gray-300 w-6 hover:bg-green-400"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
