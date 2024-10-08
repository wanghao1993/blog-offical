import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import { transporter } from "@/lib/mail_server";
import prisma from "@/lib/pg";
import { z } from "zod";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request) {
  const body = await request.json();
  try {
    const email = z.string();
    const validationResult = email.safeParse(body.email);
    if (validationResult.success) {
      const code = Math.random().toString().substring(2, 8);
      const mailContent = {
        // 发件人 邮箱  '昵称<发件人邮箱>'
        from: `Isaac Wang Blog-<2682265436@qq.com>`,
        // 主题
        subject: "注册验证码",
        // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
        to: body.email,
        //这里可以添加html标签
        html: `<b>您的激活验证码为：${code}, 请60秒内有效，请谨慎保管。</b>`,
      };
      const isSendSuccess: boolean = await new Promise((resolve, reject) => {
        transporter.sendMail(mailContent, async (err, info) => {
          if (err) {
            reject(false);
          } else {
            resolve(true);
          }
        });
      });

      if (isSendSuccess) {
        const res = await prisma.email.create({
          data: {
            code,
            email: body.email,
            expired_at: new Date(), // 有效期60秒
            status: 1,
          },
        });
        return responseHandler(res);
      } else {
        return responseHandler(
          null,
          BusinessCode.normal,
          BusinessCode.abnormal,
          "发送邮件失败"
        );
      }
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
