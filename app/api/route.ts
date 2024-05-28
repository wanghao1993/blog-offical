export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return Response.json({ product: 1 });
}
