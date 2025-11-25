"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart, Product } from "@/component/shopping-ui/product/cartContext";
import { useState } from "react";
import { showToast } from "nextjs-toast-notify";
import { getApiEndpoint } from "../api";
import apiClient from "../api/apiClient";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface CheckoutDialogProps {
  open: boolean;
  onClose: () => void;
  subtotal: number;
  total: string;
}

export default function CheckoutDialog({ open, onClose, subtotal, total }: CheckoutDialogProps) {
  const { cartItems } = useCart();
  const [loading, setLoading] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = { name: "", email: "", phone: "" };
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
  });

  const handleConfirmOrder = async (values: typeof initialValues) => {
    const orderData = {
      customer: values,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.product_name,
        quantity: item.quantity || 1,
        price: Number(item.final_price),
      })),
      subtotal,
      total: Number(total),
    };

    try {
      setLoading(true);
      const response = await apiClient.post(getApiEndpoint.createOrder(), orderData);

      showToast.success(response.data.message, {
        duration: 4000,
        position: "top-right",
        progress: true,
      });

      onClose();
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response?.data?.error || "Something went wrong");
      setErrorDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Checkout Dialog */}
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-md overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Checkout Details</DialogTitle>
          </DialogHeader>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleConfirmOrder}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4 mt-4">
                {/* FORM FIELDS */}
                <div>
                  <label className="text-sm font-medium text-gray-600">Full Name</label>
                  <Field as={Input} name="name" placeholder="Enter full name" />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <Field as={Input} name="email" type="email" placeholder="Enter email" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Phone Number</label>
                  <Field as={Input} name="phone" type="tel" placeholder="Enter phone number" />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* CART ITEMS */}
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between pb-2">
                    <h3 className="font-semibold text-gray-700">Items in Cart</h3>
                    <h3 className="font-semibold text-gray-700">Price</h3>
                  </div>
                  {cartItems.length > 0 ? (
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {cartItems.map((item: Product, index: number) => (
                        <li key={item.id} className="flex justify-between items-center">
                          <span>{index + 1}. {item.product_name} x {item.quantity || 1}</span>
                          <span className="font-semibold">${Number(item.final_price) * (Number(item.quantity) || 1)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm">Your cart is empty.</p>
                  )}
                </div>

                {/* PRICE SUMMARY */}
                <div className="mt-6 border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-semibold">{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total (incl. tax):</span>
                    <span className="font-bold text-lg">${total}</span>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" onClick={onClose} disabled={loading}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-green-700 text-white"
                    disabled={loading}
                  >
                    {loading ? "Placing..." : "Confirm Order"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>

      {/* ERROR DIALOG */}
      <Dialog open={errorDialogOpen} onOpenChange={() => setErrorDialogOpen(false)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-red-600">Error</DialogTitle>
          </DialogHeader>
          <div className="mt-2 text-sm text-gray-700">{errorMessage}</div>
          <DialogFooter className="mt-4 flex justify-end">
            <Button onClick={() => setErrorDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
