"use client";
import BorderHorizontal from "@/component/border-horizontal/border-horizontal";
import Footer from "@/component/footer";
import FormikController from "@/component/input-fields-controller/input-fields-controller";
import Navbar from "@/component/navbar/navbar";
import TextCompoment from "@/component/text/text";
// import { userSignUp } from "@/app/src/services/auth/signup/sign-up";
import { Button } from "@/components/ui/button";
// import { Alert } from "@heroui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  initialValues,
  RegisterFormFields,
} from "@/data/formik-fields/register-fields";
import { validationSignUpSchema } from "@/data/Validations/register-validation";
import { useQuery } from '@tanstack/react-query';

// import FormikController from "@/custom-components/formik/formik-controller";
// import BorderHorizontal from "@/custom-components/or-divider/or-divider";
// import TextCompoment from "@/custom-components/text/custom-text";

// import {
//   initialValues,
//   RegisterFormFields,
// } from "@/form-fields/register-fields";
// import { validationSignUpSchema } from "@/validation-schem/register-validationschema";
// import { useMutation } from "@tanstack/react-query";

import { Formik, Form, FormikHelpers } from "formik";
import { LockKeyhole, User, UserCheck } from "lucide-react";
import { Quattrocento_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface RegisterFormValuesAttributes {
  customer_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface SignUpResponseAttributes {
  status: number;
}

export default function Register() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  //   const { mutateAsync: signUpMutate, data } = useMutation({
  //     mutationFn: userSignUp,
  //     mutationKey: ["User Registration"],
  //   });

  //   function OnSuccess() {
  //     router.push("login");
  //   }{}

 

  const onSubmit = async (
    values: RegisterFormValuesAttributes,
    { resetForm }: FormikHelpers<RegisterFormValuesAttributes>
  ) => {
    resetForm();
  };

  return (
    <div>
      <div className="h-full mb-10">
     

        <div className="h-full flex justify-center mt-10">
          <Card className="rounded-sm w-[360px] h-full">
            <CardHeader>
              <CardTitle className="text-black  font-serif">
                Sign Up
              </CardTitle>
              <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-2 mr-2" />
            </CardHeader>

            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSignUpSchema}
                enableReinitialize={true}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="flex flex-col gap-4">
                    {RegisterFormFields.map((field) => (
                      <FormikController
                        key={field.name}
                        fieldConfig={field}
                        className="flex flex-col"
                        inputWidthIconStyle="border w-full h-[50px] px-4 rounded-md bg-white pl-10 text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        label={field.label}
                        name={field.name || ""}
                      />
                    ))}

                    <Button
                      className="mt-4 w-full h-[50px] rounded-lg text-center bg-green-600 hover:bg-green-700  border shadow-md hover:shadow-lg transition"
                      type="submit"
                    >
                        <UserCheck /> 
                      <TextCompoment text="SignUp" className="text-white font-xl font-serif text-center" />
                    </Button>

                    <div className="mb-5">
                      <BorderHorizontal borderStyle="w-full border-b border-gray-300 mt-2 mr-2" />
                     
                    </div>
                  </Form>
                )}
              </Formik>
               <div className="">
                        <span className="text-gray-600">
                          Already have an account?{" "}
                        </span>
                        <button
                          onClick={() => router.push("login")}
                          className="text-green-600 hover:text-green-500 font-serif "
                        >
                          Sign in
                        </button>
                      </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
