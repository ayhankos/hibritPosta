import prisma from "@/lib/prisma";

export async function postGet() {
  try {
    const post = await prisma.post.findMany({
      where: {
        isStatus: "Bekleniyor",
      },
    });

    return post;
  } catch (error) {
    return [];
  }
}
