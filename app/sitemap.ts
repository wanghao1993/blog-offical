import { MetadataRoute } from "next";
import {
  getAllPostsMeta,
  getAllTags,
  getAllCategory,
} from "../data/utils/index";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://super-super.cn/";
  const allBlogs = getAllPostsMeta();
  const allTags = getAllTags();
  const categories = getAllCategory();
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}blog/${post.key}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "about", "ai-tools"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const tags = Object.keys(allTags).map((tag) => ({
    url: `${siteUrl}blog/tag/${tag}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const cats = Object.keys(categories).map((cat) => ({
    url: `${siteUrl}blog/category/${cat}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogRoutes, ...tags, ...cats];
}
