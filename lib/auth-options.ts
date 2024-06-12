import { NextAuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email || "" },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordValid) {
          return null;
        }

        const token = {
          id: user.id.toString(),
          role: user.role,
          email: user.email,
          username: user.username,
        };
        const accessToken = jwt.sign(
          token,
          process.env.NEXTAUTH_SECRET as Secret,
          {
            expiresIn: "1d",
          },
        );
        return {
          id: user.id.toString(),
          username: user.username,
          email: user.email,
          role: user.role,
          companyId: user.companyId,
          printingCenterId: user.printingCenterId,
          accessToken,
        };
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.email = token.email as string;
        session.user.username = token.username as string;
        session.user.companyId = token.companyId as number | null;
      }
      console.log(session);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
        token.username = user.username;
        token.companyId = user.companyId;
      }

      return token;
    },
  },
};

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      username: string;
      companyId: number | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    username: string;
    companyId: number | null;
  }

  interface JWT {
    id: string;
    role: string;
    email: string;
    username: string;
  }
}
