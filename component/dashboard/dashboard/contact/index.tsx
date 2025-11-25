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
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import apiClient from "@/component/api/apiClient";
import { getApiEndpoint } from "@/component/api";
import { showToast } from "nextjs-toast-notify";
import { ContactDrawer } from "./form";

// ──────────────────────────────────────────────────────────────
// API RESPONSE
// ──────────────────────────────────────────────────────────────
interface ApiResponse {
  message: string;
//   response?: any;
}

export default function ContactCard() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<any | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pageSize = 10;

  // ──────────────────────────────────────────────────────────────
  // DARK MODE
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // ──────────────────────────────────────────────────────────────
  // FETCH
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await apiClient.get<ApiResponse>(getApiEndpoint.getContact());
        setContacts(Array.isArray(res.data) ? res.data : []);
      } catch (err: any) {
        showToast.error(err?.response?.data?.message || "Failed to load contacts.", {
          duration: 5000,
          position: "top-right",
          progress: true,
        });
      }
    };
    fetch();
  }, []);

  // ──────────────────────────────────────────────────────────────
  // SAFE SEARCH (NO CRASH)
  // ──────────────────────────────────────────────────────────────
  const normalize = (str: string | undefined | null): string => (str ?? "").toString().trim();

  const filteredContacts = contacts.filter((c) => {
    const query = search.toLowerCase();
    const text = [
      normalize(c.name),
      normalize(c.email),
      normalize(c.subject),
      normalize(c.message),
    ].join(" ").toLowerCase();
    return text.includes(query);
  });

  const totalPages = Math.ceil(filteredContacts.length / pageSize) || 1;
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // ──────────────────────────────────────────────────────────────
  // DELETE + UNDO
  // ──────────────────────────────────────────────────────────────
  const handleDelete = async (id: number) => {
    const contact = contacts.find((c) => c.id === id);
    if (!contact) return;

    const original = [...contacts];
    setContacts(contacts.filter((c) => c.id !== id));

    showToast.success("Deleted! (Undo)", {
      duration: 5000,
      position: "top-right",
      progress: true,
    //   onClick: () => {
    //     setContacts(original);
    //     showToast.info("Undo successful.", { duration: 2000 });
    //   },
    });

    try {
      await apiClient.delete(getApiEndpoint.deleteContact(id));
    } catch (err: any) {
      showToast.error(err?.response?.data?.message || "Delete failed.", { duration: 5000 });
      setContacts(original);
    }
  };

  // ──────────────────────────────────────────────────────────────
  // SAVE SUCCESS
  // ──────────────────────────────────────────────────────────────
  const handleSaveSuccess = (saved: any) => {
    setContacts((prev) => {
      const idx = prev.findIndex((c) => c.id === saved.id);
      return idx >= 0 ? prev.map((c, i) => (i === idx ? saved : c)) : [...prev, saved];
    });
  };

  // ──────────────────────────────────────────────────────────────
  // STATS
  // ──────────────────────────────────────────────────────────────
  const stats = [
    {
      title: "Total Messages",
      value: contacts.length,
      icon: <Mail className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "With Subject",
      value: contacts.filter((c) => normalize(c.subject).length > 0).length,
      icon: <MessageSquare className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Unique Senders",
      value: new Set(contacts.map((c) => normalize(c.email)).filter(Boolean)).size,
      icon: <User className="h-7 w-7 text-white" />,
      bg: "bg-gradient-to-r from-green-400 to-teal-500",
    },
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-auto">
      <div className={`transition-filter duration-300 ${isDarkMode ? "filter grayscale" : ""}`}>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className={`${stat.bg} p-5 rounded-xl shadow-lg flex items-center gap-4 hover:scale-105 transition-all cursor-pointer dark:brightness-90`}
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

        {/* Search + Add */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <Input
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-sm flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <Button
            onClick={() => {
              setEditingContact(undefined);
              setIsDrawerOpen(true);
            }}
            className="dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Contact
          </Button>
        </div>

        {/* Table */}
        <Table>
          <TableCaption className="dark:text-gray-400">All contact messages</TableCaption>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="dark:text-gray-300">ID</TableHead>
              <TableHead className="dark:text-gray-300">Name</TableHead>
              <TableHead className="dark:text-gray-300">Email</TableHead>
              <TableHead className="dark:text-gray-300">Subject</TableHead>
              <TableHead className="dark:text-gray-300">Message</TableHead>
              <TableHead className="dark:text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedContacts.length > 0 ? (
                paginatedContacts.map((c) => (
                  <TableRow key={c.id} className="border-b dark:border-gray-700">
                    <TableCell className="dark:text-gray-200">{c.id}</TableCell>
                    <TableCell className="dark:text-gray-200">{normalize(c.name) || "-"}</TableCell>
                    <TableCell className="dark:text-gray-200">{normalize(c.email) || "-"}</TableCell>
                    <TableCell className="dark:text-gray-200">{normalize(c.subject) || "-"}</TableCell>
                    <TableCell className="max-w-xs truncate dark:text-gray-200">
                      {normalize(c.message) || "-"}
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingContact(c);
                          setIsDrawerOpen(true);
                        }}
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(c.id)}
                        className="dark:bg-red-900 dark:hover:bg-red-800"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4 text-gray-500 dark:text-gray-400">
                    No contacts found.
                  </TableCell>
                </TableRow>
              )}
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
      <ContactDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingContact={editingContact}
        onSaveSuccess={handleSaveSuccess}
      />
    </div>
  );
}