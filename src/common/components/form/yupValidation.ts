import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password should be of minimum 7 characters length")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
});

export const validationSchemaForCreateCardModal = yup.object({
  question: yup
    .string()
    .min(7, "question should be of minimum 7 characters length")
    .required("question is required"),
  answer: yup
    .string()
    .min(7, "answer should be of minimum 7 characters length")
    .required("answer is required")
});
