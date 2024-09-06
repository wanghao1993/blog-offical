import { LaptopOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
type OsIConMap = Record<string, { icon: JSX.Element; title: string }>;
export const osIconMap: OsIConMap = {
  os: {
    icon: <LaptopOutlined></LaptopOutlined>,
    title: "跟随系统",
  },
  dark: {
    icon: <MoonOutlined></MoonOutlined>,
    title: "夜间模式",
  },
  light: { icon: <SunOutlined></SunOutlined>, title: "日间模式" },
};
