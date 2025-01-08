import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { AiTypes } from "@/types/ai";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const allCategory = await prisma.aiToolsCategory.findMany();
    const allCategoryMap: Record<number, string> = {};
    allCategory.forEach((item) => {
      allCategoryMap[item.id] = item.title;
    });
    const data = await prisma.aiTools.findMany({
      include: {
        category: true,
      },
    });
    const allData: AiTypes.AiTools = {};
    data.forEach((item) => {
      const title = allCategoryMap[item.category_id];
      if (allData[title]) {
        allData[title].push(item);
      } else {
        allData[title] = [item];
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

// export async function POST() {
//   try {
//     const data = await prisma.aiTools.findMany();
//     const updatePromises = data.map((item) =>
//       prisma.aiTools.update({
//         where: { id: item.id },
//         data: {
//           logo_url: `https://blog-offical-1302483222.cos.ap-guangzhou.myqcloud.com/images/${encodeURI(
//             item.title
//           )}.png`,
//         }, // Replace "new_logo_url" with the actual URL
//       })
//     );
//     await Promise.all(updatePromises);
//     return responseHandler({ message: "All logo URLs updated successfully" });
//   } catch (error: any) {
//     return responseHandler(
//       null,
//       BusinessCode.normal,
//       BusinessCode.abnormal,
//       error.message || "未知异常"
//     );
//   }
// }
