import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth_options";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const dynamic = "force-dynamic";

const postDetailSchema = z.object({
  blog_key: z.string(),
  // 其他字段的验证规则，如果有的话
});

export async function GET(request: NextRequest) {
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
