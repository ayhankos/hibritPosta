import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserRoles() {
  const roles = await prisma.$queryRaw<{ enum_value: string }[]>`
    SELECT unnest(enum_range(NULL::"Role"))::text AS enum_value;
  `;

  const specificRoles = ["COMPANY_ADMIN", "COMPANY_STAFF"];
  return roles
    .map((role) => role.enum_value)
    .filter((role) => specificRoles.includes(role));
}
