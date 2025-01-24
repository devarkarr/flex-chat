"use server";

import { forgotPasswordSchema } from "@/schema/auth.schema";
import { z } from "zod";
import { getUserByEmail } from "./services/user.service";
import { generateResetPasswordToken } from "./services/reset-password.service";
import { sendResetPasswordMail } from "@/config/mail.config";

export const forgotPasswordAction = async (
  body: z.infer<typeof forgotPasswordSchema>
): Promise<{ error?: string; success?: string }> => {
  const payload = forgotPasswordSchema.safeParse(body);
  if (!payload.success) {
    return {
      error: payload.error.message,
    };
  }
  const { email } = payload.data;

  const user = await getUserByEmail(email);
  if (!user) return { error: "Email does not exist!" };

  const token = await generateResetPasswordToken(user.email);
  return await sendResetPasswordMail(user.email, token);
};
