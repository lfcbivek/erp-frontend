import { z } from 'zod';
import { isValidPhoneNumber } from "react-phone-number-input";

export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    password: z.string().min(8, "Password must be 8+ characters"),
    confirmPassword: z.string().min(8, "Confirm Password must be 8+ characters"),
    subDomain: z.string().min(3, "Workspace name must be 3+ characters"),
    companyName: z.string().min(1, "Company Name is Required"),
    country: z.string().min(2, "Atleast 2 letter is required"),
    // street: z.string().min(1, "Street is Required"),
    // city: z.string().min(1, "City is Required"),
    // state: z.string().min(1, "State is Required"),
    // zip: z.string().min(1, "Zip is Required"),
    phone: z.string().refine((v) => isValidPhoneNumber(v), "Invalid phone number"),
    website: z.string(),
    // industry: z.string().min(1, "Industry is Required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  })