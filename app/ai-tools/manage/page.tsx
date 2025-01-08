import MainLayout from "@/Layouts/MainLayout";
import { Tabs, TabsProps } from "antd";
import AiCateGory from "./component/category";
import AiToolsList from "./component/list";

export default function AiToolsManage() {
  const items: TabsProps["items"] = [
    {
      key: "category",
      label: "分类",
      children: <AiCateGory />,
    },
    {
      key: "list",
      label: "列表",
      children: <AiToolsList />,
    },
  ];
  return (
    <div className="max-w-[1400px] mx-auto">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
