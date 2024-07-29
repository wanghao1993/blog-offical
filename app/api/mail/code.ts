import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import connectMongo from "@/lib/mongoose";

export const dynamic = "force-dynamic"; // defaults to auto
import User from "models/user";
export async function post(request: Request) {
  await connectMongo();
  const { searchParams } = new URL(request.url);

  try {
    const res = User.findById(searchParams.get("id"));
    return responseHandler(res);
  } catch (e) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "查询用户信息失败"
    );
  }
}
