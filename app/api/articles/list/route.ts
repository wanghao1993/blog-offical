import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import connectMongo from "@/lib/mongoose";
import Article from "models/article";
export async function GET(request: Request) {
  await connectMongo();
  const { searchParams } = new URL(request.url);

  const { page, pageSize } = searchParams as unknown as {
    page: number;
    pageSize: number;
    category: string[];
    tags: string[];
  };

  try {
    const totalCount = await Article.countDocuments();
    const list = await Article.find().limit(+pageSize).sort({ _id: -1 }).exec();

    console.log("xxx");
    return responseHandler({
      list,
      totalCount,
      page,
      pageSize,
    });
  } catch (err: any) {
    return responseHandler(null, 200, BusinessCode.abnormal, err.message);
  }
}

export async function POST(request: Request) {}
