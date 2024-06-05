import cos from "@/lib/cos";
import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const Bucket = searchParams.get("bucket");
  const Region = searchParams.get("region");
  const Marker = searchParams.get("marker") || "";
  const MaxKeys = Number(searchParams.get("pageSize")) || 20;

  if (Bucket && Region) {
    const res: any = await cos.getBucket({
      Bucket,
      Region,
      Marker,
      MaxKeys,
    });
    let count = 0;

    await new Promise((resolve) => {
      for (let i = 0; i < res.Contents.length; i++) {
        let item = res.Contents[i];

        cos.getObjectUrl(
          {
            Bucket,
            Region,
            Key: item.Key,
            Sign: true,
          },
          (err, data) => {
            count++;
            if (count === res.Contents.length) {
              resolve(true);
            }
            if (err) {
              throw Error(err.message);
            } else {
              item["url"] = data.Url;
            }
          }
        );
      }
    });

    return responseHandler(res);
  } else {
    return responseHandler(null, 200, BusinessCode.badRequest);
  }
}

export async function POST(request: Request) {}

export async function DELETE(request: Request) {}

export async function PUT(request: Request) {}
