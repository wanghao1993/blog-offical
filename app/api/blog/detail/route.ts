import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { PostTypes } from "@/types/post";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/lib/auth_options";
import { message } from "antd";
import { z } from "zod";

export const dynamic = "force-dynamic";

const postDetailSchema = z.object({
  blog_key: z.string(),
  // 其他字段的验证规则，如果有的话
});

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!key) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "无 key"
    );
  }
  try {
    const res = await prisma.post.findUnique({
      where: { blog_key: key },
    });
    if (!res) {
      return responseHandler(
        null,
        BusinessCode.normal,
        BusinessCode.abnormal,
        "key 值错误"
      );
    }
    return responseHandler(res);
  } catch (error: any) {
    console.error("GET 请求错误：", error);
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "未知异常"
    );
  }
}

export async function POST(req: Request, res: Response) {
  const rawBody = await req.json();
  const validationResult = postDetailSchema.safeParse(rawBody);
  if (!validationResult.success) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "数据格式错误"
    );
  }
  const body = validationResult.data;
  const session = await getServerSession(authOptions);
  const post = await prisma.post.findUnique({
    where: { blog_key: body.blog_key },
  });
  if (post && session?.user) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email as string },
      });
      if (!user) {
        return responseHandler(
          null,
          BusinessCode.normal,
          BusinessCode.abnormal,
          "用户查询错误"
        );
      }
      const likes_count = post.likes_count || [];
      const idx = likes_count.findIndex((item) => item === user.id);
      if (idx > -1) {
        likes_count.splice(idx, 1);
      } else {
        likes_count.push(user.id);
      }
      const updatePost = await prisma.post.update({
        where: { blog_key: body.blog_key },
        data: { likes_count },
      });
      return responseHandler(updatePost);
    } catch (error: any) {
      console.error("POST 请求错误：", error);
      return responseHandler(
        null,
        BusinessCode.normal,
        BusinessCode.abnormal,
        error.message || "未知异常"
      );
    }
  } else {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "文章不存在"
    );
  }
}
