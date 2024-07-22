import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "汪浩（Isaac Wang）的博客",
    short_name: "博客",
    description: "个人博客，里面记录了个人的一些情况，以及技术文章等等",
    start_url: "https://super-super.cn/",
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}