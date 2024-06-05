import cos from "@/lib/cos";
import { responseHandler } from "@/lib/fetch_utils";
export async function GET(request: Request) {
  const { Buckets } = await cos.getService();
  return responseHandler(Buckets);
}

export async function POST(request: Request) {}

export async function DELETE(request: Request) {}

export async function PUT(request: Request) {}
