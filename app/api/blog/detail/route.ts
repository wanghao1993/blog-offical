import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { PostTypes } from "@/types/post";
import { getSession } from "next-auth/react";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key");
  if (!key) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "无key"
    );
  } else {
    try {
      const res = await prisma.post.findUnique({
        where: { blog_key: key },
      });

      if (!res) {
        return responseHandler(
          null,
          BusinessCode.normal,
          BusinessCode.abnormal,
          "key值错误"
        );
      } else {
        return responseHandler(res);
      }
    } catch (e) {
      return responseHandler(
        null,
        BusinessCode.normal,
        BusinessCode.abnormal,
        "未知异常"
      );
    }
  }
}

export async function POST(request: Request) {
  const body: PostTypes.PostDetail = await request.json();
  const session = await getSession();
  const post = await prisma.post.findUnique({
    where: {
      blog_key: body.blog_key,
    },
  });

  if (post && session?.user.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    const likes_count = post.likes_count;

    if (user) {
      const idx = likes_count.findIndex((item) => item === user.id);
      if (idx > -1) {
        likes_count.splice(idx, 1);
      } else {
        likes_count.push(user.id);
      }
      const updatePost = await prisma.post.update({
        where: {
          blog_key: body.blog_key,
        },
        data: {
          likes_count,
        },
      });

      return responseHandler(updatePost);
    }
  }
}
