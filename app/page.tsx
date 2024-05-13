import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Works from "@/components/Works";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
export default function Home() {
  return (
    <ScrollProvider>
      <Header></Header>
      <Intro></Intro>
      <Works></Works>
    </ScrollProvider>
  );
}
