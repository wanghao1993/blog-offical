import { signIn } from "next-auth/react";
import { Button } from "antd";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "登录页",
};

export default function LoginBox() {
  const sign = async (type: "github" | "google") => {
    await signIn(type, {
      callbackUrl: location.origin,
    });
  };
  return (
    <>
      <div className="text-xl">
        <Button
          type="primary"
          className="w-52 !bg-[#24292F]"
          onClick={() => sign("github")}
          icon={<GithubOutlined></GithubOutlined>}
        >
          Login With Github
        </Button>

        <Button
          color="red"
          className="w-52"
          onClick={() => sign("google")}
          icon={<GoogleOutlined></GoogleOutlined>}
        >
          Login With Google
        </Button>
      </div>
    </>
  );
}
