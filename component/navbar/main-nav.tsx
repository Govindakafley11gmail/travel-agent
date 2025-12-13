"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "../shopping-ui/product/cartContext";

export default function MainNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // ← Controls mobile menu
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const { cartItems } = useCart();

  const navItems = ["All-Trips", "Blogs", "About-Us", "E-Shop", "Contact-Us", "Review-Us"];

  // ← NEW: Close mobile menu when navigating
  const handleNavClick = (path: string) => {
    router.push(`/${path}`);
    setMenuOpen(false); // ← This line closes the mobile menu
  };

  return (
    <nav className={`w-full bg-white shadow-md transition-transform duration-700 ease-in-out z-50`}>
      <div className="container mx-auto flex justify-between items-center py-6 md:py-1">
        {/* Logo + Text */}
        <div className="flex items-center whitespace-nowrap px-20 md:px-60 lg:px-0">
          <Image
            src="/lumora_logo.png"
            alt="Lumora Logo"
            width={150}
            height={150}
            className="w-16 sm:w-20 md:w-20 lg:w-28 h-auto"
            style={{ color: "transparent", animation: "spin 5s linear infinite" }}
          />
          <a href="/">
            <h1 className="text-base font-sans sm:text-xl md:text-xl lg:text-xl text-gray-800 ml-[-10px] leading-none font-bold">
              {/* Lumora Tours and Travel */}
              <Image
                src="/lumora_logo-1.png"
                alt="Lumora Logo"
                width={300}
                height={150}
                className="w-18 sm:w-100 md:w-30 lg:w-30 h-auto"
              // style={{ color: "transparent", animation: "spin 5s linear infinite" }}
              />
            </h1>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => router.push(`/${item}`)}
              className="relative cursor-pointer group"
              onMouseEnter={() => setOpen(item)}
              onMouseLeave={() => setOpen(null)}
            >
              <span
                className="relative flex items-center font-sans gap-1 font-medium text-gray-700 
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                  after:bg-green-500 after:transition-all after:duration-700 hover:after:w-full"
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex lg:flex items-center gap-7 justify-around mr-20">
          <div
            className="hidden md:block relative bg-gradient-to-r from-green-500 to-green-700 
              rounded-full p-2 text-white cursor-pointer hover:from-green-600 hover:to-green-800 transition"
            onClick={() => router.push("/add-to-card")}
          >
            <ShoppingBag className="text-gray-200" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </div>

          <div
            className="bg-gradient-to-r from-green-500 to-green-700 rounded-full p-2 text-white cursor-pointer hover:from-green-600 hover:to-green-800 transition"
            onClick={() => router.push("/login")}
          >
            <User size={24} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:block lg:hidden text-gray-700 absolute left-7"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <div className="w-10 h-10 bg-icongrey rounded-4xl flex items-center justify-center">
              <Menu size={24} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:block lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <div key={item} className="relative cursor-pointer">
                <button
                  onClick={() => handleNavClick(item)}
                  className="
              w-full text-left text-gray-700 font-medium py-2
              relative
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
              after:bg-green-500 after:transition-all after:duration-500
              hover:after:w-full
              hover:text-green-600 transition-colors
            "
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}