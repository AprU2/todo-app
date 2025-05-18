import * as yup from "yup";
export const userSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(20, "Max 20 characters"),
});
