import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    if (!formData) {
      throw new Error("Form verileri eksik veya hatalı.");
    }

    const newPricing = await prisma.pricingTypes.create({
      data: {
        name: formData.name,
        quantitiyStart: parseInt(formData.quantitiyStart),
        quantitiyEnd: parseInt(formData.quantitiyEnd),
        price: parseFloat(formData.price),
        company: {
          connect: { id: formData.companyId },
        },
      },
    });

    return new Response(JSON.stringify({ success: true, newPricing }), {
      status: 200,
    });
  } catch (error: any) {
    console.error("Veritabanına yazma hatası:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
