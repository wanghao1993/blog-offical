import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import connectMongo from "@/lib/mongoose";
import Article from "models/article";
export async function POST(request: Request) {
  await connectMongo();
  const data = await request.json();
  try {
    if (data.id) {
      const res = await Article.findByIdAndUpdate<typeof Article>({
        _id: data.id
      }, {
        $set: {
          ...data
        }
      });
      return responseHandler(res);
    } else {
      const res = await Article.create<typeof Article>(data);
      return responseHandler(res);
    }
   
  } catch (err: any) {
    return responseHandler(null, 200, BusinessCode.abnormal, err.message);
  }
}
