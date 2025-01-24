import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

// @ts-ignore
const userData: Prisma.UserCreateInput[] = [
  {
    name: "arkar",
    username: "arkar",
    email: "arkarlin486@gmail.com",
    password: bcrypt.hashSync("arkarlin", 10),
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
