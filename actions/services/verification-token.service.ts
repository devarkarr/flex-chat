import { prisma } from "@/config/db.config";
import { v4 as uuidv4 } from "uuid";

export const getVerificationTokenByEmail = async (email: string) => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: {
      email: email,
    },
  });

  return verificationToken;
};

export const getVerificationTokenByToken = async (token: string) => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: {
      token: token,
    },
  });

  return verificationToken;
};

export const deleteVerificationTokenById = async (id: string) => {
  await prisma.verificationToken.delete({
    where: {
      id: id,
    },
  });
};


export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const existToken = await getVerificationTokenByEmail(email);
  if (existToken) {
    await deleteVerificationTokenById(existToken.id);
  }

  const newToken = await prisma.verificationToken.create({
    data: {
      email: email,
      token: token,
      expires: expiresAt,
    },
  });

  return newToken.token;
};
