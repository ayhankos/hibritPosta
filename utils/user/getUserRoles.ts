import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserRoles() {
  const roles = Object.values(Role);

  const specificRoles = ["COMPANY_ADMIN", "COMPANY_STAFF"];
  return roles.filter((role) => specificRoles.includes(role));
}
