import { signIn } from "next-auth/react";
import { Button } from "antd";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";

export default function LoginBox() {
  const sign = async (type: "github" | "google") => {
    await signIn(type, {
      callbackUrl: location.origin + "/",
      redirect: true,
    });
  };
  return (
    <>
      <div className="text-xl">
        <Button
          type="primary"
          className="w-full !bg-[#24292F] mb-4"
          onClick={() => sign("github")}
          icon={<GithubOutlined></GithubOutlined>}
        >
          Login With Github
        </Button>

        <Button
          color="red"
          className="w-full"
          onClick={() => sign("google")}
          icon={<GoogleOutlined></GoogleOutlined>}
        >
          Login With Google
        </Button>
      </div>
    </>
  );
}
