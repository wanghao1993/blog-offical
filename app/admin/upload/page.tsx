"use client";
import SectionContainer from "@/components/SectionContainer";
import { get } from "@/lib/fetch";
import { isImageUrl } from "@/lib/utils";
import { CosTypes } from "@/types/cos";
import {
  Row,
  Col,
  Table,
  Select,
  Button,
  message,
  Image,
  PaginationProps,
} from "antd";
import { useEffect, useState } from "react";
export default function Bucket() {
  // 获取可访问的url
  function getUrl(url: string) {
    navigator.clipboard.writeText(url);
    message.success("复制成功");
  }

  // 列名
  const columns = [
    {
      title: "对象名称",
      dataIndex: "Key",
      key: "Key",
    },
    {
      title: "上次修改时间",
      key: "LastModified",
      dataIndex: "LastModified",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "预览",
      key: "url",
      dataIndex: "url",
      render: (url: string) => (
        <>
          {isImageUrl(url) ? (
            <Image width={40} src={url} />
          ) : (
            <Button
              onClick={() => window.open(url, "_blank")}
              size="small"
              type="link"
            >
              浏览器打开
            </Button>
          )}
        </>
      ),
    },
    {
      title: "操作",
      key: "op",
      render: (_: string, record: CosTypes.ObjectItem) => (
        <>
          <Button type="link" onClick={() => getUrl(record.url)}>
            复制链接
          </Button>
          <Button type="link" danger onClick={() => getUrl(record.url)}>
            删除
          </Button>
        </>
      ),
    },
  ];

  // 获取桶列表
  const [bucketList, setBucketList] = useState<CosTypes.BucketItem[]>([]);
  const [bucket, setBucket] = useState("");
  const [dataSource, setDataSource] = useState<CosTypes.ObjectItem[]>([]);

  useEffect(() => {
    function getBucketList() {
      get<CosTypes.BucketItem[]>("cos/bucket").then((res) => {
        if (res.length) {
          setBucketList(res);
          setBucket(res[0].Name);
        }
      });
    }
    getBucketList();
  }, []);

  // 分页
  const [pagination, setPagination] = useState<PaginationProps>({
    showSizeChanger: true,
    pageSize: 10,
    current: 1,
    showLessItems: false,
    showPrevNextJumpers: true,
    showQuickJumper: true,
    total: 0,
    showTotal(total) {
      return `共${total}项`;
    },
  });
  const tableChange = (pagination: PaginationProps) => {
    setPagination({ ...pagination });
  };

  // 获取桶内容
  let marker = "";
  useEffect(() => {
    const item = bucketList.find((item) => item.Name === bucket);
    item &&
      get<{
        Contents: CosTypes.ObjectItem[];
        NextMarker: string;
      }>("cos/list", {
        bucket: item?.Name,
        region: item?.Location,
        marker,
        pageSize: pagination.pageSize,
      }).then((res) => {
        setDataSource(res.Contents);
        marker = res.NextMarker;
      });
  }, [bucket, pagination]);
  const selectBucket = (v: string) => {
    setBucket(v);
  };
  return (
    <>
      <SectionContainer>
        <Row gutter={[20, 20]}>
          <Col span={8}>
            <Select
              value={bucket}
              fieldNames={{ label: "Name", value: "Name" }}
              options={bucketList}
              className="w-full"
              placeholder="请选择桶"
              onChange={(value) => selectBucket(value)}
            />
          </Col>
        </Row>
        <Table
          size="small"
          className="mt-2"
          pagination={pagination}
          dataSource={dataSource}
          rowKey={"Key"}
          columns={columns}
          onChange={tableChange}
        ></Table>
      </SectionContainer>
    </>
  );
}
