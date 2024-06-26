import { Button, message } from "antd";
import SaveForm from "./SaveForm";
import { useState } from "react";
import "./article.scss";
import { post } from "@/lib/fetch";
import { FieldType } from "./SaveForm";
import { useRouter } from "next/navigation";

export default function ArticalOperations(data: {
  article_id?: string;
  content?: string;
  title?: string;
}) {
  // 草稿箱
  const saveDraft = (formData: FieldType) => {
    post("articles/create", {
      abstract: formData.abstract,
      tags: formData.tags,
      categories: formData.categories,
      coverImg: formData.coverImg,
      content: data.content,
      title: data.title,
      isPublished: false,
    }).then(() => {
      message.success("发布成功");
      setFormStatus(false);
      router.push("/blog");
    });
  };

  // 发布弹窗
  const router = useRouter();
  const release = (formData: FieldType) => {
    console.log(formData);
    // post("articles/create", {
    //   abstract: formData.abstract,
    //   tags: formData.tags,
    //   categories: formData.categories,
    //   coverImg: formData.coverImg,
    //   content: data.content,
    //   title: data.title,
    //   isPublished: true,
    // }).then(() => {
    //   message.success("发布成功");
    //   setFormStatus(false);
    //   router.push("/blog");
    // });
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
      <Button type="primary" onClick={() => setFormStatus(true)}>
        发布
      </Button>

      {showForm ? (
        <div className="arrow">
          <SaveForm
            cancelFn={cancel}
            onFinish={release}
            saveAsDraft={saveDraft}
          />
        </div>
      ) : null}
    </div>
  );
}
