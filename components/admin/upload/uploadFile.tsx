import React, { useState } from "react";
import {
  Button,
  Form,
  Modal,
  Select,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
import { CosTypes } from "@/types/cos";
import { post } from "@/lib/fetch";

const UploadFileModal = (props: {
  bucketList: CosTypes.BucketItem[];
  bucket: string;
  uploadSuccess: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  type FieldType = {
    bucket: string;
    filesLists: UploadFile[];
  };

  const onFinish = (values: FieldType) => {
    const region = props.bucketList.find((item) => item.Name === values.bucket)
      ?.Location as string;

    const formData = new FormData();
    formData.append("bucket", values.bucket);
    formData.append("region", region);
    fileList.forEach((item) => {
      formData.append("file", item.originFileObj as Blob);
    });
    setUploading(true);
    post("cos/upload", formData)
      .then(() => {
        message.success("上传成功");
        setFileList([]);
        form.resetFields();
        setIsModalOpen(false);
        props.uploadSuccess();
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const onFinishFailed = () => {};

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const uploadProps: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    onChange: ({ fileList: newFileList }) => {
      setFileList(newFileList);
    },
    beforeUpload: () => {
      return false;
    },
    multiple: true,
    fileList,
  };

  const [form] = Form.useForm<FieldType>();

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        上传文件
      </Button>
      <Modal
        destroyOnClose
        footer={null}
        title="上传文件"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          preserve={false}
          initialValues={{ bucket: props.bucket }}
          name="basic"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="桶名称"
            name="bucket"
            rules={[{ required: true, message: "请选择桶名称" }]}
          >
            <Select
              options={props.bucketList}
              fieldNames={{ value: "Name", label: "Name" }}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="文件"
            name="filesLists"
            rules={[{ required: true, message: "请选择上传的文件" }]}
          >
            <Upload {...uploadProps}>
              <Button>+ 添加文件</Button>
            </Upload>
          </Form.Item>

          <Form.Item<FieldType>>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={uploading}>
                {uploading ? "上传中" : "开始上传"}
              </Button>
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UploadFileModal;
