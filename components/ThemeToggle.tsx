"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdiThemeLightDark, BiMoon, BiSun } from "./Icon/icon";
import { useTheme } from "next-themes";
import { Button } from "antd";
import { SunOutlined, MoonOutlined, LaptopOutlined } from "@ant-design/icons";
import classNames from "classnames";
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  function clickOutSide(e: MouseEvent) {
    const themeEl = document.getElementById("theme-list");
    const btn = document.getElementById("swiththeme-btn");
    const elTarget = e.target as Node;

    if (elTarget && themeEl && !btn?.contains(elTarget)) {
      const isClickInside = themeEl.contains(elTarget);
      if (!isClickInside) {
        setStatus(false);
      }
    }
  }

  useEffect(() => {
    setMounted(true);

    document.addEventListener("click", clickOutSide);

    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, []);

  // Switch Theme (Light/Dark/OS)
  function switchTheme(theme: string) {
    setTheme(theme);
    setStatus(false);
  }

  const [isActive, setStatus] = useState(false);

  type OsIConMap = Record<string, { icon: JSX.Element; title: string }>;
  const osIconMap: OsIConMap = {
    os: {
      icon: <LaptopOutlined></LaptopOutlined>,
      title: "跟随系统",
    },
    dark: {
      icon: <MoonOutlined></MoonOutlined>,
      title: "夜间模式",
    },
    light: { icon: <SunOutlined></SunOutlined>, title: "日间模式" },
  };

  const className = classNames({
    "p-2": true,
    "duration-100": true,
    "w-52": true,
  });

  return mounted ? (
    <div className="ml-4">
      <motion.div
        onClick={() => setStatus(isActive ? false : true)}
        className="cursor-pointer flex justify-end text-lg  "
        whileHover={{ scale: 1.3 }}
        id="swiththeme-btn"
      >
        {theme && osIconMap[theme].icon}
      </motion.div>
      {isActive && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          id="theme-list"
          className="text-sm  duration-100 relative"
        >
          <div className={`absolute p-2 bg-white top-4 text-black rounded-md`}>
            {Object.entries(osIconMap).map(([key, value]) => (
              <div
                key={key}
                className={className}
                onClick={() => switchTheme(key)}
              >
                <span>{value.icon}</span>
                <span className="ml-2"> {value.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  ) : (
    <></>
  );
}
