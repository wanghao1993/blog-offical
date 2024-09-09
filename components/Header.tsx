"use client";
import BlogName from "./Name";
import Nav from "./Nav";
import ThemeSwitch from "./ThemeToggle";
import LoginInOut from "./LoginOutBtn";
import Star from "./Star";
import MobileNav from "./MobileNav";
import MainLayout from "./Layouts/MainLayout";
import { osIconMap } from "./themeconfig";
import { useTheme } from "next-themes";
import classNames from "classnames";
import { NextAuthProvider } from "./Providers/AuthProvider";
export default function Header({ ...props }) {
  const { theme, setTheme } = useTheme();
  return (
    <MainLayout>
      <NextAuthProvider>
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
              <Star />
              <LoginInOut />
            </div>
          </div>

          <div className="flex py-2 justify-end space-x-2 items-center sm:hidden">
            <div className="flex space-x-2">
              {Object.keys(osIconMap).map((item) => (
                <button
                  key={item}
                  onClick={() => setTheme(item)}
                  className={classNames(
                    `p-2 rounded-md flex items-center justify-center`,
                    { "bg-primary-300": item === theme },
                    { "text-white": item === theme }
                  )}
                >
                  {osIconMap[item].icon}
                </button>
              ))}
            </div>
            <Star />
            <MobileNav />
          </div>
        </header>
      </NextAuthProvider>
    </MainLayout>
  );
}
