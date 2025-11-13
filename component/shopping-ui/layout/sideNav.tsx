"use client";

import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, Heart, User, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-pink-600">ni</span>nico
        </span>
      </div>

      {/* Search */}
      <div className="flex-1 mx-10">
        <Input placeholder="Search products..." className="w-full max-w-lg" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Language */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 text-sm">
            <Globe className="h-4 w-4" /> English
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>French</DropdownMenuItem>
            <DropdownMenuItem>German</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Currency */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm">USD</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>USD</DropdownMenuItem>
            <DropdownMenuItem>EUR</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-pink-600" />
          <User className="h-5 w-5 cursor-pointer hover:text-pink-600" />
          <Heart className="h-5 w-5 cursor-pointer hover:text-pink-600" />
        </div>
      </div>
    </header>
  );
}
