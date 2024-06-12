import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    if (!formData) {
      throw new Error("Form verileri eksik veya hatalı.");
    }

    const yeniPost = await prisma.post.create({
      data: {
        customerName: formData.customerName,
        postalCode: formData.postalCode,
        date: formData.date,
        adres: formData.adres,
        isStatus: formData.isStatus,
        sideOption: formData.sideOption,
        colorOption: formData.colorOption,
        envelopeType: formData.envelopeType,
        brochure: formData.brochure,
        surveyType: formData.surveyType,
        commitment: formData.commitment,
        customerId: formData.customerId,
        file: formData.file,
        postMessage: formData.postMessage,
      },
    });

    return Response.json({ success: true, yeniPost });
  } catch (error) {
    console.error("Veritabanına yazma hatası:", error);
    return Response.json({ success: true, error });
  }
}
