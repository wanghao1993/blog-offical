"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
export default function ToTop() {
  const [lenis, setLenis] = useState<any>();
  const [progress, setProgress] = useState(0);
  const [y, setY] = useState(0);
  let mounted = false;
  useLenis((data) => {
    if (mounted) {
      setLenis(data);
      setProgress(data.progress);
      setY(data.scroll);
    }
    mounted = true;
  });

  return (
    <div>
      <motion.div
        animate={{
          width: `${progress * 100}%`,
          height: "2px",
        }}
        transition={{
          duration: 0,
          delay: 0,
        }}
        className={`progress w-2 bg-primary-500 rounded-md  fixed left-0 right-0 w-full top-[55px] z-10 h-1`}
      ></motion.div>

      {y > 200 && (
        <div
          className="fixed bottom-4 right-0 shadow-md rounded-full cursor-pointer z-10"
          onClick={() => lenis?.scrollTo(0)}
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10798"
            width="32"
            height="32"
          >
            <path
              d="M512 1024c-282.784 0-512-229.216-512-512 0-282.752 229.216-512 512-512 282.752 0 512 229.248 512 512 0 282.784-229.248 512-512 512z m0-977.44c-257.056 0-465.472 208.384-465.472 465.44 0 257.056 208.416 465.472 465.472 465.472s465.44-208.416 465.44-465.472S769.088 46.592 512 46.592z m194.24 580.064a28.928 28.928 0 0 1-20 7.776 28.928 28.928 0 0 1-20-7.776l-126.176-119.232v244.128c0 14.4-12.576 26.144-28.064 26.144s-28.096-11.744-28.096-26.144v-244.16l-126.176 119.264a28.8 28.8 0 0 1-19.936 7.776 28.864 28.864 0 0 1-20-7.776 25.088 25.088 0 0 1-8.064-18.368c0-6.912 2.88-13.408 8.064-18.304l174.24-164.672a28.8 28.8 0 0 1 19.968-7.776 28.8 28.8 0 0 1 19.968 7.776l174.24 164.672a25.056 25.056 0 0 1 8.064 18.304c0 6.912-2.88 13.44-8.064 18.368z m-13.312-247.36h-361.856c-16.672 0-30.24-12.672-30.24-28.224s13.568-28.16 30.24-28.16h361.856c16.672 0 30.24 12.608 30.24 28.16s-13.568 28.224-30.24 28.224z"
              fill="#a34eb3"
              p-id="10799"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}
