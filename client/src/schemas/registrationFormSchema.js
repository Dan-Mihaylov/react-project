import * as yup from "yup";

const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;

export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

    password: yup
        .string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),

    companyName: yup
        .string()
        .matches(alphanumericRegex, "Company Name can only contain letters and numbers")
        .min(3, "Company Name must be at least 3 characters")
        .required("Company Name is required"),

    companyAddress: yup
        .string()
        .matches(alphanumericRegex, "Company Address can only contain letters and numbers")
        .required("Company Address is required"),

    companyImageUrl: yup
        .string()
        .url("Invalid URL format")
        .notRequired(),
});
