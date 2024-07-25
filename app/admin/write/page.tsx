"use client";
import "juejin-markdown-themes/dist/mk-cute.css";
import "bytemd/dist/index.css";
import "./page.css";
import { Editor } from "@bytemd/react";
import { ChangeEvent, useState } from "react";
import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import medium from "@bytemd/plugin-medium-zoom";
import gfm from "@bytemd/plugin-gfm";
import { Input, message } from "antd";
import { produce } from "immer";
import ArticalOperations from "@/components/Article/SaveModal";
import MainLayout from "@/components/Layouts/MainLayout";
import PageNoAuth from "@/components/401";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { Spin } from "antd";
// import Editor from "@/components/Editor/editor";

export default function WriteBlog() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const [detail, setDetail] = useState<ArticleType.ArticleItem>();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [canEdit, setCanEdit] = useState(false);
  const { data } = useSession();

  useEffect(() => {
    const canEdit = data?.user?.email === "whao53333@gmail.com";
    setCanEdit(canEdit);
  }, [data]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      get<ArticleType.ArticleItem>("articles/detail", {
        id,
      })
        .then((res) => {
          setDetail(res);
          setValue(res.content);
          setTitle(res.title);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      message.warning("id不存在");
    }
    return () => {
      setLoading(false);
      setDetail(undefined);
    };
  }, [id]);

  const plugins = [
    gfm(),
    medium(),
    highlight(),
    gemoji(),
    frontmatter(),
    breaks(),
  ];

  const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return !canEdit ? (
    <PageNoAuth />
  ) : (
    <MainLayout>
      <Spin spinning={loading}>
        <div className="toolbox mb-2 flex">
          <Input
            onChange={(e) => updateTitle(e)}
            placeholder="文章标题"
            value={title}
          />

          <ArticalOperations
            articleDetail={detail}
            content={value}
            title={title}
          />
        </div>
        <Editor
          uploadImages={async (files) => {
            return files.map((file) => {
              return {
                success: 1,
                url: URL.createObjectURL(file),
              };
            });
          }}
          plugins={plugins}
          value={value}
          mode="split"
          onChange={(v) => {
            setValue(v);
          }}
        />
      </Spin>
    </MainLayout>
  );
}
