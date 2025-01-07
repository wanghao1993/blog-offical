import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { AiTypes } from "@/types/ai";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  try {
    const allCategory = await prisma.aiToolsCategory.findMany();
    const allCategoryMap: Record<number, string> = {};
    allCategory.forEach((item) => {
      allCategoryMap[item.id] = item.title;
    });
    const data = await prisma.aiTools.findMany();
    const allData: AiTypes.AiTools = {};
    data.forEach((item) => {
      const title = allCategoryMap[item.category_id];
      if (allData[title]) {
        allData[title].push({
          ...item,
          category: title,
        });
      } else {
        allData[title] = [
          {
            ...item,
            category: title,
          },
        ];
      }
    });
    return responseHandler(allData);
  } catch (error: any) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      error.message || "未知异常"
    );
  }
}
