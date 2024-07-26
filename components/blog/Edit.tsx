"use client";

import { ArticleType } from "@/types/article";
import { Divider } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function EditIcon(props: { detail: ArticleType.ArticleItem }) {
  const { data } = useSession();
  return data?.user?.email === "whao53333@gmail.com" ? (
    <>
      <Divider type="vertical" className="mx-2!"></Divider>
      <Link href={`/admin/write?id=${props.detail._id}`}>编辑</Link>
    </>
  ) : (
    <></>
  );
}
