import LenisProvider from "@/components/Providers/LenisProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import "./ui/globals.scss";
import Header from "@/components/Header";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextAuthProvider } from "@/components/Providers/AuthProvider";
import { content } from "@/lib/font";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";
import type { Metadata, Viewport } from "next";

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "汪浩的博客";
const APP_TITLE_TEMPLATE = "博客";
const APP_DESCRIPTION = "汪浩（Isaac Wang）的博客。";

export const metadata: Metadata = {
  keywords:
    "博客，汪浩，Isaac Wang, Javascript, Vue, Css, Nextjs, Nodejs, Docker, web3，区块链",
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "./manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
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
      <Script
        id="stripe-js"
        src="https://hm.baidu.com/hm.js?922218601e8a18ab79e59afcf18803b9"
      />

      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      <body className={content.className}>
        <AntdRegistry>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <NextAuthProvider>
              <Header />
              <LenisProvider>
                <main className="min-h-[calc(100vh-110px)] ">{children}</main>
              </LenisProvider>
              <Footer />
            </NextAuthProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
