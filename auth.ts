import NextAuth from "next-auth";
import nextConfig from "@/config/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./config/db.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...nextConfig,
});
