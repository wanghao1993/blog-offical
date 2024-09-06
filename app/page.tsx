import Intro from "@/components/Intro";
import Works from "@/components/Works";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import { Suspense } from "react";
import RecentPosts from "@/components/RecentPost";
export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <Works></Works>
      <RecentPosts />
    </div>
  );
}
