"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TeamMember {
  img: string;
  name: string;
  email?: string;
  role: string;
  description: string
}

interface TeamSectionProps {
  data: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(4);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null); // ✅ For dialog

  // 🧩 Responsive slides count
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 768) setSlidesToScroll(1);
      else if (window.innerWidth < 1024) setSlidesToScroll(1);
      else setSlidesToScroll(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🧩 Force carousel to update when slidesToScroll changes
  useEffect(() => {
    if (api) {
      api.reInit({
        align: "center",
        containScroll: "trimSnaps",
        slidesToScroll,
      });
    }
  }, [slidesToScroll, api]);

  // 🧩 Calculate total slide pages
  const totalSlides = Math.max(3, Math.ceil(data.length / slidesToScroll));

  // 🧩 Track index
  useEffect(() => {
    if (!api) return;

    const handleSelect = (): void => {
      const selectedIndex = Math.floor(
        api.selectedScrollSnap() / slidesToScroll
      );
      setCurrentIndex(selectedIndex);
    };

    api.on("select", handleSelect);
    handleSelect();
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, slidesToScroll]);

  const handleDotClick = (index: number): void => {
    if (!api) return;
    api.scrollTo(index * slidesToScroll);
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-green-600 uppercase tracking-widest font-semibold mb-2">
          Enthusiastic People
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Meet Our Team
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-4xl mx-auto  overflow-y-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            slidesToScroll,
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-6">
            {data.map((member, index) => (
              <CarouselItem
                key={index}
                className="flex-none w-[280px] md:w-[300px] lg:w-[280px]"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white p-0 m-0">
                  <div className="p-0 m-0 relative h-64 w-80 mx-auto">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardContent className="p-3 text-center -pb-9">
                    {/* ✅ Clickable Name */}
                    <h3
                      onClick={() => setSelectedMember(member)}
                      className="text-lg md:text-xl font-semibold text-gray-900 cursor-pointer hover:text-green-600 transition-colors"
                    >
                      {member.name}
                    </h3>

                    {member.email && (
                      <p className="text-sm text-gray-500">{member.email}</p>
                    )}
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-8 pb-5">
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

      {/* ✅ Dialog Popup */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedMember.name}</DialogTitle>
                <DialogDescription>{selectedMember.role}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center mt-4">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {selectedMember.email && (
                  <p className="text-sm text-gray-600 mb-2">
                    📧 {selectedMember.email}
                  </p>
                )}
                <p className="text-sm text-gray-700 text-center">
                 {selectedMember.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamSection;
