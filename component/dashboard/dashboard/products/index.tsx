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
import { Edit, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import { ProductDrawer } from "./form";
import { showToast } from "nextjs-toast-notify";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { usePermissions } from "@/app/(root)/dashboard/permission";

// ← ONLY THIS LINE ADDED

export default function ProductCard() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const pageSize = 10;

  // ← ONLY THIS LINE ADDED
  const { hasPermission, isLoading: permissionsLoading } = usePermissions();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get(getApiEndpoint.getproduct());
        const normalized = response.data?.data || [];
        setProducts(normalized);
      } catch (err) {
        console.error("Error fetching products", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = (products || []).filter(
    (p) =>
      (p.product_name?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (p.category?.toLowerCase() || "").includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginated = (filteredProducts || []).slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSave = (updatedProduct: any) => {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === updatedProduct.id);
      if (exists) {
        return prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
      } else {
        return [updatedProduct, ...prev];
      }
    });
    setIsDrawerOpen(false);
    setEditingProduct(null);
  };

  const handleDelete = async (id: number) => {
    try {
      await apiClient.delete(getApiEndpoint.deleteproduct(id));
      setProducts((prev) => prev.filter((p) => p.id !== id));
      showToast.success("Product deleted successfully!");
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.message || err?.message || "Failed to delete product.";
      showToast.error(errorMsg);
    }
  };

  // ← Show loading only for data, not permissions (optional, keeps your current UX)
  if (loading) {
    return <p className="text-center text-gray-500 py-4">Loading products...</p>;
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-auto">
      {/* Search + Add Product */}
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search product..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="max-w-sm"
        />

        {/* ← ONLY THIS BLOCK CHANGED: Added permission check */}
        {hasPermission("product:create") && (
          <Button
            onClick={() => {
              setEditingProduct(null);
              setIsDrawerOpen(true);
            }}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Add Product
          </Button>
        )}
      </div>

      {/* Product Table */}
      <Table>
        <TableCaption>List of all products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Original Price</TableHead>
            <TableHead>Discount %</TableHead>
            <TableHead>Final Price</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Images</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginated && paginated.length > 0 ? (
            paginated.map((p, index) => (
              <TableRow key={p.id || index}>
                <TableCell>{(currentPage - 1) * pageSize + index + 1}</TableCell>
                <TableCell>{p.category || "-"}</TableCell>
                <TableCell>{p.product_name || "-"}</TableCell>
                <TableCell>${p.original_price ?? "-"}</TableCell>
                <TableCell>{p.discount_percent ?? 0}%</TableCell>
                <TableCell className="font-semibold text-green-600">${p.final_price ?? 0}</TableCell>
                <TableCell className="max-w-[200px] truncate">{p.description || "-"}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {(p.images || []).map((img: string) => (
                      <img key={img} src={img} className="w-12 h-12 rounded-md object-cover border" alt="product" />
                    ))}
                  </div>
                </TableCell>

                {/* ← ONLY THIS PART CHANGED: Wrapped buttons in permission checks */}
                <TableCell className="flex gap-2">
                  {hasPermission("product:update") && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingProduct(p);
                        setIsDrawerOpen(true);
                      }}
                    >
                      <Edit size={16} />
                    </Button>
                  )}

                  {hasPermission("product:delete") && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setConfirmDeleteId(p.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} className="text-center text-gray-500">
                No products found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </Button>

        <span>
          Page {currentPage} of {totalPages || 1}
        </span>

        <Button
          size="sm"
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <ChevronRight size={16} />
        </Button>
      </div>

      {/* Product Drawer */}
      {isDrawerOpen && (
        <ProductDrawer
          open={isDrawerOpen}
          editingProduct={editingProduct || undefined}
          onOpenChange={(open: boolean) => {
            setIsDrawerOpen(open);
            if (!open) setEditingProduct(null);
          }}
          onSaveSuccess={handleSave}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={confirmDeleteId !== null} onOpenChange={() => setConfirmDeleteId(null)}>
        <DialogContent className="dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Are you sure?</DialogTitle>
            <DialogDescription className="dark:text-gray-300">
              This will permanently delete the product.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setConfirmDeleteId(null)}>
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
            >
              Yes, Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}