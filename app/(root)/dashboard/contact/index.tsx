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
import { showToast } from "nextjs-toast-notify";
import { ContactDrawer } from "./form";
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


export interface ContactType {
  id?: number;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  createdAt?: string;
}

export default function ContactCard() {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<ContactType | undefined>(undefined);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Delete confirmation
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const pageSize = 10;

  // Permissions
  const { hasPermission, isLoading: permissionsLoading } = usePermissions();

  // Dark mode detection
  useEffect(() => {
    const check = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await apiClient.get<{ data?: ContactType[] }>(getApiEndpoint.getContact());
        const data = res.data?.data || res.data || [];
        setContacts(Array.isArray(data) ? data : []);
      } catch (err: any) {
        showToast.error(err?.response?.data?.message || "Failed to load contacts.", {
          duration: 5000,
          position: "top-right",
        });
      }
    };
    fetchContacts();
  }, []);

  const normalize = (str?: string | null): string => (str ?? "").toString().trim();

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

  const handleDelete = async (id: number) => {
    const originalContacts = [...contacts];
    const contactToDelete = contacts.find((c) => c.id === id);
    if (!contactToDelete) return;

    // Optimistic delete
    setContacts((prev) => prev.filter((c) => c.id !== id));
    setConfirmDeleteId(null);

    showToast.success("Contact deleted!", {
      duration: 4000,
      position: "top-right",
    });

    try {
      await apiClient.delete(getApiEndpoint.deleteContact(id));
    } catch (err: any) {
      // Rollback on error
      setContacts(originalContacts);
      showToast.error(err?.response?.data?.message || "Delete failed. Restored.", {
        duration: 5000,
        position: "top-right",
      });
    }
  };

  const handleSaveSuccess = (saved: ContactType) => {
    setContacts((prev) => {
      const index = prev.findIndex((c) => c.id === saved.id);
      if (index >= 0) {
        return prev.map((c, i) => (i === index ? saved : c));
      }
      return [...prev, saved];
    });
  };

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

  // Show loading while permissions load
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

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <Input
            placeholder="Search by name, email, subject, or message..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-md flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />

          {/* Create Button */}
          {hasPermission("contact:create") && (
            <Button
              onClick={() => {
                setEditingContact(undefined);
                setIsDrawerOpen(true);
              }}
              className="dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Message
            </Button>
          )}
        </div>

        {/* Table */}
        <Table>
          <TableCaption className="dark:text-gray-400">All contact form submissions</TableCaption>
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
                    <TableCell className="dark:text-gray-200 font-medium">{c.id}</TableCell>
                    <TableCell className="dark:text-gray-200">
                      {normalize(c.name) || <span className="text-gray-400">Anonymous</span>}
                    </TableCell>
                    <TableCell className="dark:text-gray-200">
                      {normalize(c.email) ? (
                        <a
                          href={`mailto:${c.email}`}
                          className="text-blue-500 hover:underline"
                        >
                          {c.email}
                        </a>
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell className="dark:text-gray-200 max-w-xs truncate">
                      {normalize(c.subject) || <span className="text-gray-400">No subject</span>}
                    </TableCell>
                    <TableCell className="max-w-md truncate text-sm dark:text-gray-300">
                      {normalize(c.message) || <span className="text-gray-400">No message</span>}
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="flex gap-2 justify-end">
                      {hasPermission("contact:update") && (
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
                      )}

                      {hasPermission("contact:delete") && (
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setConfirmDeleteId(c.id!)}
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
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No contact messages found
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
      <ContactDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingContact={editingContact}
        onSaveSuccess={handleSaveSuccess}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={confirmDeleteId !== null} onOpenChange={() => setConfirmDeleteId(null)}>
        <DialogContent className="dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle>Delete Message</DialogTitle>
            <DialogDescription>
              This contact message will be permanently deleted. This action cannot be undone.
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