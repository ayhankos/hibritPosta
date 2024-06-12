import { NextApiRequest, NextApiResponse } from "next";
import { getUserRoles } from "@/utils/user/getUserRoles";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const roles = await getUserRoles();
    res.status(200).json({ roles });
  } catch (error) {
    console.error("Failed to fetch roles:", error);
    res.status(500).json({ error: "Failed to fetch roles" });
  }
}
