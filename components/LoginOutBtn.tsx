"use client";
import { useSession, signOut } from "next-auth/react";
import { SignIn, SignOut } from "./Icon/icon";
import { MenuProps } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
const LoginModal = dynamic(
  () => import("@/components/login/page").then((LoginModal) => LoginModal),
  {
    ssr: false,
  }
);

// 登录和登出
export default function LoginInOut() {
  const { data: session, status } = useSession();
  const items: MenuProps["items"] = [
    // {
    //   label: (
    //     <div className="flex items-center  ">
    //       <UserOutlined />
    //       <span>个人资料</span>
    //     </div>
    //   ),
    //   key: "profile",
    //   onClick: () => {
    //     signOut();
    //   },
    // },
    {
      label: (
        <div className="flex items-center">
          <SignOut />
          <span>登出</span>
        </div>
      ),
      key: "signOut",
      onClick: () => {
        signOut();
      },
    },
  ];

  const [visible, setVisible] = useState(false);

  return (
    <div>
      {status === "unauthenticated" ? (
        <div
          className="sm:hidden  flex items-center text-lg  cursor-pointer"
          onClick={() => setVisible(true)}
          style={{ color: "var(--text-color)" }}
        >
          <span className="mr-2">登录</span>
          <SignIn />
        </div>
      ) : (
        <div
          className="sm:hidden  flex items-center text-lg  cursor-pointer"
          onClick={() => signOut()}
          style={{ color: "var(--text-color)" }}
        >
          <span className="mr-2">登出</span>
          <SignOut />
        </div>
      )}
    </div>
  );
}
