"use server";

import { registerSchema } from "@/schema/auth.schema";
import { z } from "zod";
import { getUserByEmail } from "./services/user.service";
import { prisma } from "@/config/db.config";
import { hashSync } from "bcrypt";
import { generateVerificationToken } from "./services/verification-token.service";
import { sendVerificationMail } from "@/config/mail.config";

/**
 * login action
 * @param body
 */
export const RegisterAction = async (
  body: z.infer<typeof registerSchema>
): Promise<{ error?: string; success?: string }> => {
  // validate body
  const payload = registerSchema.safeParse(body);

  // check if body is valid
  if (!payload.success) {
    return {
      error: payload.error.message,
    };
  }

  const { name, email, password } = payload.data;
  const user = await getUserByEmail(email);
  if (user) return { error: "Email already exists" };

  const hash_password = hashSync(password, 10);
  const username = name.toLowerCase();
  try {
    const newUser = await prisma.user.create({
      data: {
        name: name,
        username: username,
        email: email,
        password: hash_password,
      },
    });

    const token = await generateVerificationToken(newUser.email);
    return await sendVerificationMail(newUser.email, token);
  } catch (e) {
    return {
      error: "Something went wrong",
    };
  }
};
