"use server";

import { newPasswordSchema } from "@/schema/auth.schema";
import { z } from "zod";
import bcrypt from "bcryptjs";
import {
  deleteResetPasswordTokenById,
  getResetPasswordTokenByToken,
} from "./services/reset-password.service";
import { getUserByEmail } from "./services/user.service";
import { prisma } from "@/config/db.config";

export const newPasswordAction = async (
  body: z.infer<typeof newPasswordSchema>
): Promise<{
  error?: string;
  success?: string;
}> => {
  const payload = newPasswordSchema.safeParse(body);
  if (!payload.success) {
    return {
      error: payload.error.message,
    };
  }
  const { password, token } = payload.data;

  const existToken = await getResetPasswordTokenByToken(token!);
  if (!existToken) return { error: "Token does not exist!" };

  const expired = existToken.expires < new Date();
  if (expired)
    return {
      error: "Token has expired!",
    };

  const user = await getUserByEmail(existToken.email);
  if (!user) return { error: "Email does not exist!" };

  await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      password: await bcrypt.hash(password, 10),
    },
  });
  await deleteResetPasswordTokenById(existToken.id);

  return {
    success: "Password updated",
  };
};
