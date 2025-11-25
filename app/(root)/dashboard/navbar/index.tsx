// components/dashboard/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import {
    Menu,
    X,
    LogOut,
    User,
    Search,
    Moon,
    Sun,
} from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface NavbarProps {
    activeItem: string;
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
}

export default function Navbar({
    activeItem,
    onToggleSidebar,
    isSidebarOpen,
}: NavbarProps) {
    const router = useRouter();

    /* ---------- SEARCH ---------- */
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/search?q=${encodeURIComponent(query)}`);
        setQuery("");
        setSearchOpen(false);
    };

    /* ---------- DARK MODE ---------- */
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = saved === "dark" || (!saved && prefersDark);
        setIsDark(initial);
        document.documentElement.classList.toggle("dark", initial);
    }, []);

    const toggleDarkMode = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        document.documentElement.classList.toggle("dark", newDark);
        localStorage.setItem("theme", newDark ? "dark" : "light");
    };

    /* ---------- LOGOUT ---------- */
    const [showDropdown, setShowDropdown] = useState(false);
    const handleLogout = () => {
        Cookies.remove("accessToken");
        router.push("/");
    };

    return (
        <header className="sticky top-0 z-10 flex items-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 md:px-6 transition-colors">
            {/* LEFT */}
            <div className="flex items-center space-x-3">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
                    aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
                >
                    {isSidebarOpen ? (
                        <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    ) : (
                        <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    )}
                </button>

                <div className="flex items-center space-x-2">
                    <div className="rounded-full flex items-center justify-center text-white font-bold">
                        <Image
                            src="/logo.png"
                            height={100}
                            width={100}
                            alt="image"
                        />
                    </div>
                    <span className="inline-flex items-center text-lg font-semibold hidden sm:inline-block text-gray-900 dark:text-white">
                        LU<span className="text-orange-500">MO</span>
                        RA
                    </span>
                </div>

                <h1 className="hidden md:block text-xl font-medium capitalize text-gray-900 dark:text-white">
                    {activeItem || "Dashboard"}
                </h1>
            </div>

            {/* RIGHT */}
            <div className="flex items-center space-x-2 ml-auto">
                {/* <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
                    aria-label="Open search"
                >
                    <Search className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </button> */}

                {/* SINGLE SEARCH FORM */}
                {/* <form
                    onSubmit={handleSearch}
                    className={`${searchOpen
                            ? "fixed inset-0 z-50 flex items-center bg-white dark:bg-gray-900 p-4"
                            : "hidden"
                        } md:relative md:flex md:w-64 lg:w-80`}
                >
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search trips, users, bookings..."
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            autoFocus={searchOpen}
                        />
                        {searchOpen && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchOpen(false);
                                    setQuery("");
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <X className="w-4 h-4 text-gray-500" />
                            </button>
                        )}
                    </div>
                    {searchOpen && (
                        <button
                            type="submit"
                            className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Search
                        </button>
                    )}
                </form> */}

                {/* DARK MODE TOGGLE */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Toggle dark mode"
                >
                    {isDark ? (
                        <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                        <Moon className="w-5 h-5 text-gray-700" />
                    )}
                </button>

                {/* USER MENU */}
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown((v) => !v)}
                        className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="User menu"
                    >
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </div>
                    </button>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}