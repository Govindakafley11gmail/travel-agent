"use client";

import { useState } from "react";
import {
  Home,
  Users,
  UserCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface SidebarProps {
  activeItem: string;
  setActiveItem: (name: string) => void;
}

export const menuItems = [
  { name: "Dashboard", icon: <Home size={20} /> },
  { name: "User", icon: <Users size={20} /> },
  { name: "Profile", icon: <UserCircle size={20} /> },
  { name: "Settings", icon: <Settings size={20} /> },
  { name: "Logout", icon: <LogOut size={20} /> },
];

export default function Sidebar({ activeItem, setActiveItem }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-900 text-white h-screen p-5 pt-8 relative duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Toggle Button */}
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
          <li
            key={item.name}
            className={`flex items-center gap-4 p-2 rounded-md cursor-pointer transition-colors ${
              activeItem === item.name.toLowerCase()
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveItem(item.name.toLowerCase())}
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
