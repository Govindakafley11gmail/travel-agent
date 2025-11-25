"use client";

import BorderHorizontal from "@/component/border-horizontal/border-horizontal";
import FormikController from "@/component/input-fields-controller/input-fields-controller";
import Navbar from "@/component/navbar/navbar";
import TextCompoment from "@/component/text/text";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { validationConfirmPasswordSchema, validationEmailSchema, validationSignSchema } from "@/data/Validations/register-validation";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, Formik, FormikHelpers } from "formik";
import { data } from "jquery";
import router from "next/router";
import { LockKeyhole } from "lucide-react";
import Footer from "@/component/footer";
import { useRouter } from "next/navigation";
import apiClient from "@/app/api/apiClient";
import { getApiEndpoint } from "@/app/api";
import { showToast } from "nextjs-toast-notify";
import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { EmailFields, initialValues } from "@/data/formik-fields/email";

export interface SignInResponseAttributes {
  status: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface EmailAttributes {
  email: string;

}

export default function Email() {
  const router = useRouter();
  const handleSubmit = async (
    values: EmailAttributes,
    { resetForm }: FormikHelpers<EmailAttributes>
  ) => {
    try {

      resetForm();
    } catch (error: any) {
      // Handle errors

      showToast.error(
        error?.response?.data?.message || error?.message || "Failed to Login",
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
          <Card className="rounded-sm w-[500px] h-full">
            <CardHeader>
              <CardTitle className="font-bold text-xl font-sans">
                Enter Your Email
              </CardTitle>
              <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-2 mr-2" />
            </CardHeader>

            <CardContent>
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationEmailSchema}
              //   onSubmit={onSubmit}
              >
                {() => (
                  <Form className="flex flex-col gap-4">
                    {EmailFields.map((field, index) => (
                      <FormikController
                        key={field.name ?? index}
                        fieldConfig={field}
                        className="flex flex-col"
                        inputWidthIconStyle="border w-full h-[50px] px-4 rounded-md bg-white pl-10 text-gray-400 hover:text-gray-600"
                        label={field.label}
                        name={field.name}
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
                      <LockKeyhole />
                      <TextCompoment text="Will Send Link in your Email" className="text-white font-serif" />
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
