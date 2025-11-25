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
import { Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import { OrderEditDrawer, OrderType } from "./form";

export default function OrderCard() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingOrder, setEditingOrder] = useState<OrderType | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getOrders());
        const normalizedOrders: OrderType[] = response.data.orders.map((o: any) => ({
          ...o,
          subtotal: Number(o.subtotal),
          total: Number(o.total),
          items: o.items.map((i: any) => ({ ...i, price: Number(i.price) })),
        }));
        setOrders(normalizedOrders);
      } catch (err) {
        console.error("Error fetching orders", err);
      }
    };
    fetchOrders();
  }, []);

  // Counts by status
const pendingCount = orders.filter(o => o.status === "Pending").length;
const completedCount = orders.filter(o => o.status === "Completed").length;
const cancelledCount = orders.filter(o => o.status === "Cancelled").length;

  const filteredOrders = orders.filter(
    (o) =>
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase()) ||
      o.status.toLowerCase().includes(search.toLowerCase()) ||
      o.total.toString().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / pageSize);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleEdit = (order: OrderType) => {
    setEditingOrder(order);
    setIsDrawerOpen(true);
  };

  const handleUpdateOrder = (updatedOrder: OrderType) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
    );
    setIsDrawerOpen(false);
    setEditingOrder(null);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-auto">
      {/* Header with search and status counts */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <Input
          placeholder="Search orders..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="max-w-sm flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        <div className="flex gap-4">
          <span className="text-yellow-500 font-semibold">Pending: {pendingCount}</span>
          <span className="text-green-500 font-semibold">Completed: {completedCount}</span>
          <span className="text-red-500 font-semibold">Cancelled: {cancelledCount}</span>
        </div>
      </div>

      {/* Orders Table */}
      <Table>
        <TableCaption className="dark:text-gray-400">List of all orders</TableCaption>
        <TableHeader>
          <TableRow className="dark:border-gray-700">
            <TableHead className="dark:text-gray-300">Order ID</TableHead>
            <TableHead className="dark:text-gray-300">Customer</TableHead>
            <TableHead className="dark:text-gray-300">Email</TableHead>
            <TableHead className="dark:text-gray-300">Status</TableHead>
            <TableHead className="dark:text-gray-300">Total</TableHead>
            <TableHead className="dark:text-gray-300">Items</TableHead>
            <TableHead className="dark:text-gray-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {paginatedOrders.map((order) => (
              <TableRow key={order.id} className="border-b dark:border-gray-700">
                <TableCell className="dark:text-gray-200">{order.id}</TableCell>
                <TableCell className="dark:text-gray-200">{order.name}</TableCell>
                <TableCell className="dark:text-gray-200">{order.email}</TableCell>
                <TableCell
                  className={`font-semibold ${
                    order.status === "Pending"
                      ? "text-yellow-500"
                      : order.status === "Completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {order.status}
                </TableCell>
                <TableCell className="dark:text-gray-200">${order.total.toFixed(2)}</TableCell>
                <TableCell className="dark:text-gray-200">
                  {order.items.map((item) => (
                    <div key={item.id}>
                      {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(order)}
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

      {/* Edit Drawer */}
      {editingOrder && (
        <OrderEditDrawer
          open={isDrawerOpen}
          editingOrder={editingOrder}
          onOpenChange={(open) => {
            setIsDrawerOpen(open);
            if (!open) setEditingOrder(null);
          }}
          onSave={handleUpdateOrder}
        />
      )}
    </div>
  );
}
