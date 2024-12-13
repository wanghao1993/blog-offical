import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { decrypt, encrypt } from "@/lib/crypto";
import { AuthOptions } from "next-auth";
import prisma from "./pg";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@/prisma/generated/client";

const Prisma = new PrismaClient();
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(Prisma),
  secret: process.env.SECRET_KEY,
  debug: true,
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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "用户名",
          type: "text",
          placeholder: "请输入用户名",
        },
        password: {
          label: "密码",
          type: "password",
          placeholder: "请输入密码",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw Error("用户不存在，请检查邮箱是否正确");
        } else {
          if (credentials.password === decrypt(user?.password as string)) {
            return user as any;
          } else {
            throw Error("密码不正确，请重新输入");
          }
        }
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
