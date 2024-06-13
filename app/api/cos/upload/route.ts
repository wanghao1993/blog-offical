import cos from "@/lib/cos";
import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import { NextResponse } from "next/server";
export async function GET(request: Request) {}

export async function POST(request: Request) {
  const body = request.formData;
  console.log("body", body);
  return responseHandler("上传成功", BusinessCode.normal);

  // cos.uploadFiles({
  //   files: []
  // })
}

export async function PUT(request: Request) {}
