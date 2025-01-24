import { getUserByEmail } from "@/actions/services/user.service";
import { loginSchema } from "@/schema/auth.schema";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserByEmail(email);
          if (!user) return null;

          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
