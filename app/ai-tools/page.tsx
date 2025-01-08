import { get } from "@/lib/fetch";
import { AiTypes } from "@/types/ai";
import { Col, Row } from "antd";
import { Sidebar } from "./component/siderbar";
import { AIToolCard } from "./component/aitoolcard";
import Link from "next/link";

async function getAllAiTools() {
  try {
    return await get<AiTypes.AiTools>("ai");
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default async function ToolsHomePage() {
  const data = await getAllAiTools();
  const menuData = Object.keys(data).map((item) => ({
    title: item,
    id: -1,
    icon: "",
  }));
  const allTools = Object.values(data).flat();
  menuData.forEach((item) => {
    item.id =
      allTools.find((tool) => tool.category === item.title)?.category_id || -1;
  });
  return (
    <div className="max-w-[1920px] mx-auto relative">
      <div className="lg:flex">
        <Sidebar menuItems={menuData} />
        <main className="flex-1 overflow-auto lg:ml-[220px]">
          {menuData.map((category) => (
            <div
              key={category.id}
              id={"category-" + category.id}
              className="mb-6 px-4"
            >
              <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
              <Row gutter={[16, 16]}>
                {data[category.title].map((tool) => (
                  <Col key={tool.id} sm={24} md={12} lg={8} xl={6}>
                    <Link
                      href={`/ai-tools/${tool.id}`}
                      title={tool.title}
                      className="text-[inherit] hover:text-[#1890ff]"
                    >
                      <AIToolCard {...tool} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
