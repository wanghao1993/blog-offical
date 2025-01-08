"use client";

import { get, del } from "@/lib/fetch";
import { AiTypes } from "@/types/ai";
import {
  Button,
  Popconfirm,
  Spin,
  Table,
  TableColumnProps,
  TableProps,
  Tooltip,
} from "antd";
import { useEffect, useRef, useState } from "react";
import Filter from "./filter";
import Image from "next/image";
import dayjs from "dayjs";
import { CreateToolModal } from "./createModal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
export default function AiToolsList() {
  const [id, setId] = useState<number | undefined>(undefined);
  const columns: TableColumnProps<AiTypes.AiTool>[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "ID",
    },
    {
      title: "分类",
      dataIndex: "category",
      key: "category",
      width: 120,
      render: (_) => _.title,
    },
    {
      title: "工具名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "链接",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "介绍",
      dataIndex: "description",
      key: "description",
      width: 300,
      render: (_) => (
        <Tooltip title={_}>
          <div className="line-clamp-2 ">{_}</div>
        </Tooltip>
      ),
    },
    {
      title: "图像",
      dataIndex: "logo_url",
      key: "logo_url",
      width: 60,
      render: (_) => <Image src={_} width={60} height={60} alt={_} />,
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
      render: (_) => dayjs(_).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "updated_at",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (_) => dayjs(_).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "操作",
      dataIndex: "id",
      key: "op",
      width: 100,
      fixed: "right",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            size="small"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => {
              setId(record.id);
              CreateToolModalRef.current.open();
            }}
          ></Button>
          <Popconfirm
            title="Delete the Tool?"
            description="Are you sure to delete this Tool?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              del(`ai/${record.id}`).then(() => {
                getList();
              });
            }}
          >
            <Button
              type="primary"
              size="small"
              shape="circle"
              icon={<DeleteOutlined />}
            ></Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const [list, setList] = useState<AiTypes.AiTool[]>([]);
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  let searchParams: any;

  const getList = (data?: { category_id: string; title: string }) => {
    searchParams = searchParams || data;
    if (data) {
      setCurrent(1);
    }
    const params: {
      page: number;
      limit: number;
      category_id?: string;
      title?: string;
    } = {
      page: current,
      limit: size,
    };
    if (searchParams?.category_id) {
      params["category_id"] = searchParams.category_id;
    }
    if (searchParams?.title) {
      params["title"] = searchParams.title;
    }
    setLoading(true);
    get<{
      list: AiTypes.AiTool[];
      total: number;
    }>("ai/list", params)
      .then((list) => {
        setList(list.list);
        setTotal(list.total);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getList();
  }, [current, size]);

  const CreateToolModalRef = useRef<any>();
  return (
    <div>
      <Spin spinning={loading}>
        <div className="flex justify-between">
          <Filter submitCb={getList} />
          <Button
            type="primary"
            onClick={() => {
              setId(undefined);
              CreateToolModalRef.current.open();
            }}
          >
            + 添加工具
          </Button>
        </div>
        <Table<AiTypes.AiTool>
          rowKey="id"
          pagination={{
            pageSize: 15,
            total,
            current,
          }}
          scroll={{ x: 1200 }}
          columns={columns}
          dataSource={list}
          onChange={({ current, pageSize }) => {
            setCurrent(current || 1);
            setSize(pageSize || 10);
          }}
        />
      </Spin>
      <CreateToolModal ref={CreateToolModalRef} id={id} cb={getList} />
    </div>
  );
}
