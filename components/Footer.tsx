import Image from "next/image";
import IconPolice from "./../public/police.png";
import Link from "next/link";
import { GithubOutlined } from "@ant-design/icons";
export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full  py-2 px-4 sm:px-9 xl:max-w-5xl xl:px-0  ">
      <div className="flex items-center opacity-50 text-xs">
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
      <div>
        <Link
          href="https://beian.mps.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="pl-2 !bg-none"
        >
          <GithubOutlined size={26} />
        </Link>
      </div>
    </footer>
  );
}
