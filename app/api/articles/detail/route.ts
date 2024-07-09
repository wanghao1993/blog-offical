import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import connectMongo from "@/lib/mongoose";
import Article from "models/article";

export async function GET(request: Request) {
  await connectMongo();
  const { searchParams } = new URL(request.url);
  try {
    const res = await Article.findById(searchParams.get("id"));
    const count = res.viewsCount;
    res.viewsCount = count + 1;
    const r = await res.save();
    return responseHandler(r);
  } catch (e: any) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "文章不存在，检查是否删除"
    );
  }
}
