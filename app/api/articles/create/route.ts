import cos from "@/lib/cos";
import { BusinessCode, responseHandler } from "@/lib/fetch_utils";
import connectMongo from "@/lib/mongoose";
import Article from "models/article";
export async function GET(request: Request) {}

export async function POST(request: Request) {
  const db = await connectMongo();
  const data = request.body;
  console.log(data);
  return responseHandler("ok");
  // Article.create<typeof Article>({
  //   title: "222",
  // })
  //   .then((user) => {
  //     console.log("User created:", user);
  //   })
  //   .catch((err) => {
  //     console.error("Error creating user:", err);
  //   });
}
