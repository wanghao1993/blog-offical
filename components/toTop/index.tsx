"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
export default function ToTop() {
  const [progress, setProgress] = useState(0);
  const [lenis, setLenis] = useState<any>();
  useLenis((data) => {
    setProgress(data.progress);
    setLenis(data);
  });
  const ref = useRef<HTMLDivElement>(null);

  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const offsetY = (ref.current?.offsetHeight || 0) * progress;
    setOffsetY(offsetY);
  }, [ref, progress]);

  return (
    <div
      ref={ref}
      className={` w-2 fixed right-2 bottom-6 top-20 z-100 rounded-md shadow-md`}
      onClick={() => lenis?.scrollTo(0)}
    >
      <motion.div
        animate={{
          height: `${offsetY - 2}px`,
          paddingTop: `${offsetY > 20 ? offsetY - 20 : 0}px`,
        }}
        transition={{
          duration: 0,
          delay: 0,
        }}
        className={`absolute w-2 bg-primary-400 rounded-md `}
      ></motion.div>
    </div>
  );
}
