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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { showToast } from "nextjs-toast-notify";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";

export interface OrderItemType {
  id?: number;
  productId: number;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderType {
  id?: number;
  name: string;
  email: string;
  phone: string;
  status: "Pending"  | "Completed" | "Cancelled";
  subtotal: number;
  total: number;
  items: OrderItemType[];
}

interface OrderDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingOrder?: OrderType;
  onSave?: (order: OrderType) => void;
}

export function OrderEditDrawer({
  open,
  onOpenChange,
  editingOrder,
  onSave,
}: OrderDrawerProps) {
  const [items, setItems] = useState<OrderItemType[]>(editingOrder?.items || []);

  useEffect(() => {
    if (editingOrder?.items) setItems(editingOrder.items);
  }, [editingOrder]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    status: Yup.string().oneOf(["Pending", "Processing", "Completed"]).required("Status is required"),
    subtotal: Yup.number().min(0).required("Subtotal required"),
    total: Yup.number().min(0).required("Total required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: editingOrder?.name || "",
      email: editingOrder?.email || "",
      phone: editingOrder?.phone || "",
      status: editingOrder?.status || "Pending",
      subtotal: editingOrder?.subtotal || 0,
      total: editingOrder?.total || 0,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const payload: OrderType = {
          ...values,
          items,
        };
       let res;
             if (editingOrder) {
               res = await apiClient.put(
                 getApiEndpoint.updateOrder(editingOrder.id),
                 payload
               );
               showToast.success(res.data.message || "Contact updated successfully!", {
                 duration: 4000,
                 position: "top-right",
                 progress: true,
               });
             } else {
               res = await apiClient.post(getApiEndpoint.createOrder(), payload);
               showToast.success(res.data.message || "Message sent successfully!", {
                 duration: 4000,
                 position: "top-right",
                 progress: true,
               });
             }
     
             onOpenChange(false);
      } catch (err: any) {
        showToast.error(
          err?.response?.data?.message || err?.message || "Failed to save order",
          { duration: 5000 }
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleItemChange = (index: number, field: keyof OrderItemType, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);

    const subtotal = updated.reduce((acc, item) => acc + item.price * item.quantity, 0);
    formik.setFieldValue("subtotal", subtotal);
    formik.setFieldValue("total", subtotal);
  };

  const addItem = () => {
    setItems([...items, { productId: 0, name: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index: number) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
    const subtotal = updated.reduce((acc, item) => acc + item.price * item.quantity, 0);
    formik.setFieldValue("subtotal", subtotal);
    formik.setFieldValue("total", subtotal);
  };

  const hasError = (fieldId: string) =>
    formik.touched[fieldId as keyof typeof formik.touched] &&
    formik.errors[fieldId as keyof typeof formik.errors];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-3xl rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {editingOrder ? "Edit Order" : "Create Order"}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in customer and order details below.
          </DialogDescription>
        </DialogHeader>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="mt-4 grid grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Customer Info: 2 fields per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={hasError("name") ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {hasError("name") && <p className="text-red-500 text-sm">{String(formik.errors.name)}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={hasError("email") ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {hasError("email") && <p className="text-red-500 text-sm">{String(formik.errors.email)}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="Enter Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={hasError("phone") ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {hasError("phone") && <p className="text-red-500 text-sm">{String(formik.errors.phone)}</p>}
            </div>

            {/* Status */}
            <div className="space-y-1">
              <Label>Status</Label>
              <Select
                value={formik.values.status}
                onValueChange={(value) => formik.setFieldValue("status", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {["Pending", "Completed", "Cancelled"].map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {hasError("status") && (
                <p className="text-red-500 text-sm">{String(formik.errors.status)}</p>
              )}
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-2 mt-4">
            <Label>Order Items</Label>
            {items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-2 items-center">
                <Input
                  placeholder="Product Name"
                  value={item.name}
                  onChange={(e) => handleItemChange(idx, "name", e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => handleItemChange(idx, "quantity", Number(e.target.value))}
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  min={0}
                  onChange={(e) => handleItemChange(idx, "price", Number(e.target.value))}
                />
                <Button type="button" variant="destructive" onClick={() => removeItem(idx)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" onClick={addItem}>
              Add Item
            </Button>
          </div>

          {/* Subtotal & Total */}
          <div className="flex justify-between mt-4">
            <div>Total Items: {formik.values.subtotal}</div>
            <div>Total Amount: ${formik.values.total.toFixed(2)}</div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
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
              {formik.isSubmitting ? "Saving..." : editingOrder ? "Update" : "Save"}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
