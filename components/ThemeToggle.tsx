"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "antd";
import { SunOutlined, MoonOutlined, LaptopOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Divider } from "antd";
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
    flex: true,
    "justify-between": true,
    "cursor-pointer": true,
  });

  return mounted ? (
    <div>
      <div className="ml-4 lg:block hidden">
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
            animate={{ opacity: 1, dur: 300 }}
            exit={{ opacity: 0, dur: 500 }}
            initial={{ opacity: 0 }}
            id="theme-list"
            className="text-sm  duration-100 relative"
          >
            <div
              className={`absolute p-2 bg-[#ddd] top-4 text-black rounded-md -translate-x-1/2 `}
            >
              {Object.entries(osIconMap).map(([key, value]) => (
                <div key={key} className={className}>
                  <div>
                    <span>{value.icon}</span>
                    <span className="ml-2"> {value.title}</span>
                  </div>
                  <div>
                    <Switch
                      size="small"
                      checked={key === theme}
                      id={key}
                      onChange={() => switchTheme(key)}
                    />
                  </div>
                </div>
              ))}

              <div className="absolute w-4 h-4 left-1/2 border-b-gray-200 border-8 border-l-transparent border-r-transparent border-t-transparent -top-4"></div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="lg:hidden">
        <Divider />
        {Object.entries(osIconMap).map(([key, value]) => (
          <div key={key} className={className}>
            <div>
              <span>{value.icon}</span>
              <span className="ml-2"> {value.title}</span>
            </div>
            <div>
              <Switch
                size="small"
                checked={key === theme}
                id={key}
                onChange={() => switchTheme(key)}
              />
            </div>
          </div>
        ))}

        <Divider />
      </div>
    </div>
  ) : (
    <></>
  );
}
