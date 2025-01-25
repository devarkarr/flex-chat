import { getUserByEmail } from "@/actions/services/user.service";
import { loginSchema } from "@/schema/auth.schema";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

/**
 * authjs configuration
 */
export default {
  providers: [
    /**
     * google provider
     */
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    /**
     * facebook provider
     */
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    /**
     * credentials provider
     */
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
