"use client";

import { get, post } from "@/lib/fetch";
import { EyeOutlined, LikeOutlined } from "@ant-design/icons";
import { PostTypes } from "@/types/post";
import { useSession } from "next-auth/react";
import LoginModal from "../login/page";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";

export default function LikeAndCollect(data: { blogKey: string }) {
  const [detail, setDetail] = useState<PostTypes.PostDetail>({
    blog_key: "",
    views_count: 0,
    likes_count: [],
    blog_id: -1,
    blog_title: "",
  });

  useEffect(() => {
    get<PostTypes.PostDetail>("blog/detail", {
      key: data.blogKey,
    }).then((res) => {
      setDetail(res);
    });
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
    <div className="py-4 flex items-center space-x-4 text-md text-[--text-color] opacity-70">
      <div>
        <EyeOutlined /> {detail.views_count}
      </div>

      {/* <div onClick={() => like()} className="text-primary-100 cursor-pointer">
        <LikeOutlined /> {detail.likes_count.length}
      </div> */}
      <LoginModal open={visible} onClose={() => setVisible(false)}></LoginModal>
    </div>
  );
}
