"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MainNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();


  const navItems = ["All Trips", "Culture", "Blogs", "About Us", "Contact"];

  return (
    <nav
      className={`w-full bg-white shadow-md transition-transform duration-700 ease-in-out z-50
    `}
      
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo + Text */}
        <div className="flex items-center whitespace-nowrap justify-start px-20 md:px-60 lg:px-0">
          <Image
            src="/lumora_logo.jpeg"
            alt="Lumora Logo"
            width={150}
            height={150}
            className="w-16 sm:w-20 md:w-20 lg:w-28 h-auto"
          />
          <h1 className="text-base sm:text-sm md:text-base lg:text-xl text-gray-800 ml-[-10px] leading-none font-serif font-bold">
            Lumora Tours and Travel
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative cursor-pointer group"
              onMouseEnter={() => setOpen(item)}
              onMouseLeave={() => setOpen(null)}
            >
              <span className="flex items-center gap-1 font-medium text-gray-700">
                {item} <ChevronDown size={16} />
              </span>

              {open === item && (
                <div className="absolute left-0 top-8 bg-white border rounded-lg shadow-lg p-3 text-sm z-50 min-w-[150px]">
                  <Link
                    href="#"
                    className="block px-3 py-1 rounded hover:bg-green-50"
                  >
                    Option 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-3 py-1 rounded hover:bg-green-50"
                  >
                    Option 2
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex lg:flex items-center gap-3 justify-around">
          <div className="relative hidden lg:block">
            <ShoppingBag className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>
          <div className="relative hidden lg:block">
            <Heart className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">
              5
            </span>
          </div>
          <div
            className="bg-gradient-to-r from-green-500 to-green-700 rounded-full p-2 text-white cursor-pointer hover:from-green-600 hover:to-green-800 transition"
            onClick={() => setDrawerOpen(true)}
          >
            <User size={24} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:block lg:hidden text-gray-700 absolute left-7"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:block lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={() => setOpen(open === item ? null : item)}
                  className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
                >
                  {item}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      open === item ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === item && (
                  <div className="pl-4 text-sm text-gray-600 space-y-1">
                    <Link href="#" className="block hover:text-green-600">
                      Option 1
                    </Link>
                    <Link href="#" className="block hover:text-green-600">
                      Option 2
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
