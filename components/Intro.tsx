"use client";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import { renderCanvas } from "@/components/canvas";
import { useEffect } from "react";
export default function Into() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <SectionContainer>
      <div className=" flex h-[calc(100vh-73px)] items-center  ">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0  font-semibold">
          <div className=" text-6xl  ">Isaac Wang </div>
          <div className="text-2xl my-6 tracking-widest ">
            <p>一名默默无闻的半栈开发，希望成为一名大佬</p>
          </div>
          <div className="mt-2">
            <Link
              href="/about"
              className="horizontal-underline horizontal-underline-active"
            >
              多一点了解 →
            </Link>
          </div>
        </div>
        <canvas
          className="bg-skin-base pointer-events-none absolute inset-0"
          id="canvas"
        ></canvas>
      </div>
    </SectionContainer>
  );
}
