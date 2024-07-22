import { Button, message } from "antd";
import SaveForm from "./SaveForm";
import { useState } from "react";
import { post } from "@/lib/fetch";
import { FieldType } from "./SaveForm";
import { useRouter } from "next/navigation";
import { ArticleType } from "@/types/article";

export default function ArticalOperations(data: {
  articleDetail?: ArticleType.ArticleItem;
  content?: string;
  title?: string;
}) {
  // 发布弹窗
  const router = useRouter();
  const release = (formData: FieldType) => {
    if (!data.content) {
      message.warning("请输入文章内容。");
      return;
    }
    if (!data.title) {
      message.warning("请输入文章标题。");
      return;
    }
    post("articles/create", {
      id: data?.articleDetail?._id,
      abstract: formData.abstract,
      tags: formData.tags,
      categories: formData.categories,
      coverImg: formData.coverImg,
      content: data.content,
      title: data.title,
      isPublished: true,
    }).then(() => {
      message.success("发布成功");
      setFormStatus(false);
      router.push("/blog");
    });
  };

  // 关闭弹窗
  const cancel = () => {
    setFormStatus(false);
  };

  const [showForm, setFormStatus] = useState(false);
  return (
    <div className="flex ml-2 relative">
      <Button type="primary" onClick={() => setFormStatus(true)}>
        发布
      </Button>

      {showForm ? (
        <div>
          <SaveForm
            articleDetail={data.articleDetail}
            cancelFn={cancel}
            onFinish={release}
            content={data.content}
            // saveAsDraft={saveDraft}
          />
        </div>
      ) : null}
    </div>
  );
}
