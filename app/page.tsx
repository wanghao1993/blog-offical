import Intro from "@/components/Intro";
import Works from "@/components/Works";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import { Suspense } from "react";
import RecentPosts from "@/components/RecentPost";
export const dynamic = "force-dynamic";
// 引入后进行初始化
import Aegis from "aegis-web-sdk";

new Aegis({
  id: "nGRv4iKEmEZDVkvnPL", // 上报 id
  uin: "isaacwang", // 用户唯一 ID（可选）
  reportApiSpeed: true, // 接口测速
  reportAssetSpeed: true, // 静态资源测速
  spa: true, // spa 应用页面跳转的时候开启 pv 计算
  hostUrl: "https://super-super.cn/",
});
export default function Home() {
  return (
    <div>
      <Intro />
      <Works />
      <RecentPosts />
    </div>
  );
}
