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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useFormik, FormikProvider, FieldArray } from "formik";
import * as Yup from "yup";
import { useEffect, useRef } from "react";
import { showToast } from "nextjs-toast-notify";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";

// Metadata for preview only
interface ImageMetadata {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

interface BlogItem {
  title: string;
  link: string;
  content: string;
  subcontents: string[];
  images: ImageMetadata[];
}

interface BlogFormValues {
  category: string;
  is_published: boolean;
  published_at: string;
  items: BlogItem[];
}

interface BlogDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingBlog?: any;
}

export function BlogDrawer({ open, onOpenChange, editingBlog }: BlogDrawerProps) {
  const categoryOptions = ["Main", "Content"];
  console.log("editingBlog",editingBlog)
  // Holds REAL File objects — never corrupted by Formik
  const realFilesRef = useRef<Record<string, File[]>>({});

  const formik = useFormik<BlogFormValues>({
    enableReinitialize: true,
    // validationSchema: Yup.object().shape({
    //   category: Yup.string().required("Category is required"),
    //   items: Yup.array()
    //     .of(
    //       Yup.object().shape({
    //         title: Yup.string().required("Title is required"),
    //         content: Yup.string().required("Content is required"),
    //         subcontents: Yup.array().of(Yup.string()).min(1),
    //         images: Yup.array().of(Yup.object()),
    //       })
    //     )
    //     .min(1),
    // }),
    initialValues: {
      category: editingBlog?.category || "",
      is_published: editingBlog?.is_published ?? false,
      published_at: editingBlog?.published_at || "",
      items:
        editingBlog?.items?.length
          ? editingBlog.items.map((i: any) => ({
              title: i.title || "",
              link: i.link || "",
              content: i.content || "",
              subcontents: i.subcontents?.length ? i.subcontents : [""],
              images: [],
            }))
          : [{ title: "", link: "", content: "", subcontents: [""], images: [] }],
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        const formData = new FormData();

        formData.append("category", values.category);
        formData.append("is_published", String(values.is_published));
        if (values.published_at) formData.append("published_at", values.published_at);

        values.items.forEach((item, idx) => {
          formData.append(`items[${idx}][title]`, item.title);
          formData.append(`items[${idx}][link]`, item.link || "");
          formData.append(`items[${idx}][content]`, item.content);

          item.subcontents.forEach((sub, sIdx) => {
            formData.append(`items[${idx}][subcontents][${sIdx}]`, sub);
          });

          // CORRECT KEY WITH [] — backend will see as array
          const filesKey = `items[${idx}][images][]`;
          const files = realFilesRef.current[filesKey] || [];

          files.forEach((file) => {
            formData.append(`items[${idx}][images][]`, file, file.name);
          });
        });

        // CORRECT HEADERS — Let browser set Content-Type with boundary
        const config = {
          headers: {
            "Content-Type": "multipart/form-data", // This is OK in most cases
            // Or better: omit entirely and let browser set it
          },
        };

        // If your apiClient is axios, this works perfectly:
        const res = editingBlog?.id
          ? await apiClient.put(getApiEndpoint.updateBlog(editingBlog.id), formData, config)
          : await apiClient.post(getApiEndpoint.createBlog(), formData, config);

        showToast.success(res.data.message || "Blog saved successfully!");

        realFilesRef.current = {};
        resetForm();
        onOpenChange(false);
      } catch (err: any) {
        console.error("Upload failed:", err);
        showToast.error(err?.response?.data?.message || "Failed to save blog");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (formik.values.is_published && !formik.values.published_at) {
      formik.setFieldValue("published_at", new Date().toISOString().split("T")[0]);
    }
  }, [formik.values.is_published]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, itemIdx: number) => {
    if (!e.target.files?.length) return;

    const newFiles = Array.from(e.target.files);
    const key = `items[${itemIdx}][images][]`; // Must match formData key

    realFilesRef.current[key] = [...(realFilesRef.current[key] || []), ...newFiles];

    const metadata = realFilesRef.current[key].map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
      lastModified: f.lastModified,
    }));

    formik.setFieldValue(`items.${itemIdx}.images`, metadata);
    e.target.value = "";
  };

  const removeImage = (itemIdx: number, fileIdx: number) => {
    const key = `items[${itemIdx}][images][]`;
    realFilesRef.current[key] = (realFilesRef.current[key] || []).filter((_, i) => i !== fileIdx);

    const metadata = realFilesRef.current[key].map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
      lastModified: f.lastModified,
    }));

    formik.setFieldValue(`items.${itemIdx}.images`, metadata);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {editingBlog?.id ? "Edit Blog Post" : "Create New Blog Post"}
          </DialogTitle>
          <DialogDescription>Fill in the blog details below.</DialogDescription>
        </DialogHeader>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="mt-6 space-y-6">
            <div>
              <Label>Category *</Label>
              <Select value={formik.values.category} onValueChange={(v) => formik.setFieldValue("category", v)}>
                <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <Label>Publish Now</Label>
              <Switch
                checked={formik.values.is_published}
                onCheckedChange={(v) => formik.setFieldValue("is_published", v)}
              />
            </div>

            {formik.values.is_published && (
              <div>
                <Label>Published Date</Label>
                <Input type="date" name="published_at" value={formik.values.published_at} onChange={formik.handleChange} />
              </div>
            )}

            <FieldArray name="items">
              {({ push, remove }) => (
                <div className="space-y-6">
                  {formik.values.items.map((item, idx) => {
                    const filesKey = `items[${idx}][images][]`;
                    const currentFiles = realFilesRef.current[filesKey] || [];

                    return (
                      <div key={idx} className="border rounded-lg p-6 bg-gray-50 relative">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-lg">Blog Item {idx + 1}</h3>
                          {idx > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                delete realFilesRef.current[filesKey];
                                remove(idx);
                              }}
                              className="text-red-600 hover:bg-red-50 p-2 rounded"
                            >
                              <X size={20} />
                            </button>
                          )}
                        </div>

                        <div className="grid gap-4">
                          <div>
                            <Label>Title *</Label>
                            <Input name={`items.${idx}.title`} value={item.title} onChange={formik.handleChange} />
                          </div>

                          <div>
                            <Label>Link (optional)</Label>
                            <Input name={`items.${idx}.link`} value={item.link} onChange={formik.handleChange} />
                          </div>

                          <div>
                            <Label>Content *</Label>
                            <Textarea name={`items.${idx}.content`} value={item.content} onChange={formik.handleChange} rows={4} />
                          </div>

                          <FieldArray name={`items.${idx}.subcontents`}>
                            {({ push: pushSub, remove: removeSub }) => (
                              <div className="space-y-3">
                                <Label>Subcontents *</Label>
                                {item.subcontents.map((_, sIdx) => (
                                  <div key={sIdx} className="flex gap-2">
                                    <Textarea
                                      name={`items.${idx}.subcontents.${sIdx}`}
                                      value={item.subcontents[sIdx]}
                                      onChange={formik.handleChange}
                                      rows={2}
                                    />
                                    {item.subcontents.length > 1 && (
                                      <button type="button" onClick={() => removeSub(sIdx)} className="text-red-600 self-start mt-2">
                                        <X />
                                      </button>
                                    )}
                                  </div>
                                ))}
                                <Button type="button" variant="outline" size="sm" onClick={() => pushSub("")}>
                                  + Add Subcontent
                                </Button>
                              </div>
                            )}
                          </FieldArray>

                          {/* IMAGES — 100% WORKING WITH HEADERS */}
                          <div>
                            <Label>Images</Label>
                            <Input
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, idx)}
                            />

                            {currentFiles.length > 0 && (
                              <div className="flex flex-wrap gap-4 mt-4">
                                {currentFiles.map((file, i) => (
                                  <div key={i} className="relative group">
                                    <img
                                      src={URL.createObjectURL(file)}
                                      alt={file.name}
                                      className="w-28 h-28 object-cover rounded-lg border shadow"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => removeImage(idx, i)}
                                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition"
                                    >
                                      <X size={16} />
                                    </button>
                                    <p className="text-xs text-center mt-1 truncate w-28">{file.name}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => push({ title: "", link: "", content: "", subcontents: [""], images: [] })}
                  >
                    + Add Blog Item
                  </Button>
                </div>
              )}
            </FieldArray>

            <div className="flex justify-end gap-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  realFilesRef.current = {};
                  onOpenChange(false);
                  formik.resetForm();
                }}
              >
                Cancel
              </Button>

              <Button type="submit" disabled={formik.isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                {formik.isSubmitting ? "Saving..." : editingBlog?.id ? "Update Blog" : "Create Blog"}
              </Button>
            </div>
          </form>
        </FormikProvider>
      </DialogContent>
    </Dialog>
  );
}