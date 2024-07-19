"use client";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import { renderCanvas } from "@/components/canvas";
import { useEffect } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useContext } from "react";
import { ScrollContext } from "./Providers/ScrollProvider";
export default function Into() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <SectionContainer>
      <div className=" flex h-[calc(100vh-73px)] items-center  ">
        <div
          className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0  font-semibold"
          ref={ref}
        >
          <div className=" text-6xl  ">Isaac Wang </div>
          <div className="text-2xl my-6 tracking-widest ">
            <p>一名Web开发</p>
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
        <motion.div
          animate={{
            transform: scrollY > 50 ? `translateY(100px)` : `translateY(0px)`,
            opacity: scrollY > 50 ? 0 : 1,
          }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <ArrowDownOutlined />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
