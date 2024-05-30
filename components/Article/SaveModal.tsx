import { Button } from "antd";
import SaveForm from "./SaveForm";
import { useState } from "react";
import "./style.css";

export default function ArticalOperations(data: {
  article_id?: string;
  content?: string;
  title?: string;
}) {
  // 草稿箱
  const saveDraft = () => {
    console.log("存草稿箱");
  };

  // 发布弹窗
  const release = () => {
    setFormStatus(true);
  };

  // 关闭弹窗
  const cancel = () => {
    setFormStatus(false);
  };

  const [showForm, setFormStatus] = useState(false);
  return (
    <div className="flex ml-2 relative">
      <Button className="mr-2" onClick={saveDraft}>
        草稿箱
      </Button>
      <Button type="primary" onClick={release}>
        发布
      </Button>

      {showForm ? (
        <div className="arrow absolute z-10 top-12 right-2 px-4 py-6 rounded-md bg-white  w-[50vw] shadow-lg border">
          <SaveForm cancelFn={cancel} />
        </div>
      ) : null}
    </div>
  );
}
