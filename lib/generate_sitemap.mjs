import fs from "fs";
import path from "path";

const generateSitemap = () => {
  fetch("https:/super-super.cn/api/articles/list?page=1&pageSize=10000").then(
    async (res) => {
      res = await res.json();
      const list = res.data.list.map((item) => ({
        id: item._id,
        lastmod: item.updatedAt,
      }));

      const siteMap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

          <url>
            <loc>https://www.super-super.cn/</loc>
            <lastmod>2024-07-22T07:08:29+00:00</lastmod>
            <priority>1.00</priority>
          </url>
          <url>
            <loc>https://www.super-super.cn/blog</loc>
            <lastmod>2024-07-22T07:08:29+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          <url>
            <loc>https://www.super-super.cn/about</loc>
            <lastmod>2024-07-22T07:08:29+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          ${list
            .map((item) => {
              return `
          <url>
            <loc>https://www.super-super.cn/blog/${item.id}</loc>
            <lastmod>${item.lastmod}</lastmod>
            <priority>0.60</priority>
          </url>
    `;
            })
            .join("\n")}
            
      </urlset>`;
      const data = Buffer.from(siteMap);
      fs.writeFile("./app/sitemap.xml", data, (err) => {
        if (err) throw err;
        console.log("文件已被保存");
      });
    }
  );
};

generateSitemap();
