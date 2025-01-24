import { prisma } from "@/config/db.config";
/**
 * get user by email
 * @param email
 * @returns
 */
export const getUserByEmail = async (
  email: string
): Promise<ReturnType<typeof prisma.user.findUnique> | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};
