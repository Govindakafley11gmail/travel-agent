"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

import { showToast } from "nextjs-toast-notify";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";

interface ApiResponse {
  message: string;
}

interface ProductDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingProduct?: {
    id: number;
    category: string;
    product_name: string;
    original_price: number;
    discount_percent: number;
    final_price: number;
    description?: string | null;
    images: string[];
  };
  onSaveSuccess?: (product: any) => void;
}

export function ProductDrawer({
  open,
  onOpenChange,
  editingProduct,
  onSaveSuccess,
}: ProductDrawerProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // Example categories with title/value
  const categories = [
    { title: "Lumora Merch", value: "lumora-merch" },
    { title: "Made in Bhutan", value: "made-in-bhutan" },
    { title: "OGOP", value: "ogop" },
    { title: "Crafts and Dresss", value: "crafts-and-dresss" },
    { title: "Snacks", value: "snacks" },
    { title: "Lumora Magazine", value: "lumora-magazine" },
    { title: "Lumora Choice", value: "lumora-choice" },
  ];

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    product_name: Yup.string().required("Product name is required"),
    original_price: Yup.number().required("Original price is required").min(0),
    discount_percent: Yup.number().required("Discount percent is required").min(0),
    final_price: Yup.number().required("Final price is required").min(0),
    description: Yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      category: editingProduct?.category || "",
      product_name: editingProduct?.product_name || "",
      original_price: editingProduct?.original_price || 0,
      discount_percent: editingProduct?.discount_percent || 0,
      final_price: editingProduct?.final_price || 0,
      description: editingProduct?.description || "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!editingProduct && selectedFiles.length === 0) {
        showToast.error("Please select at least one image.");
        return;
      }

      setSubmitting(true);

      try {
        const formData = new FormData();
        formData.append("category", values.category);
        formData.append("product_name", values.product_name);
        formData.append("original_price", values.original_price.toString());
        formData.append("discount_percent", values.discount_percent.toString());
        formData.append("final_price", values.final_price.toString());
        formData.append("description", values.description || "");

        selectedFiles.forEach((file) => formData.append("images", file));

        let res;
        if (editingProduct) {
          res = await apiClient.put<ApiResponse>(
            getApiEndpoint.updateproduct(editingProduct.id),
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          showToast.success(res.data.message || "Product updated successfully!");
        } else {
          res = await apiClient.post<ApiResponse>(getApiEndpoint.createproduct(), formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          showToast.success(res.data.message || "Product created successfully!");
        }

        resetForm();
        setSelectedFiles([]);
        onOpenChange(false);
        onSaveSuccess?.(res.data.message || values);
      } catch (err: any) {
        const errorMsg =
          err?.response?.data?.message || err?.message || "Failed to save product.";
        showToast.error(errorMsg);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Auto-calculate final price
  useEffect(() => {
    const originalPrice = Number(formik.values.original_price) || 0;
    const discount = Number(formik.values.discount_percent) || 0;
    const finalPrice = originalPrice - (originalPrice * discount) / 100;
    formik.setFieldValue("final_price", parseFloat(finalPrice.toFixed(2)));
  }, [formik.values.original_price, formik.values.discount_percent]);

  const hasError = (fieldId: string) =>
    formik.touched[fieldId as keyof typeof formik.touched] &&
    formik.errors[fieldId as keyof typeof formik.errors];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setSelectedFiles(Array.from(e.target.files));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-gray-200">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {editingProduct ? "Edit Product" : "Add Product"}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            {editingProduct ? "Update product details." : "Fill in product details."}
          </DialogDescription>
        </DialogHeader>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Dropdown */}
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              className={`w-full border rounded-md px-3 py-2 ${
                hasError("category") ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.title}
                </option>
              ))}
            </select>
            {hasError("category") && (
              <p className="text-red-500 text-sm">{formik.errors.category}</p>
            )}
          </div>

          {/* Product Name */}
          <div className="space-y-1">
            <Label htmlFor="product_name">Product Name</Label>
            <Input
              id="product_name"
              name="product_name"
              type="text"
              value={formik.values.product_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              className={`w-full ${hasError("product_name") ? "border-red-500" : ""}`}
            />
            {hasError("product_name") && (
              <p className="text-red-500 text-sm">{formik.errors.product_name}</p>
            )}
          </div>

          {/* Original Price */}
          <div className="space-y-1">
            <Label htmlFor="original_price">Original Price</Label>
            <Input
              id="original_price"
              name="original_price"
              type="number"
              value={formik.values.original_price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              className={`w-full ${hasError("original_price") ? "border-red-500" : ""}`}
            />
            {hasError("original_price") && (
              <p className="text-red-500 text-sm">{formik.errors.original_price}</p>
            )}
          </div>

          {/* Discount % */}
          <div className="space-y-1">
            <Label htmlFor="discount_percent">Discount %</Label>
            <Input
              id="discount_percent"
              name="discount_percent"
              type="number"
              value={formik.values.discount_percent}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              className={`w-full ${hasError("discount_percent") ? "border-red-500" : ""}`}
            />
            {hasError("discount_percent") && (
              <p className="text-red-500 text-sm">{formik.errors.discount_percent}</p>
            )}
          </div>

          {/* Final Price (Read-only) */}
          <div className="space-y-1">
            <Label htmlFor="final_price">Final Price</Label>
            <Input
              id="final_price"
              name="final_price"
              type="number"
              value={formik.values.final_price}
              readOnly
              className="w-full bg-gray-100"
            />
          </div>

          {/* Description */}
          <div className="col-span-2 space-y-1">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              className="w-full border rounded-md px-3 py-2 resize-none h-24"
            />
          </div>

          {/* Images */}
          <div className="col-span-2 space-y-1">
            <Label htmlFor="images">Images</Label>
            <Input
              id="images"
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setSelectedFiles(Array.from(e.target.files || []))}
              disabled={formik.isSubmitting}
            />
            {selectedFiles.length > 0 && (
              <p className="text-gray-500 text-sm">{selectedFiles.length} file(s) selected</p>
            )}
          </div>

          {/* Actions */}
          <div className="col-span-2 flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={formik.isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {formik.isSubmitting ? "Saving..." : editingProduct ? "Update" : "Add"}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
