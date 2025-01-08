import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";

export async function GET() {
  try {
    const list = await prisma.aiToolsCategory.findMany({
      orderBy: {
        updated_at: "desc",
      },
    });
    return responseHandler(list);
  } catch (error: any) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      error.message || "未知异常"
    );
  }
}
