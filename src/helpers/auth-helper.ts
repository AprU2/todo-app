import { redirect } from "react-router-dom";
import { deleteToken, getToken } from "./storage-helper";

export const logout = () => {
  deleteToken();
  return null;
};

export const checkTokenLoader = () => {
  const token = getToken();

  if (!token) {
    throw redirect("/");
  }
  return null;
};

export const checkAuthLoader = () => {
  const token = getToken();

  if (token) {
    throw redirect("/todos");
  }
  return null;
};
