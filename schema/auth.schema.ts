import { z } from "zod";

/**
 * login validation
 */
export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

/**
 * register validation
 */
export const registerSchema = loginSchema
  .extend({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

/**
 * forgot password validation
 */
export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});
