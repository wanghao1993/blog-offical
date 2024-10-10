"use client";
// 引入后进行初始化
import Aegis from "aegis-web-sdk";
import { useEffect } from "react";
export default function LoadScript() {
  useEffect(() => {
    if (typeof Aegis === "function" && process.env.NODE_ENV !== "development") {
      new Aegis({
        id: "3oOZnfLdDd2ExXl11g",
        reportApiSpeed: true,
        reportAssetSpeed: true,
        spa: true,
        hostUrl: "https://rumt-sg.com",
      });
    }
  });
  return <></>;
}
