import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { decrypt, encrypt } from "@/lib/crypto";
import { AuthOptions } from "next-auth";
import prisma from "./pg";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@/prisma/generated/client";

const Prisma = new PrismaClient();
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(Prisma),
  secret: process.env.SECRET_KEY,
  debug: process.env.NODE_ENV === "development",
  providers: [
    GitHubProvider({
      clientId: process.env.GIT_CLIENT_ID as string,
      clientSecret: process.env.GIT_CLIENT_SECRET as string,
      httpOptions: {
        timeout: 100000,
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_KEY as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      httpOptions: {
        timeout: 100000,
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },

  pages: {
    signIn: "/",
  },
};
