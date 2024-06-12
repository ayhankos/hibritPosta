import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    if (!formData) {
      throw new Error("Form verileri eksik veya hatalı.");
    }

    const hashedPassword = await bcrypt.hash(formData.password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: formData.username,
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
        role: "UNASSIGNED_USER",
      },
    });

    return Response.json({ success: true, newUser });
  } catch (error) {
    console.error("Veritabanına yazma hatası:", error);
    return Response.json({ success: true, error });
  }
}
