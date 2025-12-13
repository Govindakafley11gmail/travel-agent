"use client";

import { useState, useEffect } from "react";
import {
  Flame, HandHeart, Gift, Package, Sparkles, Flower2, ShoppingBag,
  Menu, X, ChevronLeft, ChevronRight,
} from "lucide-react";

import PopularProducts from "../product/PopularProducts";
import Highlights from "../ui/highlight";
import HeroBanner from "./HeroBanner";
import MadeInBhutan from "../product/MadeInBhutan";
import CraftsandDress from "../product/CraftsandDress";
import LumoraMagazine from "../product/LumoraMagazine";
import LumoraChoice from "../product/LumoraChoice";
import OGOP from "../product/OGOP";
import Snacks from "../product/Snacks";
import TripCard from "../product/PopularProducts";

const categories = [
  { name: "Lumora Merch", icon: Flame },
  { name: "Made in Bhutan", icon: HandHeart },
  { name: "OGOP", icon: Gift },
  { name: "Crafts and Dress", icon: Package },
  { name: "Snacks", icon: Sparkles },
  { name: "Lumora Magazine", icon: Flower2 },
  { name: "Lumora Choice", icon: ShoppingBag },
  { name: "Bhutan Herbal", icon: ShoppingBag },
  { name: "Grown in Bhutan", icon: ShoppingBag }
];

export default function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Lumora Merch");
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect screen size & scroll
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategoryClick = (name: string) => {
    setSelectedCategory(name);
    if (isMobile) setIsOpen(false);
  };

  return (
    <div className="flex min-h-screen relative bg-gray-50 overflow-y-auto">
      {/* Sidebar */}
      <div
        className={`z-40 h-full w-64 transition-all duration-300 ease-in-out
          ${isMobile ? "fixed left-0 md:relative" : "sticky top-0"}
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
        `}
        style={isMobile ? { top: scrolled ? 90 : 128 } : undefined}
      >
        <div
          className={`
    ml-0  flex w-full h-full flex-col px-2 md:px-0 
    shadow-xl md:shadow-xl lg:shadow-none rounded-xl md:bg-gray-50 bg-white
  `}
        >
          <div className="flex items-center justify-between p-5 text-black">
            <h2 className="text-xl font-bold">Categories</h2>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left transition-all ${selectedCategory === cat.name
                    ? "border border-green-500 whitespace-nowrap font-bold shadow-md"
                    : "hover:bg-gray-100"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="h-5 w-5" />
                    <span>{cat.name}</span>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </button>

              );
            })}
          </nav>

          <div className="border-t bg-gray-50 p-5 text-sm font-medium text-gray-600">
            <p className="mb-2">Value of the Day</p>
            <p className="mb-2">Top 100 Offers</p>
            <p>New Arrivals</p>
          </div>

          {/* Arrow handle only on mobile */}
          {isMobile && (
            <button
              className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col ml-2  md:ml-10">
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="mx-auto max-w-9xl  md:p-6 md:pt-20 pt-2">
            {/* Search Bar */}


            {/* Dynamic Content */}
            <div className="space-y-16 ">
              {selectedCategory === "Lumora Merch" && <TripCard />}
              {selectedCategory === "Made in Bhutan" && <MadeInBhutan />}
              {selectedCategory === "OGOP" && <OGOP />}
              {selectedCategory === "Crafts and Dress" && <CraftsandDress />}
              {selectedCategory === "Snacks" && <Snacks />}
              {selectedCategory === "Lumora Magazine" && <LumoraMagazine />}
              {selectedCategory === "Lumora Choice" && <LumoraChoice />}
              {selectedCategory === "Bhutan Herbal" && <LumoraChoice />}
              {selectedCategory === "Grown in Bhutan" && <LumoraChoice />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
