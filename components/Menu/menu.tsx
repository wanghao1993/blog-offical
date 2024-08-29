"use client";

import {
  CloseCircleFilled,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import LoginInOut from "../LoginOutBtn";
import Nav from "../Nav";
import ThemeSwitch from "../ThemeToggle";
import { Drawer } from "antd";
import { useEffect, useState } from "react";

export default function Menus() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 798) {
        setOpen(false);
      }
    };
  }, []);
  return (
    <>
      <div className="items-center hidden md:flex gap-4">
        <Nav />
        <ThemeSwitch />
        <LoginInOut />
      </div>

      <div className="block md:hidden">
        <MenuOutlined className="text-lg" onClick={() => setOpen(true)} />

        <Drawer
          placement={"right"}
          width={320}
          closeIcon={null}
          title={
            <CloseOutlined
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          }
          style={{
            color: "var(--text-color)",
            backgroundColor: "var(--background-color)",
          }}
          open={open}
          destroyOnClose
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
