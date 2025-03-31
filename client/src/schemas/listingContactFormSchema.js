import * as yup from 'yup';

export const listingContactSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
})