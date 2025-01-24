import NextAuth from "next-auth";
import nextConfig from "@/config/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...nextConfig,
});
