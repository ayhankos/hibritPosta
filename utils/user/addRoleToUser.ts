import { PrismaClient, $Enums } from "@prisma/client";

const prisma = new PrismaClient();

export async function addRoleToUser(username: string, role: string) {
  const user = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      role: role as $Enums.Role,
    },
  });
  prisma.$disconnect();
  return user;
}
