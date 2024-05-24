import { Github, Google, WeChat, Alipay } from "@/components/Icon/icon";

export default function LoginBox() {
  return (
    <>
      <div className="flex justify-end text-xl">
        <Github className="mr-2 cursor-pointer"></Github>
        <Google className="mr-2 cursor-pointer"></Google>
        <WeChat className="mr-2 cursor-pointer"></WeChat>
        <Alipay className="cursor-pointer"></Alipay>
      </div>
    </>
  );
}
