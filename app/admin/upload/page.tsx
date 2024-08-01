"use client";
import SectionContainer from "@/components/SectionContainer";
import { del, get } from "@/lib/fetch";
import { isImageUrl } from "@/lib/utils";
import { CosTypes } from "@/types/cos";
import { Row, Col, Table, Button, message, Image, Divider } from "antd";

import { ReloadOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import BuckerSelect from "@/components/admin/upload/bucketSelect";
import { ColumnProps } from "antd/es/table";
import { SessionProvider, useSession } from "next-auth/react";
import PageNoAuth from "@/components/401";
export default function Bucket() {
  const { data } = useSession();
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    const canEdit = data?.user?.email === "whao53333@gmail.com";
    setCanEdit(canEdit);
  }, [data]);
  // 获取可访问的url
  function getUrl(url: string) {
    navigator.clipboard.writeText(url);
    message.success("复制成功");
  }
  // 删除
  async function deleteObj(key: string) {
    const item = bucketList.find((item) => item.Name === bucket);
    if (item) {
      try {
        await del("cos/object", {
          bucket: item.Name,
          region: item.Location,
          key,
        });
        getObjectList();
      } catch (e) {
        console.log(e);
      }
    }
  }

  // 列名
  const columns: ColumnProps<CosTypes.ObjectItem>[] = [
    {
      title: "对象名称",
      dataIndex: "Key",
      key: "Key",
      ellipsis: true,
    },
    {
      title: "大小",
      dataIndex: "Size",
      key: "Size",
      width: 100,
      render: (text: string) => `${(+text / 1024).toFixed(2)}kb`,
    },
    {
      title: "上次修改时间",
      key: "LastModified",
      width: 160,
      dataIndex: "LastModified",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "缩略图",
      key: "url",
      width: 100,
      dataIndex: "url",
      render: (url: string) => (
        <>
          {isImageUrl(url) ? (
            <Image width={40} src={url} alt={url} placeholder />
          ) : (
            <Button
              onClick={() => {
                if (typeof window !== undefined) {
                  window.open(url, "_blank");
                }
              }}
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
      width: 180,
      render: (_: string, record: CosTypes.ObjectItem) => (
        <>
          <Button type="link" onClick={() => getUrl(record.url)}>
            复制链接
          </Button>
          <Button type="link" danger onClick={() => deleteObj(record.Key)}>
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

  // 获取桶内容
  const [loading, setLoading] = useState(true);

  const getObjectList = useCallback(
    function () {
      setLoading(true);
      const item = bucketList.find((item) => item.Name === bucket);
      if (item) {
        get<{
          Contents: CosTypes.ObjectItem[];
          NextMarker: string;
          IsTruncated: "true" | "false";
        }>(
          "cos/list",
          {
            bucket: item?.Name,
            region: item?.Location,
            pageSize: 1000,
          },
          10
        ).then((res) => {
          setLoading(false);
          setDataSource(res.Contents);
        });
      }
    },
    [bucketList, bucket]
  );
  const [scrollXy, setScrollXy] = useState({
    x: 1000,
    y: 0,
  });
  useEffect(() => {
    setScrollXy({
      x: 1000,
      y: window.innerHeight - 350,
    });
    getObjectList();
  }, [getObjectList]);

  // 选择桶的回调
  const selectBucket = (v: string, list: CosTypes.BucketItem[]) => {
    setBucket(v);
    setBucketList(list);
  };

  const selectBucketHandler = (value: string, list: CosTypes.BucketItem[]) =>
    selectBucket(value, list);

  return !canEdit ? (
    <PageNoAuth></PageNoAuth>
  ) : (
    <>
      <SessionProvider>
        <SectionContainer>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <BuckerSelect
                selectBucket={selectBucketHandler}
                uploadSuccess={getObjectList}
              />
            </Col>
          </Row>
          <Divider></Divider>

          <Button
            onClick={getObjectList}
            size="small"
            icon={<ReloadOutlined></ReloadOutlined>}
            type="primary"
          >
            <span>刷新</span>
          </Button>
          <Table
            bordered
            loading={loading}
            size="small"
            className="mt-2"
            scroll={scrollXy}
            pagination={{
              pageSize: 20,
              total: dataSource.length,
            }}
            dataSource={dataSource}
            rowKey={"Key"}
            columns={columns}
          ></Table>
        </SectionContainer>
      </SessionProvider>
    </>
  );
}
