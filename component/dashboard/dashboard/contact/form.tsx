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

import { showToast } from "nextjs-toast-notify";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";

// ──────────────────────────────────────────────────────────────
// API RESPONSE TYPE
// ──────────────────────────────────────────────────────────────
interface ApiResponse {
  message: string;
}

// ──────────────────────────────────────────────────────────────
// PROPS
// ──────────────────────────────────────────────────────────────
interface ContactDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingContact?: {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  onSaveSuccess?: (contact: any) => void; // Optional: notify parent
}

// ──────────────────────────────────────────────────────────────
// FIELD CONFIG
// ──────────────────────────────────────────────────────────────
interface Field {
  id: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder?: string;
  colSpan?: number;
}

export function ContactDrawer({
  open,
  onOpenChange,
  editingContact,
  onSaveSuccess,
}: ContactDrawerProps) {
  const fields: Field[] = [
    { id: "name", label: "Full Name", type: "text", placeholder: "Enter your name" },
    { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
    { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Write your message here...",
      colSpan: 2,
    },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: editingContact?.name || "",
      email: editingContact?.email || "",
      subject: editingContact?.subject || "",
      message: editingContact?.message || "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      try {
        let res;
        if (editingContact) {
          res = await apiClient.put<ApiResponse>(
            getApiEndpoint.updateContact(editingContact.id),
            values
          );
          showToast.success(res.data.message || "Contact updated successfully!", {
            duration: 4000,
            position: "top-right",
            progress: true,
          });
        } else {
          res = await apiClient.post<ApiResponse>(getApiEndpoint.createContact(), values);
          showToast.success(res.data.message || "Message sent successfully!", {
            duration: 4000,
            position: "top-right",
            progress: true,
          });
        }

        resetForm();
        onOpenChange(false);
        onSaveSuccess?.(res.data.message || values); // Notify parent
      } catch (err: any) {
        const errorMsg =
          err?.response?.data?.message ||
          err?.message ||
          "Failed to save contact. Please try again.";

        showToast.error(errorMsg, {
          duration: 5000,
          position: "top-right",
          progress: true,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const hasError = (fieldId: string) =>
    formik.touched[fieldId as keyof typeof formik.touched] &&
    formik.errors[fieldId as keyof typeof formik.errors];

  const getColSpan = (colSpan?: number) =>
    colSpan === 2 ? "col-span-2" : "col-span-1";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-gray-200">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {editingContact ? "Edit Contact" : "Send a Message"}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            {editingContact ? "Update contact details." : "We'd love to hear from you!"}
          </DialogDescription>
        </DialogHeader>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {fields.map((field) => (
            <div key={field.id} className={`space-y-1 ${getColSpan(field.colSpan)}`}>
              <Label htmlFor={field.id}>{field.label}</Label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  value={formik.values[field.id as keyof typeof formik.values] as string}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full border rounded-md px-3 py-2 resize-none h-32 ${
                    hasError(field.id)
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-gray-300"
                  }`}
                />
              ) : (
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formik.values[field.id as keyof typeof formik.values] as string}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full ${
                    hasError(field.id)
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
              )}

              {hasError(field.id) && (
                <p className="text-red-500 text-sm">
                  {formik.errors[field.id as keyof typeof formik.errors] as string}
                </p>
              )}
            </div>
          ))}

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
              {formik.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Saving...
                </span>
              ) : editingContact ? (
                "Update"
              ) : (
                "Send"
              )}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}