import { ForgotPasswordAttributes } from "@/app/forgot-password/page";
import { Mail, Lock } from "lucide-react";
export const ForgotPassFields = [
  {
    type: "inputwithicon",
    name: "email",
    label: "Email",
    placeholder: 'Enter your Email',

    Icon: Mail
  },
  {
    type: "inputwithicon",
    name: "identificationNo",
    label: "CID NO",
    placeholder: 'Enter your CID NO',
    Icon: Mail
  },
  {
    type: "inputwithicon",
    name: "password", // Changed from "Password" to "password"
    label: "Password",
    Icon: Lock,
    placeholder: 'Enter your Password',

    subType: "password"
  },
  {
    type: "inputwithicon",
    name: "newpassword", // Changed from "Password" to "password"
    label: "New Password",
    Icon: Lock,
    placeholder: 'Enter your New Password',

    subType: "password"
  },
];

export const initialValues: ForgotPasswordAttributes = {
  email: "",
  password: "",
  newpassword: "",
  identificationNo: ""
};