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
import {
  formloginFields,
  initialValues,
} from "@/data/formik-fields/login-fields";
import { validationSignSchema } from "@/data/Validations/register-validation";
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

export interface SignInResponseAttributes {
  status: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface SignInAttributes {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (
    values: SignInAttributes,
    { resetForm }: FormikHelpers<SignInAttributes>
  ) => {
    try {
      // Make API call
      const response = await apiClient.post(
        getApiEndpoint.login(),
        values
      );

      // Success toast
      showToast.success(
        response.data.message || "Login successfully!",
        {
          duration: 4000,
          position: "top-right",
          progress: true,
        }
      );
      const token = Cookies.get("accessToken");
      if (!token) {
        router.push("/"); // no token → redirect
        return;
      }

      try {
        const decoded = jwtDecode<JwtPayload & { role?: string }>(token);
        const userRole = decoded?.role ?? null;

        if (!userRole) {
          router.push("/"); // invalid role → redirect
          return;
        }

        if (userRole.toLowerCase() === "client") {
          router.push("/register"); // client → register
          return;
        }
        if(userRole.toLowerCase() === "admin" || userRole.toLowerCase() === "user" || userRole.toLowerCase() === "manager" || userRole.toLowerCase() === "accounts" ){
            router.push("/dashboard"); // client → register
          return;
        }

        // valid admin/Manager/User → allow access
      } catch (err) {
        console.error("Invalid token:", err);
        router.push("/"); // invalid token → redirect
      }
      // Log values (optional)

      // Reset form
      resetForm();
    } catch (error: any) {
      // Handle errors

      showToast.error(
        error?.response?.data?.error || error?.error || "Failed to Login",
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
          <Card className="rounded-sm w-[360px] h-full">
            <CardHeader>
              <CardTitle className="font-bold text-xl font-sans">
                Sign In
              </CardTitle>
              <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-2 mr-2" />
            </CardHeader>

            <CardContent>
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSignSchema}
              //   onSubmit={onSubmit}
              >
                {() => (
                  <Form className="flex flex-col gap-4">
                    {formloginFields.map((field, index) => (
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
                    <div className="flex flex-row justify-between">
                      <div className="text-center flex items-center gap-4">
                        <Checkbox className=" border-gray-400  data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 data-[state=checked]:text-white" />
                        <span className="text-sm text-gray-900">
                          Remember Me
                        </span>
                      </div>

                      <button
                        type="button"
                        className="text-green-600 hover:text-green-500 "
                        onClick={() => router.push("forgot-password")}
                      >
                        <TextCompoment
                          text="Forgot your password?"
                          className="text-sm font-serif"
                        />
                      </button>
                    </div>

                    <Button
                      className="mt-4 w-full h-[50px] rounded-lg text-lg bg-green-600 hover:bg-green-700  border shadow-md hover:shadow-lg transition"
                      type="submit"
                    >
                      <LockKeyhole />
                      <TextCompoment text="Login" className="text-white font-serif" />
                    </Button>
                    <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-2 mr-2" />


                  </Form>

                )}
              </Formik>
              <div className="mt-5">
                <span className="text-gray-600">
                  Don&apos;t have an account?{" "}
                </span>
                <button
                  onClick={() => router.push("/register")}
                  className="text-green-600 hover:text-green-500 font-serif"
                >
                  Sign up
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
                <Footer />

    </div>
  );
}
