import prisma from "@/lib/prisma";

export async function pricingTypesGet() {
  try {
    const pricingTypes = await prisma.pricingTypes.findMany({
      select: {
        id: true,
        name: true,
        quantitiyStart: true,
        quantitiyEnd: true,
        companyId: true,
        price: true,
        company: {
          select: {
            name: true,
          },
        },
      },
    });

    return pricingTypes;
  } catch (error) {
    return [];
  }
}
