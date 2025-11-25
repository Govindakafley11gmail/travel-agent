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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { usePermissions } from "../permission";


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
  images?: string[];
}

export default function TripsCard() {
  const [trips, setTrips] = useState<TripType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingTrip, setEditingTrip] = useState<TripType | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Delete confirmation
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [tripToDelete, setTripToDelete] = useState<number | null>(null);

  const pageSize = 10;

  // Permissions
  const { hasPermission, isLoading: permissionsLoading } = usePermissions();

  // Dark mode detection
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
        const response = await apiClient.get<{ data: TripType[] }>(getApiEndpoint.getTrips());
        setTrips(response.data.data || []);
      } catch (err) {
        console.error("Error fetching trips", err);
        setTrips([]);
      }
    };
    fetchTrips();
  }, []);

  const filteredTrips = trips.filter((t) =>
    [t.title, t.slug, t.category, t.status, t.ages].some(
      (field) => field?.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredTrips.length / pageSize);
  const paginatedTrips = filteredTrips.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const stats = [
    {
      title: "Total Trips",
      value: trips.length,
      icon: <Activity className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "Trending",
      value: trips.filter((t) => t.isTrending).length,
      icon: <Star className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
      title: "Active Trips",
      value: trips.filter((t) => t.status?.toLowerCase() === "active").length,
      icon: <Package className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-green-400 to-teal-500",
    },
  ];

 

  const openEditDrawer = (trip: TripType) => {
    setEditingTrip(trip);
    setIsDrawerOpen(true);
  };

  const openCreateDrawer = () => {
    setEditingTrip(undefined);
    setIsDrawerOpen(true);
  };

  // Show loading while permissions are being checked
  if (permissionsLoading) {
    return (
      <div className="p-8 text-center text-gray-500 dark:text-gray-400">
        Loading permissions...
      </div>
    );
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-auto">
      <div className={`transition-filter duration-300 ${isDarkMode ? "filter grayscale" : ""}`}>
        {/* Stats Cards */}
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
                <p className="text-white text-2xl font-bold">
                  <CountUp end={stat.value} duration={1.5} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <Input
            placeholder="Search by title, slug, category, status..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-md flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />

          {/* Create Button */}
          {hasPermission("trips:create") && (
            <Button onClick={openCreateDrawer} className="dark:bg-gray-700 dark:hover:bg-gray-600">
              <Plus className="mr-2 h-4 w-4" />
              Create Trip
            </Button>
          )}
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
              <TableHead className="dark:text-gray-300">Final</TableHead>
              <TableHead className="dark:text-gray-300">Status</TableHead>
              <TableHead className="dark:text-gray-300">Trending</TableHead>
              <TableHead className="dark:text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedTrips.map((t) => (
                <TableRow key={t.id} className="border-b dark:border-gray-700">
                  <TableCell className="dark:text-gray-200 font-medium">{t.id}</TableCell>
                  <TableCell className="dark:text-gray-200 font-medium max-w-xs truncate">
                    {t.title}
                  </TableCell>
                  <TableCell className="dark:text-gray-200 text-sm">{t.slug || "—"}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.category || "—"}</TableCell>
                  <TableCell className="dark:text-gray-200">{t.durationDays || "?"} days</TableCell>
                  <TableCell className="dark:text-gray-200">${t.originalPrice || 0}</TableCell>
                  <TableCell className="dark:text-gray-200 text-green-600">
                    {t.discountPercent ? `${t.discountPercent}%` : "—"}
                  </TableCell>
                  <TableCell className="dark:text-gray-...
                    font-semibold text-lg text-emerald-600 dark:text-emerald-400">
                    ${t.finalPrice || t.originalPrice || 0}
                  </TableCell>
                  <TableCell className="dark:text-gray-200">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        t.status?.toLowerCase() === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {t.status || "Draft"}
                    </span>
                  </TableCell>
                  <TableCell className="dark:text-gray-200 text-center">
                    {t.isTrending ? (
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ) : (
                      "—"
                    )}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="flex gap-2 justify-end">
                    {hasPermission("trips:update") && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDrawer(t)}
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        <Edit size={16} />
                      </Button>
                    )}

                    {hasPermission("trips:delete") && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setTripToDelete(t.id!);
                          setDeleteDialogOpen(true);
                        }}
                        className="dark:bg-red-900 dark:hover:bg-red-800"
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-6">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="dark:border-gray-600 dark:text-gray-300"
          >
            <ChevronLeft size={16} />
          </Button>
          <span className="dark:text-gray-400">
            Page {currentPage} of {totalPages || 1}
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="dark:border-gray-600 dark:text-gray-300"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      {/* Drawer */}
      <TripsDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingTrip={editingTrip}
      />

      {/* Delete Confirmation Dialog */}
    </div>
  );
}