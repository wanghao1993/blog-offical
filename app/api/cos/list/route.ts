import cos from "@/lib/cos";
import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const Bucket = searchParams.get("bucket");
  const Region = searchParams.get("region");
  const MaxKeys = Number(searchParams.get("pageSize")) || 20;

  if (Bucket && Region) {
    const res: any = await cos.getBucket({
      Bucket,
      Region,
      MaxKeys,
    });

    res.Contents.forEach((item: Record<string, string>) => {
      item[
        "url"
      ] = `https://${Bucket}.cos.${Region}.myqcloud.com/${encodeURIComponent(
        item.Key
      )}`;
    });

    return responseHandler(res);
  } else {
    return responseHandler(null, 200, BusinessCode.badRequest);
  }
}
