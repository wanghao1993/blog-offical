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
import { Input } from "antd";
import { produce } from "immer";
import ArticalOperations from "@/components/Article/SaveModal";
import MainLayout from "@/components/Layouts/MainLayout";
import PageNoAuth from "@/components/401";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function WriteBlog() {
  const [value, setValue] = useState("");
  const [articalInfo, setArticalInfo] = useState({
    title: "",
  });
  const [canEdit, setCanEdit] = useState(false);
  const { data } = useSession();

  useEffect(() => {
    const canEdit = data?.user?.email === "whao53333@gmail.com";
    setCanEdit(canEdit);
  }, [data]);

  const plugins = [
    gfm(),
    medium(),
    highlight(),
    gemoji(),
    frontmatter(),
    breaks(),
  ];

  const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setArticalInfo(
      produce((draft) => {
        draft.title = e.target.value;
      })
    );
  };
  return !canEdit ? (
    <PageNoAuth />
  ) : (
    <MainLayout>
      <div className="toolbox mb-2 flex">
        <Input onChange={(e) => updateTitle(e)} placeholder="文章标题" />

        <ArticalOperations content={value} title={articalInfo.title} />
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
    </MainLayout>
  );
}
