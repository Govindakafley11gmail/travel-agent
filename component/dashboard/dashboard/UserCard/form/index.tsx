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

import { showToast } from "nextjs-toast-notify"; // ONLY THIS
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";

interface UserFormDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingUser?: any;
}

interface Field {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "select";
  placeholder?: string;
  options?: string[];
  colSpan?: number;
}
interface ApiResponse {
  message: string;
  success: string;
}
export function UserFormDrawer({ open, onOpenChange, editingUser }: UserFormDrawerProps) {
  const fields: Field[] = [
    { id: "name", label: "Full Name", type: "text", placeholder: "Enter full name", colSpan: 1 },
    { id: "email", label: "Email", type: "email", placeholder: "Enter email address", colSpan: 1 },
    { id: "role", label: "Role", type: "select", options: ["Admin", "Manager", "User"], colSpan: 1 },
    { id: "status", label: "Status", type: "select", options: ["Active", "Inactive"], colSpan: 1 },
    { id: "password", label: "Password", type: "password", placeholder: "Enter password", colSpan: 2 },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required"),
    status: Yup.string().required("Status is required"),
    password: editingUser
      ? Yup.string().min(6, "Password must be at least 6 characters")
      : Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: editingUser?.id || "",
      name: editingUser?.name || "",
      email: editingUser?.email || "",
      role: editingUser?.role || "",
      status: editingUser?.status || "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      try {
        let res;
        if (editingUser) {
          res = await apiClient.put<ApiResponse>(getApiEndpoint.updateUser(editingUser.id), values);
          showToast.success("User updated successfully!", {
            duration: 4000,
            position: "top-right",
            progress: true,
          });
        } else {
          res = await apiClient.post<ApiResponse>(getApiEndpoint.createUser(), values);
          showToast.success(res?.data.message || "User created successfully!", {
            duration: 4000,
            position: "top-right",
            progress: true,
          });
        }
        resetForm();
        onOpenChange(false);
      } catch (err: any) {
        const errorMessage =
          err?.response?.data?.error
          err || 
          "Failed to save user. Please try again.";

        showToast.error(errorMessage, {
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

  const getColSpan = (colSpan?: number) => {
    switch (colSpan) {
      case 1: return "col-span-1";
      case 2: return "col-span-2";
      default: return "col-span-2";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl shadow-2xl border border-gray-200">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {editingUser ? "Edit User" : "Add New User"}
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in the user details below.
          </DialogDescription>
        </DialogHeader>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="mt-4 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {fields
            .filter((field) => !(editingUser && field.type === "password"))
            .map((field) => (
              <div key={field.id} className={`space-y-1 ${getColSpan(field.colSpan)}`}>
                <Label htmlFor={field.id}>{field.label}</Label>

                {field.type === "select" ? (
                  <div
                    className={`rounded-md w-full ${hasError(field.id) ? "border border-red-500" : "border border-gray-300"
                      }`}
                  >
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
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formik.values[field.id as keyof typeof formik.values] as string}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                    className={`w-full ${hasError(field.id) ? "border-red-500 focus-visible:ring-red-500" : ""
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
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Saving...
                </span>
              ) : editingUser ? "Update" : "Save"}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}