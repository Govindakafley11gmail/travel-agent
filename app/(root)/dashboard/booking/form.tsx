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
import { useEffect, useState } from "react";
import { showToast } from "nextjs-toast-notify";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea";

// ──────────────────────────────────────────────────────────────
// API RESPONSE TYPE
// ──────────────────────────────────────────────────────────────
interface ApiResponse {
  message: string;
}

// ──────────────────────────────────────────────────────────────
// PROPS & FIELD TYPES
// ──────────────────────────────────────────────────────────────
interface BookingDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingBooking?: any;
}

interface Country {
  name: string;
}

interface TravelType {
  title: string;
  subtitle?: string;
}

interface Field {
  id: string;
  label: string;
  type: "text" | "number" | "date" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  colSpan?: number;
}

export function BookingDrawer({
  open,
  onOpenChange,
  editingBooking,
}: BookingDrawerProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [travelTypes, setTravelTypes] = useState<TravelType[]>([]);

  // Fetch countries and travel types
  useEffect(() => {
    apiClient.get(getApiEndpoint.getCountries()).then((res) => setCountries(res.data));
    apiClient.get(getApiEndpoint.getTrips()).then((res) => setTravelTypes(res.data.data));
  }, []);

  const fields: Field[] = [
    { id: "email", label: "User Email", type: "text", placeholder: "Enter user email" },
    { id: "name", label: "User Name", type: "text", placeholder: "Enter user name" },
    { id: "mobileNo", label: "Mobile No", type: "text", placeholder: "Enter mobile number" },
    { id: "country", label: "Country", type: "text", placeholder: "Select country..." },
    { id: "travelType", label: "Travel Type", type: "select", options: travelTypes.map(t => t.title + (t.subtitle ? `-${t.subtitle}` : "")) },
    { id: "bookingDate", label: "Booking Date", type: "date" },
    { id: "travelStartDate", label: "Travel Start", type: "date" },
    { id: "travelEndDate", label: "Travel End", type: "date" },
    { id: "adultNum", label: "Adults", type: "number", placeholder: "0" },
    { id: "childNum", label: "Children", type: "number", placeholder: "0" },
    { id: "numTravelers", label: "Total Travelers", type: "number", placeholder: "0" },
    { id: "totalAmount", label: "Total Amount", type: "number", placeholder: "0" },
    { id: "status", label: "Status", type: "select", options: ["Pending", "Confirmed", "Cancelled"] },
    { id: "paymentStatus", label: "Payment Status", type: "select", options: ["Pending", "Paid", "Failed"] },
    { id: "specialRequest", label: "Special Request", type: "text", placeholder: "Any special requests?" },
    { id: "remarks", label: "Remarks", type: "textarea", placeholder: "Any remarks?", colSpan: 3 },
  ];

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    name: Yup.string().required("Name is required"),
    mobileNo: Yup.string().required("Mobile number is required"),
    country: Yup.string().required("Country is required"),
    travelType: Yup.string().required("Travel type is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    travelStartDate: Yup.date().required("Travel start date is required"),
    travelEndDate: Yup.date().required("Travel end date is required"),
    adultNum: Yup.number().min(0).required("Adults required"),
    childNum: Yup.number().min(0).required("Children required"),
    numTravelers: Yup.number().min(1).required("At least 1 traveler"),
    totalAmount: Yup.number().min(0).required("Amount required"),
    status: Yup.string().required("Status required"),
    paymentStatus: Yup.string().required("Payment status required"),
    remarks: Yup.string().required("Remarks are required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: editingBooking?.email || "",
      name: editingBooking?.name || "",
      mobileNo: editingBooking?.mobileNo || "",
      country: editingBooking?.country || "",
      travelType: editingBooking?.travelType || "",
      bookingDate: editingBooking?.bookingDate || "",
      travelStartDate: editingBooking?.travelStartDate || "",
      travelEndDate: editingBooking?.travelEndDate || "",
      adultNum: editingBooking?.adultNum || 0,
      childNum: editingBooking?.childNum || 0,
      numTravelers: editingBooking?.numTravelers || 1,
      totalAmount: editingBooking?.totalAmount || 0,
      status: editingBooking?.status || "Pending",
      paymentStatus: editingBooking?.paymentStatus || "Pending",
      specialRequest: editingBooking?.specialRequest || "",
      remarks: editingBooking?.remarks || "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      try {
        let res;
        if (editingBooking) {
          res = await apiClient.put<ApiResponse>(getApiEndpoint.updateBooking(editingBooking.id), values);
          showToast.success(res.data.message || "Booking updated successfully!", { duration: 4000, position: "top-right", progress: true });
        } else {
          res = await apiClient.post<ApiResponse>(getApiEndpoint.createBooking(), values);
          showToast.success(res.data.message || "Booking created successfully!", { duration: 4000, position: "top-right", progress: true });
        }
        resetForm();
        onOpenChange(false);
      } catch (err: any) {
        const errorMsg = err?.response?.data?.message || err?.message || "Failed to save booking. Please try again.";
        showToast.error(errorMsg, { duration: 5000, position: "top-right", progress: true });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { values, setFieldValue, touched, errors } = formik;

  // Auto-update total travelers
  useEffect(() => {
    const total = Number(values.adultNum || 0) + Number(values.childNum || 0);
    if (total !== values.numTravelers) {
      setFieldValue("numTravelers", total);
    }
  }, [values.adultNum, values.childNum, setFieldValue, values.numTravelers]);

  const hasError = (fieldId: string) =>
    touched[fieldId as keyof typeof touched] &&
    errors[fieldId as keyof typeof errors];

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
            {editingBooking ? "Edit Booking" : "Add New Booking"}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in the booking details below.
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

              {field.id === "country" ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Input
                        value={values.country}
                        readOnly
                        placeholder="Select country..."
                        className="cursor-pointer hover:border-green-500 focus:border-green-500 pr-10"
                      />
                      {/* Dropdown arrow icon */}
                      <svg
                        className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search country..." />
                      <CommandList>
                        <CommandEmpty>No country found.</CommandEmpty>
                        {countries.map((c) => (
                          <CommandItem key={c.name} onSelect={() => setFieldValue("country", c.name)}>
                            {c.name}
                          </CommandItem>
                        ))}
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

              ) : field.type === "select" ? (
                <Select
                  value={values[field.id as keyof typeof values] as string}
                  onValueChange={(v) => setFieldValue(field.id, v)}
                  disabled={formik.isSubmitting}
                >
                  <SelectTrigger className="focus:ring-0 focus:ring-offset-0 w-full">
                    <SelectValue placeholder={`Select ${field.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) :
                field.type === "textarea" ? (
                  <Textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    value={values[field.id as keyof typeof values] as string}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                    className={`${hasError(field.id)}`}
                  />
                ) : (
                  <Input
                    id={field.id}
                    type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
                    placeholder={field.placeholder}
                    value={values[field.id as keyof typeof values] as string | number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={field.id === "numTravelers" || formik.isSubmitting}
                    className={`w-full ${hasError(field.id) ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                )}

              {hasError(field.id) && (
                <p className="text-red-500 text-sm">
                  {errors[field.id as keyof typeof errors] as string}
                </p>
              )}
            </div>
          ))}

          <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-end gap-3 pt-2">
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
              {formik.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Saving...
                </span>
              ) : editingBooking ? "Update" : "Save"}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
