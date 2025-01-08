import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./ui/globals.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { content } from "@/lib/font";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ToTop from "@/components/toTop";
const APP_NAME = "汪浩的博客";
const APP_DEFAULT_TITLE = "汪浩（Isaac Wang）的博客";
const APP_TITLE_TEMPLATE = "汪浩（Isaac Wang）的博客";
const APP_DESCRIPTION = "汪浩（Isaac Wang）的博客，一些关于技术和生活的的记录";

const DHeader = dynamic(() => import("@/components/Header"), { ssr: false });
export const metadata: Metadata = {
  keywords:
    "博客，汪浩，Isaac Wang, Javascript, Vue, Css, Nextjs, Nodejs, Docker, web3，区块链，AI工具箱",
  applicationName: APP_NAME,
  icons: "/favicon.ico",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "manifest.json",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.mode === "production" && (
        <>
          <Script
            async
            crossOrigin="anonymous"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6644990816670539"
          ></Script>
          <Script
            id="stripe-js"
            src="https://hm.baidu.com/hm.js?922218601e8a18ab79e59afcf18803b9"
          />
          <GoogleAnalytics gaId="G-4Z3CSGWXGR" />
          <meta name="baidu-site-verification" content="codeva-Nwhahifnu3" />
          <meta name="sogou_site_verification" content="Fjbw33vsbV" />
        </>
      )}

      <body className={content.className}>
        <AntdRegistry>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {/* <LenisProvider> */}
            <div className="sticky top-0 z-10">
              <DHeader />
            </div>
            <main className="min-h-[calc(100vh-150px)] ">{children}</main>
            <Footer />
            <ToTop />
            {/* </LenisProvider> */}
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
