import Intro from "@/components/Intro";
import Works from "@/components/Works";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import RecentPosts from "@/components/RecentPost";
export const dynamic = "force-dynamic";
import dynamicImport from "next/dynamic";

const LoadScript = dynamicImport(() => import("@/components/Script"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <LoadScript />
      <Intro />
      <Works />
      <RecentPosts />
    </div>
  );
}
