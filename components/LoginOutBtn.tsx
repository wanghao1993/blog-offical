"use client";
import { useSession, signOut } from "next-auth/react";
import { Avatar, Dropdown, MenuProps } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
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
    {
      label: (
        <div className="flex items-center">
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

  useEffect(() => {
    if (
      status === "authenticated" &&
      session.user.email === "whao53333@gmail.com"
    ) {
      items.unshift({
        label: (
          <div className="flex items-center">
            <Link
              href={"/ai-tools/manage"}
              className="text-primary-100 hover:text-primary-200"
            >
              AI应用管理
            </Link>
          </div>
        ),
        key: "aiAppManage",
      });
    }
  }, [session]);

  return (
    <>
      <LoginModal open={visible} onClose={() => setVisible(false)}></LoginModal>
      {status === "unauthenticated" ? (
        <div
          className=" w-fit font-extrabold cursor-pointer ml-2 mt-1"
          onClick={() => setVisible(true)}
          style={{ color: "var(--text-color)" }}
        >
          登录
        </div>
      ) : (
        <Dropdown
          trigger={["click"]}
          menu={{ items }}
          dropdownRender={(node) => <span>{node}</span>}
        >
          <Avatar
            size={28}
            shape={"circle"}
            src={session?.user?.image}
            alt="avatar"
            className="cursor-pointer"
          ></Avatar>
        </Dropdown>
      )}
    </>
  );
}
