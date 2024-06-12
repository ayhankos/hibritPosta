import prisma from "@/lib/prisma";

export async function uploadFileGet() {
  try {
    const uploadedFile = await prisma.uploadFile.findMany();
    return uploadedFile;
  } catch (error) {
    return [];
  }
}
