import { useSession, signOut } from "next-auth/react";
import { SignIn, SignOut } from "./Icon/icon";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Avatar, Spin, Dropdown, MenuProps } from "antd";
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
  return (
    <div className="mx-3">
      {status === "unauthenticated" ? (
        <Link href={"/login"} title="登录">
          <SignIn color={theme === "dark" ? "white" : "black"} />
        </Link>
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
