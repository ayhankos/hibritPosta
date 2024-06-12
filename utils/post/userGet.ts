import prisma from "@/lib/prisma";

export async function userGet() {
  try {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        companyId: true,
      },
    });

    return user;
  } catch (error) {
    return [];
  }
}
