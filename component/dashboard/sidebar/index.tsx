"use client";

import { useState } from "react";
import {
  Home,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, href: "/dashboard" },
    { name: "Profile", icon: <User size={20} />, href: "/profile" },
    { name: "Settings", icon: <Settings size={20} />, href: "/settings" },
    { name: "Logout", icon: <LogOut size={20} />, href: "/logout" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen p-5 pt-8 relative duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <button
          className="absolute -right-3 top-3 w-7 h-7 bg-white text-gray-900 rounded-full flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-green-500 w-8 h-8 rounded-full"></div>
          {isOpen && <h1 className="text-white font-bold text-lg">My Dashboard</h1>}
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                {item.icon}
                {isOpen && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h2 className="text-2xl font-bold">Dashboard Content</h2>
        <p>Here is where your dashboard content goes.</p>
      </div>
    </div>
  );
}
