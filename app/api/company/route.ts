import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    if (!formData) {
      throw new Error("Form verileri eksik veya hatalı.");
    }

    const yeniCompany = await prisma.company.create({
      data: {
        name: formData.name,
        location: formData.location,
      },
    });

    return Response.json({ success: true, yeniCompany });
  } catch (error) {
    console.error("Veritabanına yazma hatası:", error);
    return Response.json({ status: 500 });
  }
}
