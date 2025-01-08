"use client";

import { get, post } from "@/lib/fetch";
import { AiTypes } from "@/types/ai";
import { Form, Modal, Input, Button, Select } from "antd";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

interface ModalHandle {
  open: () => void;
  close: () => void;
}
interface CreateToolModalProps {
  cb: () => void;
  id?: number;
}

export const CreateToolModal = forwardRef<ModalHandle, CreateToolModalProps>(
  ({ cb, id }, ref) => {
    const [submitting, setSubmitting] = useState(false);
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
      setSubmitting(true);
      post("ai/create", {
        ...values,
        id,
      }).then(() => {
        setOpen(false);
        setSubmitting(false);
        cb();
      });
    };

    const [category, setCateGory] = useState<AiTypes.AiCategory[]>([]);
    const getCate = () => {
      get<AiTypes.AiCategory[]>("ai/category").then((res) => {
        setCateGory(res);
      });
    };
    const getDetail = () => {
      setSubmitting(true);
      get<AiTypes.AiTool>(`ai/${id}`).then((res) => {
        form.setFieldsValue(res);
        setSubmitting(false);
      });
    };
    useEffect(() => {
      getCate();
    }, [id]);

    useEffect(() => {
      if (id) {
        getDetail();
      }
    }, [id]);

    const [open, setOpen] = useState(false);
    useImperativeHandle(ref, () => ({
      open: () => {
        setOpen(true);
      },
      close: () => {
        setOpen(false);
      },
    }));

    useEffect(() => {
      if (!open) {
        form.resetFields();
      }
    }, [open]);
    return (
      <div>
        <Modal
          open={open}
          title="Create Tool"
          footer={null}
          onCancel={() => setOpen(false)}
        >
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            variant="filled"
          >
            <Form.Item
              label="分类"
              name="category_id"
              rules={[
                { required: true, message: "Please select category_id!" },
              ]}
            >
              <Select
                options={category}
                fieldNames={{ value: "id", label: "title" }}
                allowClear
                showSearch
              />
            </Form.Item>
            <Form.Item
              label="工具名称"
              name="title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input allowClear />
            </Form.Item>
            <Form.Item
              label="Logo"
              name="logo_url"
              rules={[
                { required: true, message: "Please input the logo URL!" },
              ]}
            >
              <Input allowClear />
            </Form.Item>
            <Form.Item
              label="链接"
              name="url"
              rules={[{ required: true, message: "Please input the link!" }]}
            >
              <Input allowClear />
            </Form.Item>
            <Form.Item
              label="描述"
              name="description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <Input.TextArea allowClear />
            </Form.Item>
            <Form.Item
              label="详情内容"
              name="content"
              rules={[
                {
                  required: true,
                  message: "Please input the content details!",
                },
              ]}
            >
              <Input.TextArea allowClear />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={submitting}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
);
