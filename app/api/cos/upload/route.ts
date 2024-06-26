import cos from "@/lib/cos";
import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import COS from "cos-nodejs-sdk-v5";
import fs from "fs";
import { writeFile } from "fs/promises";
import path from "path";
export async function GET(request: Request) {}

export async function POST(request: Request) {
  const formData = await request.formData();

  const files: File[] = formData.getAll("files") as unknown as File[];
  const region = formData.get("region");
  const bucket = formData.get("bucket");

  const uploadDir = path.join(process.cwd(), "/public/uploads");

  // 创建upload的目录
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  // 村粗到本地
  let names = files.map((item) => item.name);

  for (let i = 0; i < files.length; i++) {
    const file = files[i] as File;
    const fileBuffer = await file.arrayBuffer();
    await writeFile(`${uploadDir}/${file.name}`, Buffer.from(fileBuffer));
  }
  // 上传

  try {
    const res = await cos.uploadFiles({
      files: files.map((item) => ({
        Bucket: bucket,
        Region: region,
        Key: item.name,
        FilePath: path.join(uploadDir, item.name),
      })) as COS.UploadFileItemParams[],
    });

    const successList = res.files.map(
      (item, index) =>
        `https://${bucket}.cos.${region}.myqcloud.com/${encodeURIComponent(
          names[index]
        )}`
    );

    // 上传问后删除存储的文件
    fs.promises.readdir(uploadDir).then((files) => {
      const deletePromises = files.map((file) => {
        const filePath = path.join(uploadDir, file);
        return fs.promises.unlink(filePath);
      });

      Promise.all(deletePromises).then(() => {
        console.log("All files deleted successfully");
      });
    });

    return responseHandler(successList, BusinessCode.normal);
  } catch (err: any) {
    return responseHandler(err.message, 200, BusinessCode.normal);
  }
}

export async function PUT(request: Request) {}
