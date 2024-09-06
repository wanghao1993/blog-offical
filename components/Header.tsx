"use client";
import BlogName from "./Name";
import Menus from "./Menu/menu";
import Nav from "./Nav";
import ThemeSwitch from "./ThemeToggle";
import LoginInOut from "./LoginOutBtn";
import { SessionProvider } from "next-auth/react";
import Star from "./Star";
import MobileNav from "./MobileNav";
import MainLayout from "./Layouts/MainLayout";
import { osIconMap } from "./themeconfig";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
export default function Header({ ...props }) {
  const { theme, setTheme } = useTheme();
  return (
    <MainLayout>
      <SessionProvider>
        <header
          className="z-10"
          {...props}
          style={{ backgroundColor: "var(--background-color)" }}
        >
          <div className="justify-between py-4  items-center sm:flex hidden">
            <BlogName />
            <div className="flex items-center space-x-4">
              <Nav />
              <ThemeSwitch />
              <LoginInOut />
              <Star />
            </div>
          </div>

          <div className="flex py-2 justify-end space-x-2 items-center sm:hidden">
            <div className="flex space-x-2">
              {Object.keys(osIconMap).map((item) => (
                <button
                  key={item}
                  onClick={() => setTheme(item)}
                  className={`p-2 rounded-md flex items-center justify-center ${
                    item === theme ? "bg-primary-300" : ""
                  } `}
                >
                  {osIconMap[item].icon}
                </button>
              ))}
            </div>
            <Star />
            <MobileNav />
          </div>
        </header>
      </SessionProvider>
    </MainLayout>
  );
}
