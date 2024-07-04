import { useSession, signOut } from "next-auth/react";
import { SignIn, SignOut } from "./Icon/icon";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Avatar, Spin, Dropdown, MenuProps } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const LoginModal = dynamic(
  () => import("@/components/login/page").then((LoginModal) => LoginModal),
  {
    ssr: false,
  }
);

// 登录和登出
export default function LoginInOut() {
  const { data: session, status } = useSession();
  const { theme } = useTheme();
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center">
          <SignOut color={"black"} /> 登出
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
    <div className="mx-3">
      <LoginModal open={visible} onClose={() => setVisible(false)} />

      {status === "unauthenticated" ? (
        <div onClick={() => setVisible(true)} className="login-icon">
          <SignIn />
        </div>
      ) : status === "authenticated" ? (
        <Dropdown
          trigger={["click"]}
          menu={{ items }}
          dropdownRender={(node) => <span>{node}</span>}
        >
          <Avatar
            size={24}
            src={session?.user?.image}
            alt="avatar"
            className=" cursor-pointer "
          ></Avatar>
        </Dropdown>
      ) : (
        <Spin />
      )}
    </div>
  );
}
