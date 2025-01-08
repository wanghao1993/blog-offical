import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { nextUrl } = request;
  const searchParams = nextUrl.searchParams;
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const category_id = searchParams.get("category_id");
  const title = searchParams.get("title");
  try {
    const pageNumber = page ? parseInt(page, 10) : 1;
    const pageSize = limit ? parseInt(limit, 10) : 10;
    const skip = (pageNumber - 1) * pageSize;
    const take = pageSize;
    const filter: any = {};

    if (title) {
      filter.title = {
        contains: title,
      };
    }

    if (category_id) {
      filter.category_id = +category_id;
    }
    const list = await prisma.aiTools.findMany({
      skip,
      take,
      orderBy: {
        updated_at: "desc",
      },
      include: {
        category: true,
      },
      where: filter,
    });

    const total = await prisma.aiTools.count({
      where: filter,
    });
    return responseHandler({
      list: list,
      total: total,
    });
  } catch (error: any) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      error.message || "未知异常"
    );
  }
}
