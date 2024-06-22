import { get } from "@/lib/fetch";
import { CosTypes } from "@/types/cos";
import { Select } from "antd";
import { useEffect, useState } from "react";
import UploadFileModal from "./uploadFile";
export default function BuckerSelect(props: {
  selectBucket: (value: string, list: CosTypes.BucketItem[]) => void;
}) {
  const [bucketList, setBucketList] = useState<CosTypes.BucketItem[]>([]);
  const [bucket, setBucket] = useState("");
  function getBucketList() {
    get<CosTypes.BucketItem[]>("cos/bucket").then((res) => {
      if (res.length) {
        setBucketList(res);
        setBucket(res[0].Name);
        props.selectBucket(res[0].Name, res);
      }
    });
  }
  // Function to handle bucket selection
  const selectBucket = (v: string) => {
    setBucket(v);
    props.selectBucket(v, bucketList);
  };

  useEffect(() => {
    getBucketList();
  }, []);
  return (
    <div className="flex justify-between w-full ">
      <Select
        value={bucket}
        fieldNames={{ label: "Name", value: "Name" }}
        options={bucketList}
        className=" w-1/3 "
        placeholder="请选择桶"
        onChange={(value) => selectBucket(value)}
      />
      <UploadFileModal bucketList={bucketList} />
    </div>
  );
}
