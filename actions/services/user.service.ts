import { prisma } from "@/config/db.config";
/**
 * get user by email
 * @param email
 * @returns
 */
export const getUserByEmail = async (
  email: string
): Promise<ReturnType<typeof prisma.user.findUnique> | null> => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const updateUserByEmail = async (email: string) => {
  return await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      emailVerified: new Date(),
    },
  });
};
