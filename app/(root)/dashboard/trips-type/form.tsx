"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { showToast } from "nextjs-toast-notify";

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
import { Switch } from "@/components/ui/switch";

import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";

interface ApiResponse {
  message: string;
}

interface TripDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingTrip?: any;
}

interface Field {
  id: string;
  label: string;
  type: "text" | "number" | "textarea" | "select" | "file";
  placeholder?: string;
  options?: string[];
  colSpan?: number;
}

export function TripsDrawer({ open, onOpenChange, editingTrip }: TripDrawerProps) {
  const [images, setImages] = useState<File[]>([]);

  const fields: Field[] = [
    { id: "title", label: "Trip Title", type: "text", placeholder: "Enter trip title" },
    { id: "slug", label: "Slug", type: "text", placeholder: "Enter slug" },
    { id: "subtitle", label: "Subtitle", type: "text", placeholder: "Enter subtitle" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Write a brief description", colSpan: 3 },
    { id: "originalPrice", label: "Original Price", type: "number", placeholder: "0" },
    { id: "discountPercent", label: "Discount (%)", type: "number", placeholder: "0" },
    { id: "finalPrice", label: "Final Price", type: "number", placeholder: "0" },
    { id: "durationDays", label: "Duration (days)", type: "number", placeholder: "0" },
    { id: "ages", label: "Ages", type: "text", placeholder: "e.g. 18-50" },
    { id: "status", label: "Status", type: "select", options: ["Active", "Inactive", "Archived"] },
    { id: "category", label: "Category", type: "select", options: ["Adventure", "Leisure", "Cultural", "Nature", "Tour"] },
    { id: "images", label: "Images", type: "file" },
  ];

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    slug: Yup.string().required("Slug is required"),
    description: Yup.string().required("Description is required"),
    originalPrice: Yup.number().min(0).required("Required"),
    discountPercent: Yup.number().min(0).max(100).required("Required"),
    finalPrice: Yup.number().min(0).required("Required"),
    durationDays: Yup.number().min(1).required("Required"),
    status: Yup.string().required("Status is required"),
    category: Yup.string().required("Category is required"),
    isFirsttime: Yup.boolean().required("isFirst time is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: editingTrip?.title || "",
      slug: editingTrip?.slug || "",
      subtitle: editingTrip?.subtitle || "",
      description: editingTrip?.description || "",
      originalPrice: editingTrip?.originalPrice || 0,
      discountPercent: editingTrip?.discountPercent || 0,
      finalPrice: editingTrip?.finalPrice || 0,
      durationDays: editingTrip?.durationDays || 1,
      ages: editingTrip?.ages || "",
      status: editingTrip?.status || "Active",
      isTrending: editingTrip?.isTrending ?? false,
      isFirsttime: editingTrip?.isFirsttime ?? false,
      category: editingTrip?.category || "Adventure",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value as any);
        });
        images.forEach((file) => formData.append("images", file));

        let res;
        if (editingTrip?.id) {
          res = await apiClient.put<ApiResponse>(
            getApiEndpoint.updateTrip(editingTrip.id),
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          showToast.success(res.data.message || "Trip updated successfully!");
        } else {
          res = await apiClient.post<ApiResponse>(
            getApiEndpoint.createTrip(),
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          showToast.success(res.data.message || "Trip created successfully!");
        }

        resetForm();
        setImages([]);
        onOpenChange(false);
      } catch (err: any) {
        const errorMsg =
          err?.response?.data?.message || err?.message || "Failed to save trip.";
        showToast.error(errorMsg);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Auto-calc final price
  const calcFinalPrice = () => {
    const price = Number(formik.values.originalPrice) || 0;
    const discount = Number(formik.values.discountPercent) || 0;
    const discounted = price - (price * discount) / 100;
    formik.setFieldValue("finalPrice", Number(discounted.toFixed(2)));
  };

  useEffect(() => {
    calcFinalPrice();
  }, [formik.values.originalPrice, formik.values.discountPercent]);

  const hasError = (fieldId: string) =>
    formik.touched[fieldId as keyof typeof formik.touched] &&
    formik.errors[fieldId as keyof typeof formik.errors];

  const getColSpan = (colSpan?: number) => {
    switch (colSpan) {
      case 1: return "col-span-1";
      case 2: return "col-span-2";
      case 3: return "col-span-3";
      default: return "col-span-1";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-3xl rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {editingTrip ? "Edit Trip" : "Add New Trip"}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in the trip details below.
          </DialogDescription>
        </DialogHeader>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {fields.map((field) => (
            <div key={field.id} className={`space-y-1 ${getColSpan(field.colSpan)}`}>
              <Label htmlFor={field.id}>{field.label}</Label>

              {field.type === "select" ? (
                <div className={`rounded-md w-full ${hasError(field.id) ? "border-red-500" : "border-gray-300"}`}>
                  <Select
                    value={formik.values[field.id as keyof typeof formik.values] as string}
                    onValueChange={(v) => formik.setFieldValue(field.id, v)}
                    disabled={formik.isSubmitting}
                  >
                    <SelectTrigger className="focus:ring-0 focus:ring-offset-0 w-full">
                      <SelectValue placeholder={`Select ${field.label}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  value={formik.values[field.id as keyof typeof formik.values] as string}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full border rounded-md px-3 py-2 resize-none h-24 ${hasError(field.id) ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300"}`}
                />
              ) : field.type === "file" ? (
                <input
                  id={field.id}
                  type="file"
                  multiple
                  onChange={(e) => setImages(Array.from(e.target.files || []))}
                  disabled={formik.isSubmitting}
                  className="w-full border border-gray-300 rounded-md p-1"
                />
              ) : (
                <Input
                  id={field.id}
                  type={field.type === "number" ? "number" : "text"}
                  placeholder={field.placeholder}
                  value={formik.values[field.id as keyof typeof formik.values] as any}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (["originalPrice", "discountPercent"].includes(field.id)) calcFinalPrice();
                  }}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full ${hasError(field.id) ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
              )}

              {hasError(field.id) && (
                <p className="text-red-500 text-sm">{formik.errors[field.id as keyof typeof formik.errors] as string}</p>
              )}
            </div>
          ))}

          {/* Trending switch */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex items-center justify-between mt-2">
            <Label htmlFor="isTrending">Trending Trip</Label>
            <Switch
              id="isTrending"
              checked={formik.values.isTrending}
              onCheckedChange={(c) => formik.setFieldValue("isTrending", c)}
              disabled={formik.isSubmitting}
            />
              <Label htmlFor="isFirsttime">First Time Trip</Label>
              <Switch
                id="isFirsttime"
                checked={formik.values.isFirsttime}
                onCheckedChange={(c) => formik.setFieldValue("isFirsttime", c)}
                disabled={formik.isSubmitting}
              />
          </div>

          {/* Buttons */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={formik.isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={formik.isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white">
              {formik.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Saving...
                </span>
              ) : editingTrip?.id ? "Update" : "Save"}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
