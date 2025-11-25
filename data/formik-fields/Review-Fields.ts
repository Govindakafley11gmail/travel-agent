import { ReviewUsAttributes } from "@/app/Review-Us/page";
import { Mail, User, Star } from "lucide-react";
export const ReviewUsFields = [
    {
        type: "inputwithicon",
        name: "name", // Changed from "Password" to "password"
        label: "Full Name",
        Icon: User,
        placeholder: 'Enter your name',

        subType: "name"
    },
    {
        type: "inputwithicon",
        name: "email",
        label: "Email",
        placeholder: 'Enter your Email',

        Icon: Mail
    },
    {
        type: "inputwithicon",
        name: "rating",
        label: "Rating (1-5)",
        placeholder: 'Enter your Email',

        Icon: Star
    },
    {
        type: "input",
        name: "comment",
        label: "Comment",
        placeholder: 'Write Your Review Here',

    },


];

export const initialValues: ReviewUsAttributes = {
    name: "",
    email: "",
    rating: "",
    comment: "",
};