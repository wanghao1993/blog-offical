"use client";

import { get } from "@/lib/fetch";
import { AiTypes } from "@/types/ai";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";

export default function Filter({
  submitCb,
}: {
  submitCb: (data?: any) => void;
}) {
  const [categories, setCategories] = useState<AiTypes.AiCategory[]>([]);
  const getData = () => {
    get<AiTypes.AiCategory[]>("ai/category").then((list) => {
      setCategories(list);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const [form] = Form.useForm();
  return (
    <Form layout="inline" form={form}>
      <Form.Item label="" name={"category_id"}>
        <Select
          allowClear
          placeholder="请选择分类"
          options={categories}
          fieldNames={{ value: "id", label: "title" }}
        />
      </Form.Item>
      <Form.Item label="" name={"title"}>
        <Input placeholder="请输入名称" allowClear />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          onClick={() => {
            const values = form.getFieldsValue();
            submitCb(values);
          }}
        >
          <SearchOutlined /> 查询
        </Button>
      </Form.Item>
    </Form>
  );
}
