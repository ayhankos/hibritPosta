import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: Request) {
  try {
    const formData = await request.json();
    const companyId = parseInt(formData.companyId);
    if (!formData) {
      throw new Error("Form verileri eksik veya hatalı.");
    }

    const updatedCompany = await prisma.company.update({
      where: { id: companyId },
      data: { name: formData.name, location: formData.location },
    });

    return new Response(JSON.stringify({ success: true, updatedCompany }), {
      status: 200,
    });
  } catch (error: any) {
    console.error("Veritabanı güncelleme hatası:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 },
    );
  }
}
