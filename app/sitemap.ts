import { MetadataRoute } from "next";
import { getAllPostsMeta } from "../data/utils/index";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://super-super.cn/";
  const allBlogs = getAllPostsMeta();
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/${post.key}`,
    lastModified: post.date,
  }));

  const routes = ["", "blog", "about"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogRoutes];
}
