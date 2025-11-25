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
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";

import { BlogDrawer } from "./form";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { usePermissions } from "../permission";


export interface BlogType {
  id?: number;
  title: string;
  content: string;
  category: string;
  subcontent: string;
  link?: string;
  images?: string[];
  is_published: boolean;
  published_at?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function BlogCard() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogType | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const pageSize = 10;

  // Use the reusable hook
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

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getBlogs());
        let data: any = response.data.data;
        setBlogs(data? data : []);
      } catch (err) {
        console.error("Error fetching blogs", err);
        setBlogs([]);
      }
    };
    fetchBlogs();
  }, []);
  const filteredBlogs = blogs
    ? blogs.filter(
        (b) =>
          b.category.toLowerCase().includes(search.toLowerCase())
          // b.category?.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleDelete = async (id?: number) => {
    if (!id) return;
    try {
      await apiClient.delete(getApiEndpoint.deleteBlog(id));
      setBlogs((prev) => prev.filter((b) => b.id !== id));
      setConfirmDeleteId(null);
    } catch (err) {
      console.error("Delete blog failed", err);
    }
  };

  const stats = [
    {
      title: "Total Blogs",
      value: blogs.length,
      icon: <FileText className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "Published",
      value: blogs.filter((b) => b.is_published).length,
      icon: <CheckCircle className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-green-400 to-teal-500",
    },
    {
      title: "Drafts",
      value: blogs.filter((b) => !b.is_published).length,
      icon: <Clock className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
  ];

  // Show loading if permissions are still being checked
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
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-sm flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />

          {/* Create Blog Button - Only if permitted */}
          {hasPermission("blog:create") && (
            <Button
              variant="default"
              onClick={() => {
                setEditingBlog(undefined);
                setIsDrawerOpen(true);
              }}
              className="dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Plus className="mr-2 h-4 w-4" /> Create Blog
            </Button>
          )}
        </div>

        {/* Table */}
        <Table>
          <TableCaption className="dark:text-gray-400">List of all blog posts</TableCaption>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="dark:text-gray-300">ID</TableHead>
              <TableHead className="dark:text-gray-300">Title</TableHead>
              <TableHead className="dark:text-gray-300">Category</TableHead>
              <TableHead className="dark:text-gray-300">Content Preview</TableHead>
              <TableHead className="dark:text-gray-300">Images</TableHead>
              <TableHead className="dark:text-gray-300">Link</TableHead>
              <TableHead className="dark:text-gray-300">Status</TableHead>
              <TableHead className="dark:text-gray-300">Published Date</TableHead>
              <TableHead className="dark:text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedBlogs.map((b) => (
                <TableRow key={b.id} className="border-b dark:border-gray-700">
                  <TableCell className="dark:text-gray-200">{b.id}</TableCell>
                  <TableCell className="dark:text-gray-200 font-medium max-w-xs truncate">
                    {b.title}
                  </TableCell>
                  <TableCell className="dark:text-gray-200">{b.category || "—"}</TableCell>
                  <TableCell className="dark:text-gray-200 max-w-sm truncate">
                    {/* {b.content.substring(0, 50)}... */}
                  </TableCell>
                  <TableCell className="dark:text-gray-200">
                    {b.images?.length ? `${b.images.length} image(s)` : "—"}
                  </TableCell>
                  <TableCell className="dark:text-gray-200">
                    {b.link ? (
                      <a
                        href={b.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="dark:text-gray-200">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        b.is_published
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {b.is_published ? "Published" : "Draft"}
                    </span>
                  </TableCell>
                  <TableCell className="dark:text-gray-200">{b.published_at || "—"}</TableCell>

                  {/* Actions - Only show buttons user has permission for */}
                  <TableCell className="flex gap-2 justify-end">
                    {hasPermission("blog:update") && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingBlog(b);
                          setIsDrawerOpen(true);
                        }}
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        <Edit size={16} />
                      </Button>
                    )}
                    {hasPermission("blog:delete") && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => setConfirmDeleteId(b.id!)}
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
      <BlogDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingBlog={editingBlog }
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={confirmDeleteId !== null} onOpenChange={() => setConfirmDeleteId(null)}>
        <DialogContent className="dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Are you sure?</DialogTitle>
            <DialogDescription className="dark:text-gray-300">
              This will permanently delete the blog post.
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
              onClick={() => confirmDeleteId && handleDelete(confirmDeleteId)}
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