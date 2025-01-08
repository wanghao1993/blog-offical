import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import prisma from "@/lib/pg";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "ID is required"
    );
  }
  try {
    const detail = await prisma.aiTools.findUnique({
      where: { id: Number(id) },
    });
    return responseHandler(detail);
  } catch (error: any) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      error.message || "未知异常"
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      "ID is required"
    );
  }
  try {
    const detail = await prisma.aiTools.delete({
      where: { id: Number(id) },
    });
    return responseHandler(detail);
  } catch (error: any) {
    return responseHandler(
      null,
      BusinessCode.normal,
      BusinessCode.abnormal,
      error.message || "未知异常"
    );
  }
}
