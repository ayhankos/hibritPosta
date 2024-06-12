import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  try {
    const { companyId } = await request.json();
    console.log(companyId);
    await prisma.company.delete({
      where: {
        id: companyId,
      },
    });
    return new Response("Company deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Company deletion error: " + error, { status: 500 });
  }
}
