"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Calendar, TrendingUp, ArrowRight, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import BorderHorizontal from "@/component/border-horizontal/border-horizontal";
import Footer from "@/component/footer";
import FormikController from "@/component/input-fields-controller/input-fields-controller";
import TextCompoment from "@/component/text/text";
import { ValidationReviewUs, validationSignSchema } from "@/data/Validations/register-validation";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Formik, Form, FormikHelpers } from "formik";
import router from "next/router";
import { showToast } from "nextjs-toast-notify";
import { initialValues, ReviewUsFields } from "@/data/formik-fields/Review-Fields";
import apiClient from "../api/apiClient";
import { getApiEndpoint } from "../api";
export interface ReviewUsAttributes {
    name: string;
    email: string;
    rating: string;
    comment: string;

}
export default function ReviewUs() {
    const handleSubmit = async (
        values: ReviewUsAttributes,
        { resetForm }: FormikHelpers<ReviewUsAttributes>
    ) => {
        try {
            //   // Make API call
            const response = await apiClient.post(
                getApiEndpoint.createReview(),
                values
            );
          
            showToast.success(
                response.data.message || "Review submitted successfully!",
                {
                    duration: 4000,
                    position: "top-right",
                    progress: true,
                }
            );

            resetForm();
        } catch (error: any) {
            // Handle errors

            showToast.error(
                error?.response?.data?.error || error?.message || "Failed to Login",
                {
                    duration: 5000,
                    position: "top-right",
                    progress: true,
                }
            );
        }
    };
    return (
        <div>
            <div className="h-full mb-40">
                <div className="h-full flex justify-center mt-20">
                    <Card className="rounded-sm w-[550px] h-full">
                        <CardHeader>
                            <CardTitle className="font-bold text-xl font-sans">
                                Review Us              </CardTitle>
                            <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-2 mr-2" />
                        </CardHeader>

                        <CardContent>
                            <Formik
                                onSubmit={handleSubmit}
                                initialValues={initialValues}
                                validationSchema={ValidationReviewUs}
                            //   onSubmit={onSubmit}
                            >
                                {() => (
                                    <Form className="flex flex-col gap-4">
                                        {ReviewUsFields.map((field, index) => (
                                            <FormikController
                                                key={field.name ?? index}
                                                fieldConfig={field}
                                                className="flex flex-col"
                                                inputWidthIconStyle="border w-full h-[50px] px-4 rounded-md bg-white pl-10 text-gray-400 hover:text-gray-600"
                                                label={field.label}
                                                name={field.name}
                                                fieldstyle="border w-full h-[120px] pb-18  rounded-md bg-white pl-2 text-gray-400 hover:text-gray-600 "
                                                labelStyle="text-base font-medium"
                                            />
                                        ))}

                                        {/* {data?.message && (
                    <Alert
                      onClose={() => OnSuccess()}
                      color="success"
                      variant="faded"
                      title="Success"
                      description={data?.message}
                      isVisible={true}
                      className="border border-green-300 bg-green-50 text-green-800 flex items-center gap-8 p-4 rounded-md"
                    />
                  )} */}


                                        <Button
                                            className="mt-4 w-full h-[50px] rounded-lg text-lg bg-green-600 hover:bg-green-700  border shadow-md hover:shadow-lg transition"
                                            type="submit"
                                        >
                                            <TextCompoment text="Submit" className="text-white font-serif" />
                                        </Button>


                                    </Form>

                                )}
                            </Formik>

                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}