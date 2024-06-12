import prisma from "@/lib/prisma";

export async function postStatusTrue() {
  try {
    const isStatusPost = await prisma.post.findMany({
      where: {
        isStatus: "Gönderildi",
      },
    });

    return isStatusPost;
  } catch (error) {
    return [];
  }
}
