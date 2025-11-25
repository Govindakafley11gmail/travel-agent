"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { showToast } from "nextjs-toast-notify";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";

// 1. Validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().min(2, "Subject must be at least 2 characters").required("Subject is required"),
  message: Yup.string().min(5, "Message must be at least 5 characters").required("Message is required"),
});

export default function ContactUsForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
            const res =  apiClient.post<Response>(getApiEndpoint.createContact(), values);
                  showToast.success("We Will Get back to You!", {
                    duration: 4000,
                    position: "top-right",
                    progress: true,
                  });
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <Field name="name" as={Input} placeholder="Your name" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Field name="email" as={Input} placeholder="Your email" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <Field name="subject" as={Input} placeholder="Subject" />
              <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <Field name="message" as={Textarea} placeholder="Your message" rows={5} />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700  border shadow-md hover:shadow-lg transition ">
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
