
import * as yup from 'yup';


const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
const messageRegex = /^[a-zA-Z0-9\s!.?"'@#%$£&*^()]+$/;

export const contactSchema = yup.object().shape({
    name: yup
        .string()
        .matches(alphanumericRegex, "Name can only contain letters and numbers")
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),

    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

    subjectLine: yup
        .string()
        .matches(alphanumericRegex, "Subject can only contain letters and numbers")
        .required("Subject is required"),

    message: yup
        .string()
        .matches(messageRegex, "Message can only contain letters and numbers")
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
});
