import prisma from "@/lib/prisma";

export async function staffGet(companyId: number) {
  try {
    const staffs = await prisma.user.findMany({
      where: {
        companyId: companyId,
      },
      select: {
        id: true,
        name: true,
        username: true,
        password: true,
        email: true,
        printingCenterId: true,
        printingCenter: true,
        role: true,
        companyId: true,
      },
    });

    return staffs;
  } catch (error) {
    return [];
  }
}
