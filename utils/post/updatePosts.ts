import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function updatePosts(selectedRowsIds: number[]) {
  try {
    const result = await prisma.post.updateMany({
      where: {
        id: {
          in: selectedRowsIds,
        },
      },
      data: {
        isStatus: "Gönderildi",
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(`Could not update posts: ${error.message}`);
  }
}
