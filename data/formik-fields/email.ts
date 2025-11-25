import { EmailAttributes } from "@/app/email/page";
import { Mail } from "lucide-react";
export const EmailFields = [
    {
        type: "inputwithicon",
        name: "email",
        label: "Email",
        placeholder: 'Enter your Email',

        Icon: Mail
    },



];

export const initialValues: EmailAttributes = {
    email: "",

};