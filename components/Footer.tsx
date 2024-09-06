import Image from "next/image";
import Link from "next/link";
import juejin from "./../public/juejin.svg";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import SectionContainer from "./SectionContainer";
export default function Footer() {
  return (
    <SectionContainer>
      <footer className="flex sm:flex-row flex-col-reverse sm:justify-between justify-center items-center w-full py-6">
        <div className="flex items-center opacity-50 text-lg py-4 sm:py-0">
          © {new Date().getFullYear()} • Isaac Wang 汪浩
        </div>
        <div className="flex space-x-4 items-center">
          <Link
            href="https://juejin.cn/user/3227821868060695/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={juejin} width={20} height={20} alt="juejin-logo" />
          </Link>
          <Link
            href="https://github.com/wanghao1993"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined className="text-lg" />
          </Link>

          <Link
            href="mailTo:whao53333@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlined className="text-lg" />
          </Link>
        </div>
      </footer>
    </SectionContainer>
  );
}
