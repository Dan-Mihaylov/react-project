import * as yup from 'yup';

const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
const alphanumericAndDashesRegex = /^[a-zA-Z0-9\s-]+$/;
const descriptionRegex = /^[a-zA-Z0-9\s-.,!?'"`]+$/;
const propertyTypeRegex = /(Apartment)|(House)|(Villa)/;

export const propertyFormSchema = yup.object().shape({
  title: yup
    .string()
    .matches(alphanumericAndDashesRegex, "Title can only contain letters numbers and dashes")
    .min(5, "Title must be at least 5 characters")
    .required("Title is required"),

  type: yup
    .string()
    .matches(propertyTypeRegex, "Type can only be Apartment, House or a Villa")
    .min(3, "Type must be at least 3 characters")
    .required("Property type is required"),

  thumbnail: yup.string().url("Invalid URL format").required("Thumbnail is required"),

  country: yup
    .string()
    .matches(alphanumericRegex, "Country can only contain letters and numbers")
    .min(2, "Country name is too short")
    .required("Country is required"),

  city: yup
    .string()
    .matches(alphanumericRegex, "City can only contain letters and numbers")
    .min(2, "City name is too short")
    .required("City is required"),

  postcode: yup
    .string()
    .matches(alphanumericRegex, "Postcode must contain only letters and numbers")
    .min(4, "Postcode is too short")
    .required("Postcode is required"),

  street: yup
    .string()
    .matches(alphanumericRegex, "Street can only contain letters and numbers")
    .min(3, "Street must be at least 3 characters")
    .required("Street is required"),

  price: yup.number().min(0, "Price must be a positive number").required("Price is required"),
  bedrooms: yup.number().min(1, "Must have at least 1 bedroom").required("Number of bedrooms is required"),
  bathrooms: yup.number().min(1, "Must have at least 1 bathroom").required("Number of bathrooms is required"),
  sqMeters: yup.number().min(10, "Size must be at least 10 sq meters").required("Size is required"),

  image1: yup.string().url("Invalid URL format").nullable(),
  image2: yup.string().url("Invalid URL format").nullable(),

  description: yup
    .string()
    .matches(descriptionRegex, "Description can only contain letters numbers and dashes")
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
});
