import { Popover } from "antd";
import { GithubFilled } from "@ant-design/icons";
import Link from "next/link";
export default function GithubStar() {
  return (
    <Popover
      content={
        <Link
          href="https://github.com/wanghao1993/blog-offical"
          target="_blank"
        >
          欢迎Star
        </Link>
      }
    >
      <GithubFilled className="text-lg" />
    </Popover>
  );
}
