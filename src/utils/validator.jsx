import {object, ref, string} from "yup";

export const registerSchema = object({
  email: string().email("Email is not correct").required(),
  name: string().min(3, "Name is not correct"),
  password: string().min(6, "Password should have letter more than 6 characters"),
  confirmPassword: string().oneOf([ref("password"), null], "Confirm password is not match with password")
})

export const loginSchema = object({
  email: string().email("Email is not correct").required(),
  password: string().min(6, "Password should have letter more than 6 characters"),
})