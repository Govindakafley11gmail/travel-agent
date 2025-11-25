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
  Star,
  MessageSquare,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import { ReviewDrawer } from "./form";
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


export interface ReviewType {
  id?: number;
  name: string;
  email: string;
  rating: string; // "1" to "5"
  comment: string;
  status: boolean;
}

export default function ReviewCard() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<ReviewType | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Delete confirmation
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const pageSize = 10;

  // Permissions
  const { hasPermission, isLoading: permissionsLoading } = usePermissions();

  // Dark mode detection
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Fetch Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getReview());
        const data = response.data?.response || response.data?.data || [];
        setReviews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching reviews", err);
        setReviews([]);
      }
    };
    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter((r) =>
    [r.name, r.email, r.rating, r.comment].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    ) ||
    (r.status ? "active" : "inactive").includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReviews.length / pageSize) || 1;
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleDelete = async (id?: number) => {
    if (!id) return;
    try {
      await apiClient.delete(getApiEndpoint.deleteReview(id));
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error("Delete review failed", err);
    } finally {
      setConfirmDeleteId(null);
    }
  };

  const stats = [
    {
      title: "Total Reviews",
      value: reviews.length,
      icon: <MessageSquare className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "5-Star Reviews",
      value: reviews.filter((r) => r.rating === "5").length,
      icon: <Star className="h-7 w-7 text-white fill-white" />,
      bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "Active Reviews",
      value: reviews.filter((r) => r.status).length,
      icon: <User className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-green-400 to-teal-500",
    },
  ];

  const renderStars = (rating: string) => {
    const num = parseInt(rating) || 0;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < num ? "fill-yellow-500 text-yellow-500" : "text-gray-300 dark:text-gray-600"}
          />
        ))}
      </div>
    );
  };

  // Loading permissions
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
            placeholder="Search by name, email, rating, comment..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-md flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />

          {/* Create Button */}
          {hasPermission("review:create") && (
            <Button
              onClick={() => {
                setEditingReview(undefined);
                setIsDrawerOpen(true);
              }}
              className="dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Review
            </Button>
          )}
        </div>

        {/* Table */}
        <Table>
          <TableCaption className="dark:text-gray-400">List of customer reviews</TableCaption>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="dark:text-gray-300">ID</TableHead>
              <TableHead className="dark:text-gray-300">Customer</TableHead>
              <TableHead className="dark:text-gray-300">Email</TableHead>
              <TableHead className="dark:text-gray-300">Rating</TableHead>
              <TableHead className="dark:text-gray-300">Comment</TableHead>
              <TableHead className="dark:text-gray-300">Status</TableHead>
              <TableHead className="dark:text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedReviews.length > 0 ? (
                paginatedReviews.map((r) => (
                  <TableRow key={r.id} className="border-b dark:border-gray-700">
                    <TableCell className="dark:text-gray-200 font-medium">{r.id}</TableCell>
                    <TableCell className="dark:text-gray-200 font-medium">{r.name}</TableCell>
                    <TableCell className="dark:text-gray-200 text-sm">{r.email}</TableCell>
                    <TableCell className="dark:text-gray-200">{renderStars(r.rating)}</TableCell>
                    <TableCell className="max-w-md truncate dark:text-gray-300 text-sm">
                      {r.comment || <span className="text-gray-400">No comment</span>}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          r.status
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                      >
                        {r.status ? "Active" : "Hidden"}
                      </span>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="flex gap-2 justify-end">
                      {hasPermission("review:update") && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingReview(r);
                            setIsDrawerOpen(true);
                          }}
                          className="dark:border-gray-600 dark:text-gray-300"
                        >
                          <Edit size={16} />
                        </Button>
                      )}

                      {hasPermission("review:delete") && (
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setConfirmDeleteId(r.id!)}
                          className="dark:bg-red-900 dark:hover:bg-red-800"
                        >
                          <Trash2 size={16} />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No reviews found
                  </TableCell>
                </TableRow>
              )}
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
      <ReviewDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingReview={editingReview}
      />

      {/* Delete Confirmation */}
      <Dialog open={confirmDeleteId !== null} onOpenChange={() => setConfirmDeleteId(null)}>
        <DialogContent className="dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle>Delete Review</DialogTitle>
            <DialogDescription>
              This action cannot be undone. The review will be permanently removed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setConfirmDeleteId(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => confirmDeleteId && handleDelete(confirmDeleteId)}
            >
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}