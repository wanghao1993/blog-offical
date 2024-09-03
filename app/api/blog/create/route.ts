import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request) {
  await prisma.$connect();
  const body = await request.json();
  try {
    const res = await prisma.post.findUnique({
      where: { blog_key: body.blog_key },
    });

    if (!res) {
      const res = await prisma.post.create({
        data: {
          blog_key: body.blog_key,
          blog_title: body.blog_title,
          views_count: 1,
        },
      });
      return responseHandler(res);
    } else {
      const updateRes = await prisma.post.update({
        where: { blog_key: body.blog_key },
        data: {
          blog_key: body.blog_key,
          blog_title: body.blog_title,
          views_count: res.views_count + 1,
        },
      });
      return responseHandler(updateRes);
    }
  } catch (e) {
    console.log(e);
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "未知异常"
    );
  }
}
