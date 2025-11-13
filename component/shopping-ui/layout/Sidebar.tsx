// app/SidebarLayout.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Flame, HandHeart, Gift, Package, Sparkles, Flower2, ShoppingBag, Menu, X,
} from "lucide-react";

import PopularProducts from "../product/PopularProducts";
import Highlights from "../ui/highlight";
import HeroBanner from "./HeroBanner";

const categories = [
  { name: "Candles", icon: Flame },
  { name: "Handmade", icon: HandHeart },
  { name: "Gift Sets", icon: Gift },
  { name: "Plastic Gifts", icon: Package },
  { name: "Handy Cream", icon: Sparkles },
  { name: "Cosmetics", icon: Flower2 },
  { name: "Silk Accessories", icon: ShoppingBag },
];

export default function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Gift Sets");

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (name: string) => {
    setSelectedCategory(name);
    if (window.innerWidth < 768) setIsOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-2xl transition-transform duration-300 md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between bg-pink-600 p-5 text-white">
            <div className="flex items-center gap-3">
              <Menu className="h-6 w-6" />
              <h2 className="text-xl font-bold">Categories</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="md:hidden">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto p-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left transition-all ${
                    selectedCategory === cat.name
                      ? "bg-pink-100 text-pink-700 font-bold shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="border-t bg-gray-50 p-5 text-sm font-medium text-gray-600">
            <p className="mb-2">Value of the Day</p>
            <p className="mb-2">Top 100 Offers</p>
            <p>New Arrivals</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Mobile Menu Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed left-4 top-4 z-50 rounded-full bg-pink-600 p-4 text-white shadow-2xl md:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        )}

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="mx-auto max-w-7xl p-6 pt-20 md:pt-8">
            {/* Search Bar */}
            <div className="mb-10">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-2xl border border-gray-300 px-6 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-pink-200 transition-shadow"
              />
            </div>

            {/* Dynamic Content */}
            <div className="space-y-16">
              {selectedCategory === "Gift Sets" && <PopularProducts />}
              {selectedCategory === "Candles" && <HeroBanner />}
              {selectedCategory === "Handmade" && <Highlights />}
              {selectedCategory === "Plastic Gifts" && <PopularProducts />}
              {selectedCategory === "Handy Cream" && <PopularProducts />}
              {selectedCategory === "Cosmetics" && <PopularProducts />}
              {selectedCategory === "Silk Accessories" && <PopularProducts />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}