import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://super-super.cn/sitemap.xml`,
    host: "https://super-super.cn",
  };
}
