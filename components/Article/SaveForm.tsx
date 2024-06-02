import React from "react";
import type { FormProps } from "antd";
import { Button, Upload, Form, Input, Select } from "antd";

type FieldType = {
  categories: string[];
  tags: string[];
  coverImg?: string;
  abstract: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const tagList = ["css", "后端"];
const categories = ["前端", "后端"];

export default function ArticleForm(props: { cancelFn: () => void }) {
  return (
    <Form
      className="w-full"
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="分类"
        name="categories"
        rules={[{ required: true, message: "请选择分类" }]}
      >
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="请选择分类"
          options={categories.map((item) => ({ label: item, value: item }))}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="标签"
        name="tags"
        rules={[{ required: true, message: "请选择标签" }]}
      >
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="请选择标签"
          options={tagList.map((item) => ({ label: item, value: item }))}
        />
      </Form.Item>

      <Form.Item<FieldType> label="封面图片" name="coverImg">
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-text">点击或拖拽上传，建议尺寸为192*128px</p>
        </Upload.Dragger>
      </Form.Item>

      <Form.Item<FieldType>
        label="摘要"
        name="abstract"
        rules={[{ required: true, message: "请选择标签" }]}
      >
        <Input.TextArea placeholder="请输入摘要" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button ghost danger onClick={() => props.cancelFn()} className="mr-2">
          取消
        </Button>
        <Button type="primary" htmlType="submit">
          确认发布
        </Button>
      </Form.Item>
    </Form>
  );
}
