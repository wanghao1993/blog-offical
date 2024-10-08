import { encrypt } from "@/lib/crypto";
import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import { transporter } from "@/lib/mail_server";
import prisma from "@/lib/pg";
import { z } from "zod";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request) {
  const body = await request.json();
  try {
    const info = z.object({
      email: z.string(),
      password: z.string(),
      code: z.string(),
    });
    const validationResult = info.safeParse(body);
    if (validationResult.success) {
      const existingUser = await prisma.user.findUnique({
        where: { email: body.email },
      });

      if (existingUser) {
        return responseHandler(
          null,
          BusinessCode.normal,
          BusinessCode.abnormal,
          "用户已经存在，请直接登录"
        );
      }

      const res = await prisma.email.findMany({
        where: {
          email: body.email,
        },
        orderBy: {
          created_at: "desc",
        },
      });

      if (res[0]) {
        if (+new Date() - +new Date(res[0].created_at as Date) > 60000) {
          return responseHandler(
            null,
            BusinessCode.normal,
            BusinessCode.abnormal,
            "验证码已过期，请重新发送"
          );
        } else if (res[0].code !== body.code) {
          return responseHandler(
            null,
            BusinessCode.normal,
            BusinessCode.abnormal,
            "验证码不正确，请填写正确的验证码。"
          );
        }
      }

      // Create new user
      await prisma.user.create({
        data: {
          name: body.email,
          email: body.email,
          image:
            "https://blog-1302483222.cos.ap-shanghai.myqcloud.com/images.jpg",
          password: encrypt(body.password.toString()),
        },
      });
      return responseHandler("注册成功");
    } else {
      return responseHandler(
        null,
        BusinessCode.normal,
        BusinessCode.abnormal,
        validationResult.error.message
      );
    }
  } catch (e) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "邮件发送失败"
    );
  }
}
