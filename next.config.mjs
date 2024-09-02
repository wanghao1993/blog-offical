/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";
import { withContentlayer } from "next-contentlayer";
const withMDX = mdx();
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.myqcloud.com",
      },
      {
        protocol: "https",
        hostname: "**.xitu.io",
      },
      {
        protocol: "https",
        hostname: "**.byteimg.com",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  transpilePackages: ["next-mdx-remote"],
};

export default withContentlayer(withMDX(nextConfig));
