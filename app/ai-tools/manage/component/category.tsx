import { get } from "@/lib/fetch";
import { AiTypes } from "@/types/ai";
import { Table, TableColumnProps, TableProps } from "antd";

export default async function AiCateGory() {
  const list = await get<AiTypes.AiCategory[]>("ai/category");
  const columns: TableColumnProps<AiTypes.AiCategory>[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "ID",
    },
    {
      title: "类名",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "updated_at",
      dataIndex: "updated_at",
      key: "updated_at",
    },
  ];
  return (
    <div>
      <Table<AiTypes.AiCategory>
        rowKey="id"
        pagination={{
          pageSize: 15,
        }}
        columns={columns}
        dataSource={list}
      />
      ;
    </div>
  );
}
