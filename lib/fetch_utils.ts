import { NextResponse } from "next/server";

export const StatusMsg = {
  200: "Success",
  404: "Not Found",
  500: "Server Error",
};

export enum BusinessCode {
  normal = 200,
  abnormal = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  internalError = 500,
  badRequest = 400,
}

export function responseHandler<T>(
  data: T,
  status = 200,
  code = BusinessCode.normal,
  message = StatusMsg[200]
) {
  return NextResponse.json({ message, data, code }, { status });
}
