"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
export default function ToTop() {
  const [progress, setProgress] = useState(0);
  useLenis((data) => {
    setProgress(data.progress);
  });
  return (
    <div className={`progress fixed left-0 right-0 w-full top-[45px] z-10 h-1`}>
      <motion.div
        animate={{
          width: `${progress * 100}%`,
          height: "2px",
        }}
        transition={{
          duration: 0,
          delay: 0,
        }}
        className={`absolute w-2 bg-primary rounded-md `}
      ></motion.div>
    </div>
  );
}
