"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdiThemeLightDark, BiMoon, BiSun } from "./Icon/icon";
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  type Theme = "dark" | "light" | "os";
  const [theme, setTheme] = useState<Theme>("dark");

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
    const localTheme: Theme =
      (window.localStorage.getItem("theme") as Theme) || theme;

    switchTheme(localTheme);
    setMounted(true);

    document.addEventListener("click", clickOutSide);

    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, []);

  // Switch Theme (Light/Dark/OS)
  function switchTheme(theme: Theme) {
    setTheme(theme);
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
    setStatus(false);
  }

  const [isActive, setStatus] = useState(false);

  type OsIConMap = Record<Theme, { icon: JSX.Element; title: string }>;
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
    <div className="fixed right-4 top-4">
      <motion.div
        onClick={() => setStatus(isActive ? false : true)}
        className="cursor-pointer flex justify-end"
        whileHover={{ scale: 1.3 }}
        id="swiththeme-btn"
      >
        {osIconMap[theme].icon}
      </motion.div>
      {isActive && (
        <motion.div animate={{ y: 0 }} initial={{ y: -100 }} id="theme-list">
          <ul>
            {Object.entries(osIconMap).map(([key, value]) => (
              <li key={key}>
                <button
                  className="flex items-center"
                  onClick={() => switchTheme(key as Theme)}
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
    <>Loading</>
  );
}
