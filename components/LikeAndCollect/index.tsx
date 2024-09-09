"use client";

import { get, post } from "@/lib/fetch";
import { EyeOutlined, LikeOutlined } from "@ant-design/icons";
import { PostTypes } from "@/types/post";
import { useSession } from "next-auth/react";
import LoginModal from "../login/page";
import { useEffect, useState } from "react";

export default function LikeAndCollect(data: { blogKey: string }) {
  const [detail, setDetail] = useState<PostTypes.PostDetail>();

  const getData = async () => {
    const res = await get<PostTypes.PostDetail>("blog/detail", {
      key: data.blogKey,
    });

    setDetail(res);
  };

  useEffect(() => {
    getData();
  }, [data.blogKey]);
  const session = useSession();

  const like = async () => {
    if (session.status === "authenticated") {
      const res = await post<PostTypes.PostDetail>("blog/detail", {
        blog_key: detail?.blog_key,
      });
      setDetail(res);
    } else {
      setVisible(true);
    }
  };

  const [visible, setVisible] = useState(false);
  return (
    detail && (
      <div className="py-4 flex items-center space-x-4 text-md text-[--text-color] opacity-70">
        <div>
          <EyeOutlined /> {detail.views_count}
        </div>

        <div onClick={() => like()} className="text-primary-100 cursor-pointer">
          <LikeOutlined /> {detail.likes_count.length}
        </div>
        <LoginModal
          open={visible}
          onClose={() => setVisible(false)}
        ></LoginModal>
      </div>
    )
  );
}
