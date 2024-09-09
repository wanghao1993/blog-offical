"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import LoginModal from "./login/page";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import useLoginModal from "./LoginModal";
const headerNavLinks = [
  {
    title: "博客",
    path: "/blog",
  },
  {
    title: "关于我",
    path: "/about",
  },
];
export default function MobileNav() {
  const pathName = usePathname();
  const [navShow, setNavShow] = useState(false);

  const variants = {
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100vw" },
  };

  useEffect(() => {
    if (navShow) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navShow]);

  const [setVisible] = useLoginModal();

  const { data: session, status } = useSession();
  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 flex justify-center items-center mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={() => setNavShow(!navShow)}
      >
        <MenuOutlined />
      </button>
      <AnimatePresence>
        <motion.div
          key="MobileNav"
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          animate={navShow ? "enter" : "exit"}
          initial="exit"
          exit="exit"
          variants={variants}
          className={classNames(
            "fixed inset-0 z-20 h-full w-full bg-white opacity-95 dark:bg-black"
          )}
        >
          <header className="flex justify-end py-5 px-4">
            <button
              type="button"
              aria-label="toggle modal"
              className="h-8 w-8 rounded"
              style={{ color: "var(--text-color)" }}
              onClick={() => setNavShow(!navShow)}
            >
              <CloseOutlined className="text-xl" />
            </button>
          </header>
          <nav className="fixed mt-8 h-full">
            <div key="Home" className="px-12 py-4">
              <Link
                href="/"
                onClick={() => setNavShow(!navShow)}
                className={classNames(
                  "horizontal-underline font-bold tracking-widest text-gray-900 backdrop:text-2xl dark:text-gray-100",
                  { "horizontal-underline-active": pathName === "/" }
                )}
              >
                Home
              </Link>
            </div>
            {headerNavLinks.map(({ title, path }) => {
              const active = pathName?.includes(path);

              return (
                <div key={title} className="px-12 py-4">
                  <Link
                    href={path}
                    onClick={() => setNavShow(!navShow)}
                    className={classNames(
                      "horizontal-underline font-bold tracking-widest text-gray-900 backdrop:text-2xl dark:text-gray-100",
                      { "horizontal-underline-active": active }
                    )}
                    aria-label={title}
                  >
                    {title}
                  </Link>
                </div>
              );
            })}

            <div key="Login" className="px-12 py-4">
              {status === "unauthenticated" ? (
                <div
                  className=" font-bold tracking-widest text-gray-900 backdrop:text-2xl dark:text-gray-100"
                  onClick={() => setVisible(true)}
                  style={{ color: "var(--text-color)" }}
                >
                  <span className="mr-2">登录</span>
                </div>
              ) : (
                <div
                  className=" font-bold flex tracking-widest text-gray-900 backdrop:text-2xl dark:text-gray-100"
                  onClick={() => signOut()}
                  style={{ color: "var(--text-color)" }}
                >
                  {session && session.user.image && (
                    <Image
                      alt="avatar"
                      src={session.user.image}
                      width={20}
                      height={20}
                    />
                  )}
                  <span className="mr-2">登出</span>
                </div>
              )}
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
