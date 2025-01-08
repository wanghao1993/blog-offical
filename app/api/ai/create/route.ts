import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { NextRequest } from "next/server";
import { z } from "zod";
const postDetailSchema = z.object({
  category_id: z.number(),
  title: z.string().max(20, "标题长度不能超过20个字符"),
  content: z.string(),
  url: z.string().url("不合法的访问地址"),
  logo_url: z.string().url("不合法的logo地址"),
  description: z.string(),
  id: z.number().optional(),
  // 其他字段的验证规则，如果有的话
});
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = postDetailSchema.safeParse(body);
    if (!validationResult.success) {
      return responseHandler(
        null,
        BusinessCode.normal,
        BusinessCode.abnormal,
        validationResult.error.message || "数据格式错误"
      );
    }
    if (body.id) {
      const res = await prisma.aiTools.update({
        where: {
          id: body.id,
        },
        data: body,
      });
      return responseHandler(res);
    }
    const res = await prisma.aiTools.create({
      data: body,
    });
    return responseHandler(res);
  } catch (error: any) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      error.message || "未知异常"
    );
  }
}
