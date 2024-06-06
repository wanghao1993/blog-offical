import cos from "@/lib/cos";
import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import { NextResponse } from "next/server";
export async function GET(request: Request) {}

export async function POST(request: Request) {}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const Bucket = searchParams.get("bucket");
  const Region = searchParams.get("region");
  const Key = searchParams.get("key") || "";

  if (Bucket && Region) {
    const res = await cos.deleteObject({
      Bucket,
      Region,
      Key,
    });
    if (res.statusCode && res.statusCode >= 200) {
      return responseHandler("删除成功");
    } else {
      return responseHandler(
        "删除失败",
        res.statusCode,
        BusinessCode.badRequest
      );
    }
  } else {
    return responseHandler(null, 200, BusinessCode.badRequest);
  }
}

export async function PUT(request: Request) {}
