"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  Edit,
  ChevronLeft,
  ChevronRight,
  Plus,
  Activity,
  Star,
  Package,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import { TripsDrawer } from "./form";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";
import Image from "next/image";

export interface TripType {
  id?: number;
  title: string;
  slug?: string;
  subtitle?: string;
  description?: string;
  originalPrice?: number;
  discountPercent?: number;
  finalPrice?: number;
  durationDays?: number;
  ages?: string;
  status?: string;
  isTrending?: boolean;
  category?: string;
  images?: string[]; // URLs from server
}

export default function TripsCard() {
  const [trips, setTrips] = useState<TripType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingTrip, setEditingTrip] = useState<TripType | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pageSize = 10;

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Fetch trips
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getTrips());
        console.log()
        setTrips(response.data.data);
      } catch (err) {
        console.error("Error fetching trips", err);
      }
    };
    fetchTrips();
  }, []);

  const filteredTrips = trips.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category?.toLowerCase().includes(search.toLowerCase()) ||
      t.status?.toLowerCase().includes(search.toLowerCase()) ||
      t.ages?.toLowerCase().includes(search.toLowerCase()) ||
      t.slug?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTrips.length / pageSize);
  const paginatedTrips = filteredTrips.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const stats = [
    { title: "Total Trips", value: trips.length, icon: <Activity className="h-7 w-7 text-white" />, bg: "bg-gradient-to-r from-purple-500 to-indigo-500" },
    { title: "Trending Trips", value: trips.filter((t) => t.isTrending).length, icon: <Star className="h-7 w-7 text-white" />, bg: "bg-gradient-to-r from-pink-500 to-rose-500" },
    { title: "Active Trips", value: trips.filter((t) => t.status?.toLowerCase() === "active").length, icon: <Package className="h-7 w-7 text-white" />, bg: "bg-gradient-to-r from-green-400 to-teal-500" },
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-auto">
      <div className={`transition-filter duration-300 ${isDarkMode ? "filter grayscale" : ""}`}>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className={`${stat.bg} p-5 rounded-xl shadow-lg flex items-center gap-4 hover:scale-105 transform transition-all duration-300 cursor-pointer dark:brightness-90`}
            >
              <div className="p-3 rounded-full bg-white/20">{stat.icon}</div>
              <div>
                <p className="text-white/80 text-sm">{stat.title}</p>
                <p className="text-white text-2xl font-bold"><CountUp end={stat.value} duration={1.5} /></p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <Input
            placeholder="Search trips..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="max-w-sm flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <div className="flex gap-2">
            <Button variant="default" onClick={() => { setEditingTrip(undefined); setIsDrawerOpen(true); }} className="dark:bg-gray-700 dark:hover:bg-gray-600">
              <Plus className="mr-2 h-4 w-4" /> Create Trip
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableCaption className="dark:text-gray-400">List of all trips</TableCaption>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="dark:text-gray-300">ID</TableHead>
              <TableHead className="dark:text-gray-300">Title</TableHead>
              <TableHead className="dark:text-gray-300">Slug</TableHead>
              <TableHead className="dark:text-gray-300">Category</TableHead>
              <TableHead className="dark:text-gray-300">Duration</TableHead>
              <TableHead className="dark:text-gray-300">Price</TableHead>
              <TableHead className="dark:text-gray-300">Discount</TableHead>
              <TableHead className="dark:text-gray-300">Final Price</TableHead>
              <TableHead className="dark:text-gray-300">Status</TableHead>
              <TableHead className="dark:text-gray-300">Trending</TableHead>
              <TableHead className="dark:text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedTrips.map((t) => (
                <TableRow key={t.id} className="border-b dark:border-gray-700">
                  <TableCell className="dark:text-gray-200">{t.id}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.title}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.slug}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.category}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.durationDays} days</TableCell>
                  <TableCell className="dark:text-gray-200">${t.originalPrice}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.discountPercent}%</TableCell>
                  <TableCell className="dark:text-gray-200">${t.finalPrice}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.status}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.isTrending ? "Yes" : "No"}</TableCell>
                  
                  <TableCell className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => { setIsDrawerOpen(true); setEditingTrip(t); }}
                      className="dark:border-gray-600 dark:text-gray-300"
                    >
                      <Edit size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-4">
          <Button size="sm" variant="outline" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="dark:border-gray-600 dark:text-gray-300">
            <ChevronLeft size={16} />
          </Button>
          <span className="dark:text-gray-400">Page {currentPage} of {totalPages}</span>
          <Button size="sm" variant="outline" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="dark:border-gray-600 dark:text-gray-300">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      {/* Drawer */}
      <TripsDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} editingTrip={editingTrip} />
    </div>
  );
}
