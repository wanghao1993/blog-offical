import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { decrypt, encrypt } from "@/lib/crypto";
import { AuthOptions } from "next-auth";
import prisma from "./pg";

export const authOptions: AuthOptions = {
  secret: process.env.SECRET_KEY,
  debug: true,
  providers: [
    GitHubProvider({
      clientId: process.env.GIT_CLIENT_ID as string,
      clientSecret: process.env.GIT_CLIENT_SECRET as string,
      httpOptions: {
        timeout: 100000,
      },
      async profile(profile) {
        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: profile.email },
          });

          if (existingUser) {
            if (
              existingUser.image !== profile.avatar_url ||
              existingUser.name !== (profile.name || profile.login)
            ) {
              return await prisma.user.update({
                where: { email: profile.email },
                data: {
                  name: profile.name || profile.login,
                  image: profile.avatar_url as string,
                },
              });
            } else {
              return existingUser as any;
            }
          }

          // Create new user
          const res = await prisma.user.create({
            data: {
              name: profile.name || profile.login,
              email: profile.email,
              image: profile.avatar_url,
              password: encrypt(profile.id.toString()), // Use GitHub ID as default password
            },
          });

          return res as any;
        } catch (e: any) {
          console.log(e.message);
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID as string,
    //   clientSecret: process.env.GOOGLE_SECRET_KEY as string,
    //   httpOptions: {
    //     timeout: 100000,
    //   },
    // }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "用户名",
    //       type: "text",
    //       placeholder: "请输入用户名",
    //     },
    //     password: {
    //       label: "密码",
    //       type: "password",
    //       placeholder: "请输入密码",
    //     },
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     if (!credentials?.email || !credentials?.password) {
    //       return null;
    //     }
    //     await connectMongo();

    //     const user = await User.findOne({ email: credentials.email });

    //     if (!user) {
    //       throw Error("用户不存在，请检查邮箱是否正确");
    //     } else {
    //       if (credentials.password === decrypt(user?.password as string)) {
    //         return user;
    //       } else {
    //         throw Error("密码不正确，请重新输入");
    //       }
    //     }
    //   },
    // }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      session.user.id = user?.id;
      return session;
    },
    jwt(params) {
      return params.token;
    },
  },

  pages: {
    signIn: "/",
  },
};
