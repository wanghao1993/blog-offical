"use client";
import { motion } from "framer-motion";
import { ArrowDownOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ScrollContext } from "./Providers/ScrollProvider";
export default function DownArrow() {
  const { scrollY } = useContext(ScrollContext);
  return (
    <motion.div
      animate={{
        transform: scrollY > 80 ? "translateY(100px)" : "translateY(0px)",
        opacity: scrollY > 80 ? 0 : 1,
      }}
      className="absolute bottom-1 left-1/2 -translate-x-1/2 cursor-pointer"
    >
      <ArrowDownOutlined />
    </motion.div>
  );
}
