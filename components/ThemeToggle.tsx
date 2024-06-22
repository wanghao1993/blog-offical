"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdiThemeLightDark, BiMoon, BiSun } from "./Icon/icon";
import { useTheme } from "next-themes";
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
      icon: MdiThemeLightDark(),
      title: "跟随系统",
    },
    dark: {
      icon: BiMoon(),
      title: "夜间模式",
    },
    light: { icon: BiSun(), title: "日间模式" },
  };

  return mounted ? (
    <div className="ml-4">
      <motion.div
        onClick={() => setStatus(isActive ? false : true)}
        className="cursor-pointer flex justify-end text-lg "
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
          <ul className="absolute w-24 p-1">
            {Object.entries(osIconMap).map(([key, value]) => (
              <li key={key} className="py-1  hover:scale-110  duration-100 ">
                <button
                  className="flex items-center"
                  onClick={() => switchTheme(key)}
                >
                  {value.icon} <span>{value.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  ) : (
    <></>
  );
}
