import prisma from "@/lib/prisma";

export async function companyGet() {
  try {
    const company = await prisma.company.findMany();

    return company;
  } catch (error) {
    return [];
  }
}
