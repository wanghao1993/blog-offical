import Image from "next/image";
import IconPolice from "./../public/police.png";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full opacity-80 text-sm py-2 h-14 ">
      <Image src={IconPolice} width={16} height={16} alt="police-log" />
      <a
        href="https://beian.mps.gov.cn"
        target="_blank"
        rel="noopener noreferrer"
        className="pl-2"
      >
        粤ICP备2022001810号
      </a>
    </footer>
  );
}
