"use server";

import { prisma } from "@/config/db.config";
import { getUserByEmail, updateUserByEmail } from "./services/user.service";
import {
  deleteVerificationTokenById,
  getVerificationTokenByToken,
} from "./services/verification-token.service";

export const EmailVerificationAction = async (
  token: string
): Promise<{ error?: string; success?: string }> => {
  const existToken = await getVerificationTokenByToken(token);
  if (!existToken) return { error: "Token does not exist!" };

  const expired = existToken.expires < new Date();
  if (expired)
    return {
      error: "Token has expired!",
    };

  const user = await getUserByEmail(existToken.email);
  if (!user)
    return {
      error: "Email does not exist!",
    };

  try {
    await updateUserByEmail(user.email);
    await deleteVerificationTokenById(existToken.id);
    return {
      success: "Email verified",
    };
  } catch (error) {
    return {
      error: "Something went wrong!",
    };
  }
};
