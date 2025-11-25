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
  Mail,
  Shield,
  Activity,
} from "lucide-react";
import { UserFormDrawer } from "./form";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";
import { usePermissions } from "../permission";


interface UserType {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
}

export default function UserCard() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Delete confirmation
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const pageSize = 10;

  // Use the shared permissions hook
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

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getUsers());
        let data = response?.data;

      

        setUsers(data.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    [user.name, user.email, user.role, user.status].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const confirmDelete = async () => {
    if (!selectedUserId) return;

    try {
      await apiClient.delete(getApiEndpoint.deleteUser(selectedUserId));
      setUsers((prev) => prev.filter((u) => u.id !== selectedUserId));
    } catch (error) {
      console.error("Delete error:", error);
    } finally {
      setOpenDeleteDialog(false);
      setSelectedUserId(null);
    }
  };

  const handleEdit = (user: UserType) => {
    setEditingUser(user);
    setIsDrawerOpen(true);
  };

  const openCreateDrawer = () => {
    setEditingUser(null);
    setIsDrawerOpen(true);
  };

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
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <Input
            placeholder="Search users by name, email, role or status..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-md flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />

          {/* Create Button - Only if permitted */}
          {hasPermission("user:create") && (
            <Button onClick={openCreateDrawer} className="dark:bg-gray-700 dark:hover:bg-gray-600">
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          )}
        </div>

        {/* Table */}
        <Table>
          <TableCaption className="dark:text-gray-400">List of all users</TableCaption>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="dark:text-gray-300">
                <Activity size={16} className="inline mr-1" /> ID
              </TableHead>
              <TableHead className="dark:text-gray-300">
                <User size={16} className="inline mr-1" /> Name
              </TableHead>
              <TableHead className="dark:text-gray-300">
                <Mail size={16} className="inline mr-1" /> Email
              </TableHead>
              <TableHead className="dark:text-gray-300">
                <Shield size={16} className="inline mr-1" /> Role
              </TableHead>
              <TableHead className="dark:text-gray-300">
                <Activity size={16} className="inline mr-1" /> Status
              </TableHead>
              <TableHead className="dark:text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedUsers.map((user) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="border-b dark:border-gray-700"
                >
                  <TableCell className="dark:text-gray-200">{user.id}</TableCell>
                  <TableCell className="dark:text-gray-200 font-medium">{user.name}</TableCell>
                  <TableCell className="dark:text-gray-200">{user.email}</TableCell>
                  <TableCell className="dark:text-gray-200">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell className="dark:text-gray-200">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className={`w-3 h-3 rounded-full ${
                          user.status === "Active"
                            ? "bg-green-500"
                            : user.status === "Inactive"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                        }`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                      <span>{user.status}</span>
                    </div>
                  </TableCell>

                  {/* Actions - Permission-based */}
                  <TableCell className="flex gap-2 justify-end">
                    {hasPermission("user:update") && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(user)}
                        className="dark:border-gray-600 dark:text-gray-300"
                      >
                        <Edit size={16} />
                      </Button>
                    )}

                    {hasPermission("user:delete") && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setSelectedUserId(user.id);
                          setOpenDeleteDialog(true);
                        }}
                        className="dark:bg-red-900 dark:hover:bg-red-800"
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </TableCell>
                </motion.tr>
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

      {/* User Form Drawer */}
      <UserFormDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingUser={editingUser}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
        <DialogContent className="dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setOpenDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}