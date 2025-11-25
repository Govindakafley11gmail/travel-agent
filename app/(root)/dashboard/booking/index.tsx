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
  User,
  Shield,
  Activity,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";

import { BookingDrawer } from "./form";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export interface BookingType {
  id?: number;
  bookingDate: string;
  travelStartDate: string;
  travelEndDate: string;
  email: string;
  name: string;
  country: string;
  numTravelers: number;
  adultNum: number;
  childNum: number;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  specialRequest?: string;
  mobileNo: string;
  travelType: string;
}

export default function BookingCard() {
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState<BookingType | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pageSize = 10;

  // 🔥 Add state for delete confirmation
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  // Detect dark mode toggle
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await apiClient.get<BookingType[]>(getApiEndpoint.getBookings());
        const data = Array.isArray(response?.data) ? response.data : response.data ?? [];
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings", err);
      }
    };
    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter(
    (b) =>
      b.status.toLowerCase().includes(search.toLowerCase()) ||
      b.paymentStatus.toLowerCase().includes(search.toLowerCase()) ||
      String(b.email).toLowerCase().includes(search.toLowerCase()) ||
      b.country.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBookings.length / pageSize);
  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleDelete = async (id?: number) => {
    if (!id) return;
    try {
      await apiClient.delete(getApiEndpoint.deleteBooking(id));
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Delete booking failed", err);
    }
  };

  // Top stats
  const stats = [
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: <Activity className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "Paid Bookings",
      value: bookings.filter((b) => b.paymentStatus.toLowerCase() === "paid").length,
      icon: <User className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-green-400 to-teal-500",
    },
    {
      title: "Pending Payments",
      value: bookings.filter((b) => b.paymentStatus.toLowerCase() === "pending").length,
      icon: <Shield className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-auto">
      {/* GRAYSCALE IN DARK MODE */}
      <div className={`transition-filter duration-300 ${isDarkMode ? "filter grayscale" : ""}`}>
        {/* Top Stats */}
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
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <Input
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-sm flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <div className="flex gap-2">
            <Button
              variant="default"
              onClick={() => setIsDrawerOpen(true)}
              className="dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Plus className="mr-2 h-4 w-4" /> Create Booking
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableCaption className="dark:text-gray-400">List of all bookings</TableCaption>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="dark:text-gray-300">ID</TableHead>
              <TableHead className="dark:text-gray-300">Name</TableHead>
              <TableHead className="dark:text-gray-300">Email</TableHead>
              <TableHead className="dark:text-gray-300">Mobile NO</TableHead>
              <TableHead className="dark:text-gray-300">Country</TableHead>
              <TableHead className="dark:text-gray-300">Booking Date</TableHead>
              <TableHead className="dark:text-gray-300">Travel Dates</TableHead>
              <TableHead className="dark:text-gray-300">Travelers</TableHead>
              <TableHead className="dark:text-gray-300">Travel Types</TableHead>
              <TableHead className="dark:text-gray-300">Total Amount</TableHead>
              <TableHead className="dark:text-gray-300">Status</TableHead>
              <TableHead className="dark:text-gray-300">Payment</TableHead>
              <TableHead className="dark:text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedBookings.map((b) => (
                <TableRow key={b.id} className="border-b dark:border-gray-700">
                  <TableCell className="dark:text-gray-200">{b.id}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.name}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.email}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.mobileNo}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.country}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.bookingDate}</TableCell>
                  <TableCell className="dark:text-gray-200">
                    {b.travelStartDate} to {b.travelEndDate}
                  </TableCell>
                  <TableCell className="dark:text-gray-200">
                    Adults: {b.adultNum}, Children: {b.childNum}
                  </TableCell>
                  <TableCell className="dark:text-gray-200">{b.travelType}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.totalAmount}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.status}</TableCell>
                  <TableCell className="dark:text-gray-200">{b.paymentStatus}</TableCell>
                  <TableCell className="flex gap-2 justify-end">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setIsDrawerOpen(true);
                        setEditingBooking(b);
                      }}
                      className="dark:border-gray-600 dark:text-gray-300"
                    >
                      <Edit size={16} />
                    </Button>
                    {/* 🔥 Delete with confirmation */}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setConfirmDeleteId(b.id!)}
                      className="dark:bg-red-900 dark:hover:bg-red-800"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-4">
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
            Page {currentPage} of {totalPages}
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
      <BookingDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingBooking={editingBooking}
      />

      {/* 🔥 Delete Confirmation Dialog */}
      <Dialog
        open={confirmDeleteId !== null}
        onOpenChange={() => setConfirmDeleteId(null)}
      >
        <DialogContent className="dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Are you sure?</DialogTitle>
            <DialogDescription className="dark:text-gray-300">
              This action cannot be undone. The booking will be permanently deleted.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            <Button
              variant="outline"
              onClick={() => setConfirmDeleteId(null)}
              className="dark:border-gray-600 dark:text-gray-300"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={async () => {
                if (confirmDeleteId) {
                  await handleDelete(confirmDeleteId);
                  setConfirmDeleteId(null);
                }
              }}
              className="dark:bg-red-900 dark:hover:bg-red-800"
            >
              Yes, Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
