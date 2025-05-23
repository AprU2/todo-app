import * as yup from "yup";
export const userSchema = yup.object().shape({
  userName: yup.string().required("alert.userNameRequired"),
  password: yup
    .string()
    .required("alert.passwordRequired")
    .min(6, "alert.minPasswordRequired")
    .max(20, "alert.maxPasswordRequired"),
});
export interface Todo {
  _id: string;
  title: string;
  isComplete: boolean;
}
