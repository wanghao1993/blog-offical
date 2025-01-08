import MainLayout from "@/Layouts/MainLayout";
import { get } from "@/lib/fetch";
import { AiTypes } from "@/types/ai";
import { Button, Tooltip, QRCode } from "antd";
import Image from "next/image";
import Link from "next/link";
import { QrcodeOutlined } from "@ant-design/icons";
export default async function AiToolsDetail({
  params,
}: {
  params: { id: string };
}) {
  const aiToolDetail = await get<AiTypes.AiTool>(`ai/${params.id}`);
  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl p-4 flex items-center">
        <Image
          src={"/favicon.ico"}
          alt={aiToolDetail.title}
          width={130}
          height={130}
          className="bg-white rounded-lg"
        />
        <div className="ml-4 py-4 flex flex-col justify-between ">
          <h3 className="font-bold text-3xl mb-6">{aiToolDetail.title}</h3>
          <div className="text-lg dark:text-gray-300 text-gray-400 mb-3">
            <p>{aiToolDetail.description}</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href={aiToolDetail.url}
              target="_blank"
              className="text-blue-500 hover:text-blue-700"
            >
              <Button type="primary">前往官网 &gt;</Button>
            </Link>
            <Tooltip
              placement="bottom"
              color={"white"}
              title={
                <>
                  <QRCode value={aiToolDetail.url} />
                </>
              }
            >
              <Button type="primary">
                扫码查看 <QrcodeOutlined />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
