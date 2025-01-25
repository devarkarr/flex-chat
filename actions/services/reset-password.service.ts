import { prisma } from "@/config/db.config";
import { v4 as uuidv4 } from "uuid";
export const createResetPasswordToken = async (
  email: string,
  expires: Date,
  token: string
) => {
  return await prisma.resetPasswordToken.create({
    data: {
      email: email,
      expires: expires,
      token: token,
    },
  });
};
export const getResetPasswordTokenByEmail = async (email: string) => {
  return await prisma.resetPasswordToken.findFirst({
    where: {
      email: email,
    },
  });
};

export const getResetPasswordTokenByToken = async (token: string) => {
  return await prisma.resetPasswordToken.findFirst({
    where: {
      token: token,
    },
  });
};

export const deleteResetPasswordTokenById = async (id: string) => {
  return await prisma.resetPasswordToken.delete({
    where: {
      id: id,
    },
  });
};

export const generateResetPasswordToken = async (email: string) => {
  const existToken = await getResetPasswordTokenByEmail(email);
  if (existToken) {
    await deleteResetPasswordTokenById(existToken.id);
  }

  const token = uuidv4();
  const expireDate = new Date(new Date().getTime() + 3600 * 1000);

  const newToken = await createResetPasswordToken(email, expireDate, token);
  return newToken.token;
};
