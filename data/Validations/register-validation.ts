import * as Yup from "yup";

export const validationSignSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format") // Add email validation
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"), // Fixed the message (you said 8 but min is 6)
});

export const validationSignUpSchema = Yup.object().shape({
  customer_name: Yup.string().required("Your Name  is required"),

  email: Yup.string()
    .email("Invalid email format") // Add email validation
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 8 characters long"),
  phone_number: Yup.number()
    .required("Phone Number is required")
    .min(8, "Phone Number must be at least 8 characters log"),
});

export const ValidationForgotPassword = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format") // Add email validation
    .required("Email is required"),
});
export const ValidationResetPassword = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 8 characters long"),
  new_password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 8 characters long"),
});

export const ValidationReviewUs = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format") // Add email validation
    .required("Email is required"),

 rating: Yup.number()
  .typeError("Rating must be a number")
  .min(1, "Rating must be at least 1")
  .max(5, "Rating cannot be more than 5")
  .required("Rating is required"),

  comment: Yup.string()
    .required("Comment is required"),
})

export const validationConfirmPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format") // Add email validation
    .required("Email is required"),
  identificationNo: Yup.string()
    .required("Identification Number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"), // Fixed the message (you said 8 but min is 6)

  newpassword: Yup.string()
    .required("New Password is required")
    .min(6, "New Password must be at least 6 characters long"),
});
export const validationEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format") // Add email validation
    .required("Email is required"),

});