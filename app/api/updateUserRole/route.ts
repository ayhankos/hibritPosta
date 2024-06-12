import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: Request) {
  try {
    const formData = await request.json();
    const username = formData.username;
    if (!formData) {
      throw new Error("Form verileri eksik veya hatalı.");
    }

    const updatedUserRole = await prisma.user.update({
      where: { username: username },
      data: { role: formData.role, companyId: formData.companyId },
    });

    return new Response(JSON.stringify({ success: true, updatedUserRole }), {
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
