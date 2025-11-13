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
import { Trash2, Edit, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { ProductDrawer, ProductType } from "./form"; // create/edit drawer
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";



export default function ProductCard() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const [editingProduct, setEditingProduct] = useState<ProductType | undefined>(undefined);
  const pageSize = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getproduct());
        setProducts(response.data.data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      p.product_name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleDelete = async (id?: number) => {
    if (!id) return;
    try {
      await apiClient.delete(getApiEndpoint.deleteproduct(id));
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete product failed", err);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="max-w-sm flex-1 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        <Button
          variant="default"
          onClick={() => setIsDrawerOpen(true)}
          className="dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Create Product
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableCaption className="dark:text-gray-400">List of all products</TableCaption>
        <TableHeader>
          <TableRow className="dark:border-gray-700">
            <TableHead className="dark:text-gray-300">ID</TableHead>
            <TableHead className="dark:text-gray-300">Name</TableHead>
            <TableHead className="dark:text-gray-300">Category</TableHead>
            <TableHead className="dark:text-gray-300">Price</TableHead>
            <TableHead className="dark:text-gray-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {paginatedProducts?.map((p) => (
              <TableRow key={p.id} className="border-b dark:border-gray-700">
                <TableCell className="dark:text-gray-200">{p.id}</TableCell>
                <TableCell className="dark:text-gray-200">{p.product_name}</TableCell>
                <TableCell className="dark:text-gray-200">{p.category}</TableCell>
                <TableCell className="dark:text-gray-200">${p.final_price}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setIsDrawerOpen(true);
                      setEditingProduct(p);
                    }}
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(p.id)}
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

      {/* Drawer */}
      <ProductDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        editingProduct={editingProduct}
      />
    </div>
  );
}
