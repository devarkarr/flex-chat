import NextAuth from "next-auth";
import nextConfig from "@/config/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./config/db.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // callbacks: {
  //   /**
  //    * signin
  //    * @param user
  //    * @param account
  //    */
  //   async signIn({ user, account }) {
  //     if (account?.provider !== "credentials") return true;

  //     // const existUser = await getUserByEmail(user.email as string);
  //     // if (!existUser) return false;

  //     // if (existUser.isTwoFactorEnable) {
  //     //   const twoFactor = await getTwoFactorConfirmationByUserId(
  //     //     user.id as string
  //     //   );
  //     //   if (!twoFactor) return false;
  //     //   await deleteTwoFactorConfirmation(user.id as string);
  //     // }
  //     return true;
  //   },
  //   /**
  //    * after login ,jwt
  //    * @param token
  //    * @param session
  //    */
  //   async session({ token, session }) {
  //     if (token.sub && session.user) {
  //       session.user.id = token.sub;
  //     }

  //     // if (token.role && session.user) {
  //     //   session.user.role = token.role;
  //     // }

  //     return session;
  //   },
  //   /**
  //    * after login
  //    * before seesion
  //    * @param token
  //    */
  //   async jwt({ token }) {
  //     if (!token.sub) return token;

  //     // const existUser = await getUserById(token.sub);

  //     // if (!existUser) return token;

  //     // token.role = existUser.role;
  //     return token;
  //   },
  // },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...nextConfig,
});
