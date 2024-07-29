import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "models/user";
import connectMongo from "@/lib/mongoose";
import { decrypt, encrypt } from "@/lib/crypto";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    secret: process.env.SECRET_KEY,
    // adapter: PrismaAdapter(MongoPrisma as PrismaClient) as Adapter,
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
            await connectMongo();
  
            const existingUser = await User.findOne({ email: profile.email });
  
            if (existingUser) {
              // Update existing user
              const res = await User.findByIdAndUpdate(existingUser._id, {
                name: profile.name || profile.login,
                image: profile.avatar_url,
                updated_at: Date.now(),
              });
              return existingUser;
            }
  
            // Create new user
            const newUser = new User({
              name: profile.name || profile.login,
              email: profile.email,
              image: profile.avatar_url,
              password: encrypt(profile.id.toString()), // Use GitHub ID as password
              created_at: Date.now(),
              updated_at: Date.now(),
            });
  
            await newUser.save();
  
            return newUser;
          } catch (e: any ) {
            console.log(e.message);
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET_KEY as string,
        httpOptions: {
          timeout: 100000,
        },
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
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
            return null
          }
          await connectMongo();
  
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw Error('用户不存在，请检查邮箱是否正确')
          } else {
            if (credentials.password ===  decrypt(user?.password as string)) {
              return user
            } else {
              throw Error('密码不正确，请重新输入')
            }
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
      maxAge: 2 * 24 * 60 * 60,
    },
    callbacks: {
      session: async (data: { session: any; }) => {
        return data.session;
      },
    },
  
    pages: {
      signIn: "/",
    },
  }