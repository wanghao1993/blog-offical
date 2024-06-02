export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  console.log(request);

  return Response.json({ product: 1 });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  console.log(request);

  return Response.json({ product: 1 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  console.log(request);

  return Response.json({ product: 1 });
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  console.log(request);

  return Response.json({ product: 1 });
}
