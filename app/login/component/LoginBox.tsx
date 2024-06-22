import { Github, Google, WeChat, Alipay } from "@/components/Icon/icon";
import { signIn, signOut } from "next-auth/react";

export default function LoginBox() {
  const sign = async () => {
    await signIn("github");
  };
  return (
    <>
      <div className="flex justify-end text-xl">
        <Github className="mr-2 cursor-pointer" onClick={sign}></Github>
        {/* <Google className="mr-2 cursor-pointer"></Google>
        <WeChat className="mr-2 cursor-pointer"></WeChat>
        <Alipay className="cursor-pointer"></Alipay> */}
      </div>
    </>
  );
}
