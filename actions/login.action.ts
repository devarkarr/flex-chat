"use server";
import { loginSchema } from "@/schema/auth.schema";
import { z } from "zod";
import { getUserByEmail } from "./services/user.service";
import { generateVerificationToken } from "./services/verification-token.service";
import { sendVerificationMail } from "@/config/mail.config";

/**
 * login action
 * @param body
 */
export const LoginAction = async (
  body: z.infer<typeof loginSchema>
): Promise<{ error?: string; success?: string }> => {
  // validate body
  const payload = loginSchema.safeParse(body);

  // check if body is valid
  if (!payload.success) {
    return {
      error: payload.error.message,
    };
  }

  const { email, password } = payload.data;
  const user = await getUserByEmail(email);
  if (!user) return { error: "Email does not exist" };

  if (!user.emailVerified) {
    const token = await generateVerificationToken(user.email);
    return await sendVerificationMail(user.email, token);
  }
  return {
    success: "login",
  };
};
