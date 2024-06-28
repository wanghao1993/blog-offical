"use client";
import { useParams } from "next/navigation";
export default function ArticleDetail() {
  const x = useParams();
  console.log(x);
  return <div>11</div>;
}
