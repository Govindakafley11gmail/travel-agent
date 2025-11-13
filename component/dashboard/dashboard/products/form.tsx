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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { showToast } from "nextjs-toast-notify";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";

interface ApiResponse {
  message: string;
}

interface ProductDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingProduct?: ProductType;
}

export interface ProductType {
  id?: number;
  category: string;
  product_name: string;
  description: string;
  original_price: number;
  discount_percent: number;
  final_price: number;
  images?: string[] | File[];
}

export function ProductDrawer({
  open,
  onOpenChange,
  editingProduct,
}: ProductDrawerProps) {
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  // Example categories
  const categories = ["Electronics", "Clothing", "Books", "Home & Kitchen"];

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    product_name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    original_price: Yup.number().min(0).required("Original price required"),
    discount_percent: Yup.number().min(0).max(100).required("Discount required"),
    final_price: Yup.number().min(0).required("Final price required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      category: editingProduct?.category || "",
      product_name: editingProduct?.product_name || "",
      description: editingProduct?.description || "",
      original_price: editingProduct?.original_price || 0,
      discount_percent: editingProduct?.discount_percent || 0,
      final_price: editingProduct?.final_price || 0,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        const formData = new FormData();
        formData.append("category", values.category);
        formData.append("product_name", values.product_name);
        formData.append("description", values.description);
        formData.append("original_price", values.original_price.toString());
        formData.append("discount_percent", values.discount_percent.toString());
        formData.append("final_price", values.final_price.toString());
        imageFiles.forEach((file) => formData.append("images", file));

        let res;
        if (editingProduct?.id) {
          res = await apiClient.put<ApiResponse>(
            getApiEndpoint.updateproduct(editingProduct.id),
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          showToast.success(res.data.message || "Product updated successfully!", {
            duration: 4000,
            position: "top-right",
            progress: true,
          });
        } else {
          res = await apiClient.post<ApiResponse>(
            getApiEndpoint.createproduct(),
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          showToast.success(res.data.message || "Product created successfully!", {
            duration: 4000,
            position: "top-right",
            progress: true,
          });
        }

        resetForm();
        setImageFiles([]);
        onOpenChange(false);
      } catch (err: any) {
        showToast.error(
          err?.response?.data?.message || err?.message || "Failed to save product",
          { duration: 5000, position: "top-right", progress: true }
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const hasError = (fieldId: string) =>
    formik.touched[fieldId as keyof typeof formik.touched] &&
    formik.errors[fieldId as keyof typeof formik.errors];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-3xl rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {editingProduct ? "Edit Product" : "Add New Product"}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in the product details below.
          </DialogDescription>
        </DialogHeader>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category dropdown */}
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Select
              value={formik.values.category}
              onValueChange={(v) => formik.setFieldValue("category", v)}
              disabled={formik.isSubmitting}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {hasError("category") && (
              <p className="text-red-500 text-sm">
                {String(formik.errors.category)}
              </p>
            )}
          </div>

          {/* Other fields */}
          {["product_name", "description", "original_price", "discount_percent", "final_price"].map((field) => (
            <div key={field} className="space-y-1">
              <Label htmlFor={field}>{field.replace("_", " ").toUpperCase()}</Label>
              <Input
                id={field}
                type={["original_price", "discount_percent", "final_price"].includes(field) ? "number" : "text"}
                placeholder={`Enter ${field.replace("_", " ")}`}
                value={formik.values[field as keyof typeof formik.values] as string | number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={hasError(field) ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {hasError(field) && (
                <p className="text-red-500 text-sm">
                  {String(formik.errors[field as keyof typeof formik.errors])}
                </p>
              )}
            </div>
          ))}

          {/* Image Upload */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 space-y-1">
            <Label>Product Images</Label>
            <Input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) setImageFiles(Array.from(e.target.files));
              }}
            />
            {imageFiles.length > 0 && (
              <p className="text-sm text-gray-500">{imageFiles.length} image(s) selected</p>
            )}
          </div>

          {/* Buttons */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={formik.isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={formik.isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white">
              {formik.isSubmitting ? "Saving..." : editingProduct ? "Update" : "Save"}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
