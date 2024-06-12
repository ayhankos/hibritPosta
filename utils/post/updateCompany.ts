import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateCompany(companyId: number, formData: any) {
  try {
    const updatedCompany = await prisma.company.update({
      where: { id: companyId },
      data: { name: formData, location: formData },
    });

    return updatedCompany;
  } catch (error) {
    console.error("Error updating company:", error);
    throw error;
  }
}
