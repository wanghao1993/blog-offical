import SectionContainer from "./SectionContainer";
import Link from "next/link";
import DownArrow from "@/components/DownArrow";
import CanvasCom from "@/components/canvasCom";
export default function Into() {
  return (
    <SectionContainer>
      <div className=" flex h-[calc(100vh-73px)] items-center  ">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0  font-semibold">
          <div className=" text-6xl  ">Isaac Wang </div>
          <div className="text-2xl my-6 tracking-widest ">
            <p>一名Web开发</p>
          </div>
          <div className="mt-2">
            <Link
              href="/about"
              className="horizontal-underline horizontal-underline-active "
            >
              多一点了解 →
            </Link>
          </div>
          <DownArrow />
          <CanvasCom />
        </div>
      </div>
    </SectionContainer>
  );
}
