import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export async function my() {
  const token = cookies().get("next-auth.session-token");
  if (!token) {
    return null;
  }

  const decoded = await decode({
    token: token.value,
    secret: process.env.NEXTAUTH_SECRET as string,
  });

  return decoded;
}
