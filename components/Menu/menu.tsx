"use client";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import LoginInOut from "../LoginOutBtn";
import Nav from "../Nav";
import ThemeSwitch from "../ThemeToggle";
import { Drawer } from "antd";
import { useEffect, useState } from "react";

export default function Menus() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 1023) {
        setOpen(false);
      }
    };
  }, []);
  return (
    <>
      <div className="items-center hidden lg:flex">
        <Nav />
        <ThemeSwitch />
        <LoginInOut />
      </div>

      <div className="block lg:hidden">
        <MenuOutlined className="text-lg" onClick={() => setOpen(true)} />

        <Drawer
          placement={"right"}
          width={320}
          open={open}
          destroyOnClose
          onClose={() => setOpen(false)}
        >
          <div className="flex flex-col">
            <Nav />
            <ThemeSwitch />
            <LoginInOut />
          </div>
        </Drawer>
      </div>
    </>
  );
}
