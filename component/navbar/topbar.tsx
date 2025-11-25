"use client";

import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#0c3c57] text-white text-sm">
      <div className="container mx-auto flex justify-center items-center py-2 px-4">
        <div className="flex gap-6 justify-around">
          <div className="flex items-center gap-2">
            <Phone size={16} /> <span>+975-77893346</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> <span>info@lumorabhutan.com</span>
          </div>
        </div>
    
      </div>
    </div>
  );
}
