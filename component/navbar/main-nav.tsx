"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ShoppingBag, Heart, User, Menu, X } from "lucide-react";

export default function MainNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = ["Home", "Destinations", "Travel Agent Tours", "Travel Insight", "Pages"];

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            T
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Travel Agent</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative cursor-pointer group"
              onMouseEnter={() => setOpen(item)}
              onMouseLeave={() => setOpen(null)}
            >
              <span
                className={`flex items-center gap-1 font-medium ${
                  item === "Destinations" ? "text-green-600" : "text-gray-700"
                }`}
              >
                {item} <ChevronDown size={16} />
              </span>

              {open === item && (
                <div className="absolute left-0 top-8 bg-white border rounded-lg shadow-lg p-3 text-sm z-50 min-w-[150px]">
                  <Link href="#" className="block px-3 py-1 rounded hover:bg-green-50">
                    Option 1
                  </Link>
                  <Link href="#" className="block px-3 py-1 rounded hover:bg-green-50">
                    Option 2
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <ShoppingBag className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>
          <div className="relative">
            <Heart className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">
              5
            </span>
          </div>

          {/* User Icon - opens drawer */}
          <div
            className="bg-gradient-to-r from-green-500 to-green-700 rounded-full p-2 text-white cursor-pointer hover:from-green-600 hover:to-green-800 transition"
            onClick={() => setDrawerOpen(true)}
          >
            <User size={16} />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={() => setOpen(open === item ? null : item)}
                  className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
                >
                  {item}
                  <ChevronDown size={16} className={`transition-transform ${open === item ? "rotate-180" : ""}`} />
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

            {/* Mobile User Link */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-full flex items-center text-gray-700 font-medium py-2"
            >
              User
            </button>
          </div>
        </div>
      )}

      {/* Drawer */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          ></div>

          {/* Drawer content */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col animate-slideIn rounded-l-2xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
              <button
                className="text-gray-500 hover:text-gray-800 transition"
                onClick={() => setDrawerOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Beautiful Login Form */}
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Login to your account</h3>
                <p className="text-gray-500 mb-6 text-center">Enter your details below</p>

                <form className="flex flex-col gap-5">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      className="peer w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm placeholder-transparent transition"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-green-500 peer-focus:text-xs bg-white px-1"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder=" "
                      className="peer w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm placeholder-transparent transition"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-green-500 peer-focus:text-xs bg-white px-1"
                    >
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl py-3 font-semibold shadow-lg hover:from-green-600 hover:to-green-800 transition"
                  >
                    Login
                  </button>

                  <Link href="#" className="text-sm text-green-600 hover:underline self-start">
                    Forgot password?
                  </Link>
                </form>

                <div className="mt-8 text-center text-gray-500 text-sm">
                  Don't have an account?{" "}
                  <Link href="#" className="text-green-600 font-semibold hover:underline">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
