import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import connectMongo from "@/lib/mongoose";

export const dynamic = "force-dynamic"; // defaults to auto
import User from "models/user";
export async function GET(request: Request) {
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

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  console.log(request);

  return Response.json({ product: 1 });
}
