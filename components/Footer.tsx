import Image from "next/image";
import IconPolice from "./../public/police.png";
import Link from "next/link";
import juejin from "./../public/juejin.svg";
import { GithubOutlined } from "@ant-design/icons";
import SectionContainer from "./SectionContainer";
export default function Footer() {
  return (
    <SectionContainer>
      <footer className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center w-full py-2 ">
        <div className="flex items-center opacity-50 text-xs py-4 md:py-0">
          <Image src={IconPolice} width={16} height={16} alt="police-log" />
          <Link
            href="https://beian.mps.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-2 !bg-none"
          >
            粤ICP备2022001810号
          </Link>
        </div>
        <div className="flex space-x-2">
          <Link
            href="https://juejin.cn/user/3227821868060695/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="md:pl-2 !bg-none !hover:bg-none"
          >
            <Image src={juejin} width={26} height={26} alt="juejin-logo" />
          </Link>
          <Link
            href="https://github.com/wanghao1993"
            target="_blank"
            rel="noopener noreferrer"
            className="md:pl-2 !bg-none !hover:bg-none"
          >
            <GithubOutlined className="text-lg" />
          </Link>
        </div>
      </footer>
    </SectionContainer>
  );
}
