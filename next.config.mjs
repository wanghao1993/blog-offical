/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";
import pwa from "next-pwa";
import { withContentlayer } from "next-contentlayer";
const withMDX = mdx();
const withPWA = pwa({
  dest: "public",
  register: true,
});
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
        hostname: "super-super.cn",
      },
      {
        protocol: "https",
        hostname: "**.myqcloud.com",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  transpilePackages: ["next-mdx-remote"],
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ];
  },
};
let config;
if (process.env.env === "production") {
  config = withContentlayer(withMDX(withPWA(nextConfig)));
} else {
  config = withContentlayer(withMDX(nextConfig));
}

export default config;
