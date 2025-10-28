"use client";

import { useState, useEffect } from "react";
import MainNav from "./main-nav";
import TopBar from "./topbar";

export default function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative">
      {/* TopBar stays normally */}
      <TopBar />

      {/* MainNav slides down when scrolled */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          isScrolled
            ? "fixed top-0 left-0 w-full shadow-lg z-50 translate-y-0"
            : "relative w-full shadow-md -translate-y-0"
        }`}
      >
        <MainNav />
      </div>
    </div>
  );
}
