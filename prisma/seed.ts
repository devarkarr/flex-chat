import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

// @ts-ignore
const userData: Prisma.UserCreateInput[] = [
  {
    name: "arkar",
    username: "arkar",
    email: "arkarlin486@gmail.com",
    password: bcrypt.hashSync("arkar", 10),
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
